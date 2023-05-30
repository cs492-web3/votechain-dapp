import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { walletAddressState } from "../atom";

import {
  getCandidateName,
  getTotalCandidateNum,
  voteAndGetNFT,
  getRecentTokenId,
  getNFTTokenCA,
  getDescription,
  getIsShowResultImm,
} from "../api/voteAPI";
import TransactionDialog from "../../components/TransactionDialog";
import { useRouter } from "next/router";
import NFTDialog from "../../components/NFTDialog";

const Vote = () => {
  const router = useRouter();
  const [transactionResult, setTransactionResult] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const [contractAddress, setContractAddress] = useState("");
  const [contractABI, setContractABI] = useState("");
  const walletAddress = useRecoilValue(walletAddressState);
  const [tokenId, setTokenId] = useState("");
  const [NFTCA, setNFTCA] = useState("");
  const [totalCandidateNum, setTotalCandidateNum] = useState(0);
  const [candidateList, setCandidateList] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  const [description, setDescription] = useState("");
  const [isShowResultImm, setIsShowResultImm] = useState(false);

  // contract address를 바탕으로 ABI 가져오기
  useEffect(() => {
    const address = router.query["address"];
    const baseurl = "https://api-goerli.etherscan.io/api";
    const params = {
      module: "contract",
      action: "getabi",
      address: address,
      apikey: process.env.ETHERSCAN_API_KEY,
    };

    const queryString = new URLSearchParams(params).toString(); // url에 쓰기 적합한 querySting으로 return 해준다.
    const requrl = `${baseurl}?${queryString}`;
    setContractAddress(address);

    const fetchContractABI = async () => {
      const response = await fetch(requrl);
      const json = await response.json();
      if (json.status == "1") {
        const abi = JSON.parse(json.result);
        setContractABI(abi);
      } else {
        alert(json.result);
        router.back();
      }
    };

    if (address != undefined) {
      fetchContractABI();
    }
  }, [router.query]);

  // 전체 투표 후보 수 구하기
  useEffect(() => {
    async function getTotalCandidateNumber() {
      const ABI = JSON.parse(JSON.stringify(contractABI));
      const count = await getTotalCandidateNum(ABI, contractAddress);
      const InfoText = await getDescription(ABI, contractAddress);
      const isShowImm = await getIsShowResultImm(ABI, contractAddress);
      if (!isNaN(count)) {
        setTotalCandidateNum(Number(count));
        setDescription(InfoText);
        setIsShowResultImm(Boolean(Number(isShowImm)));
      }
    }

    if (contractABI != "" && contractAddress != "") {
      getTotalCandidateNumber();
    }
  }, [contractAddress, contractABI]);

  // 전체 투표 후보 정보 가져오기
  useEffect(() => {
    async function getCandidateInfo(id) {
      const ABI = JSON.parse(JSON.stringify(contractABI));
      const name = await getCandidateName(ABI, contractAddress, id);
      setCandidateList((prev) => [...prev, name]);
    }
    if (contractABI != "" && contractAddress != "") {
      for (let id = 0; id < totalCandidateNum; id++) {
        getCandidateInfo(id);
      }
    }
  }, [totalCandidateNum]);

  //NFT 정보 가져오기
  useEffect(() => {
    async function getNFT() {
      const ABI = JSON.parse(JSON.stringify(contractABI));
      const newTokenId = await getRecentTokenId(ABI, contractAddress);
      const newNFTCA = await getNFTTokenCA(ABI, contractAddress);
      setTokenId(String(Number(newTokenId) + 1));
      setNFTCA(newNFTCA);
    }

    if (contractABI != "" && contractAddress != "" && walletAddress != "") {
      getNFT();
    }
  }, [contractABI, contractAddress, walletAddress]);

  const handleClick = (e) => {
    if (contractAddress == "0x22c55175979861e95C79543d5028DE8Cf1a57bF8") {
      setSelectedCandidates([Number(e.target.id)]);
    } else {
      if (Number(e.target.id) in selectedCandidates) {
        setSelectedCandidates((prev) =>
          prev.filter((i) => i != Number(e.target.id))
        );
      } else {
        setSelectedCandidates((prev) => [...prev, Number(e.target.id)]);
      }
    }
  };

  const voteHandler = async () => {
    if (selectedCandidates.length == 0) {
      alert("후보자를 선택해주세요");
    } else {
      const ABI = JSON.parse(JSON.stringify(contractABI));
      setModalOpen(true);
      const result = await voteAndGetNFT(
        ABI,
        contractAddress,
        selectedCandidates
      );
      setTransactionResult(result);
    }
  };

  const handleModalClose = () => {
    if (Object.entries(setTransactionResult).length != 0) {
      setModalOpen(false);
      if (isShowResultImm && transactionResult.status == "success") {
        router.push({ pathname: "/vote-results" });
      } else {
        router.push({ pathname: "/all-votes" });
      }
    }
  };
  const onClickClose = () => {
    setModalOpen(false);
    if (isShowResultImm && transactionResult.status == "success") {
      router.push({ pathname: "/vote-results" });
    } else {
      router.push({ pathname: "/all-votes" });
    }
  };

  return (
    <S.RootStyle>
      <S.Title>Let's Vote and Get NFT! 🌌</S.Title>
      <S.Description>{description}</S.Description>
      <S.CandidateContainer>
        {candidateList.map((name, index) => {
          return (
            <S.Candidate
              selected={selectedCandidates.includes(index)}
              key={index}
              id={index}
              onClick={handleClick}
            >
              {name}
            </S.Candidate>
          );
        })}
      </S.CandidateContainer>
      <S.VoteButton onClick={voteHandler}>투표하기</S.VoteButton>
      <TransactionDialog
        open={modalOpen}
        result={transactionResult}
        handleClose={handleModalClose}
        onClickClose={onClickClose}
        NFTCA={NFTCA}
        tokenId={tokenId}
      />
    </S.RootStyle>
  );
};

export default Vote;
