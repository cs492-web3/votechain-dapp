import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
  walletAddressState,
  contractAddressState,
  contractABIState,
} from "../atom";

import {
  getCandidateName,
  getTotalCandidateNum,
  voteAndGetNFT,
  getTokenId,
  getNFTTokenCA,
} from "../api/voteAPI";
import TransactionDialog from "../../components/TransactionDialog";
import { useRouter } from "next/router";

const Vote = () => {
  const router = useRouter();
  const [transactionResult, setTransactionResult] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const [contractAddress, setContractAddress] =
    useRecoilState(contractAddressState);
  const [contractABI, setContractABI] = useRecoilState(contractABIState);
  const address = useRecoilValue(walletAddressState);
  const [tokenId, setTokenId] = useState("");
  const [NFTTokenCA, setNFTTokenCA] = useState("");
  const [totalCandidateNum, setTotalCandidateNum] = useState(0);
  const [candidateList, setCandidateList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  // contract address를 바탕으로 ABI 가져오기
  useEffect(() => {
    const address = router.asPath.split(/\?/)[1].split("=")[1];
    const baseurl = "http://api-goerli.etherscan.io/api";
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

    fetchContractABI();
  }, []);

  // 전체 투표 후보 수 구하기
  useEffect(() => {
    async function getTotalCandidateNumber() {
      const ABI = JSON.parse(JSON.stringify(contractABI));
      const count = await getTotalCandidateNum(ABI);
      if (!isNaN(count)) {
        setTotalCandidateNum(Number(count));
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
      const name = await getCandidateName(ABI, address, id);
      setCandidateList((prev) => [...prev, name]);
    }

    if (contractABI != "" && contractAddress != "") {
      for (let id = 0; id < totalCandidateNum; id++) {
        getCandidateInfo(id);
      }
    }
  }, [totalCandidateNum]);

  useEffect(() => {
    async function getNFT() {
      const ABI = JSON.parse(JSON.stringify(contractABI));
      const newTokenId = await getTokenId(ABI, address);
      const newNFTTokenCA = await getNFTTokenCA(ABI);
      setTokenId(newTokenId);
      setNFTTokenCA(newNFTTokenCA);
    }

    if (contractABI != "" && contractAddress != "" && address != "") {
      getNFT();
      console.log("NFTTokenCA ", NFTTokenCA);
      console.log("tokenId", tokenId);
    }
  }, [address]);

  const handleClick = (e) => {
    setSelectedId(Number(e.target.id));
  };

  const voteHandler = async () => {
    if (selectedId == null) {
      alert("후보자를 선택해주세요");
    } else {
      const ABI = JSON.parse(JSON.stringify(contractABI));
      setModalOpen(true);
      const result = await voteAndGetNFT(ABI, address, selectedId);
      setTransactionResult(result);
    }
  };

  const handleModalClose = () => {
    if (Object.entries(setTransactionResult).length != 0) {
      setModalOpen(false);
    }
  };
  const onClickClose = () => {
    setModalOpen(false);
  };

  return (
    <S.RootStyle>
      <S.Title>투표를 해주세요!</S.Title>
      <S.CandidateContainer>
        {candidateList.map((name, index) => {
          return (
            <S.Candidate
              selected={index == selectedId}
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
      />
    </S.RootStyle>
  );
};

export default Vote;
