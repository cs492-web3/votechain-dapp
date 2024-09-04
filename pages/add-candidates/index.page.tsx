import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import { Paper, TextField } from "@mui/material";
import {
  registerCandidate,
  getElectionStatus,
  getRecentTokenId,
  getAllCandidateNames,
  getNFTTokenCA,
  registerAndGetNFT,
  getRegisterNum,
} from "../api/voteAPI";
import { useRecoilValue } from "recoil";
import { walletAddressState } from "../atom";
import TransactionDialog from "../../components/TransactionDialog";
import { useRouter } from "next/router";

const AddCandidates = () => {
  const router = useRouter();
  const [totalCandidateNum, setTotalCandidateNum] = useState(0);
  const [candidateList, setCandidateList] = useState([]);

  const [tokenId, setTokenId] = useState("");
  const [NFTCA, setNFTCA] = useState("");

  const [transactionResult, setTransactionResult] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [candidateName, setCandidateName] = useState("");

  const walletAddress = useRecoilValue(walletAddressState);
  const [contractAddress, setContractAddress] = useState<string>("");
  const [contractABI, setContractABI] = useState("");

  const [registerNum, setRegisterNum] = useState(0);

  // contract address를 바탕으로 ABI 가져오기
  useEffect(() => {
    const address = router.query["address"]?.toString() ?? "";
    const baseurl = "https://api-goerli.etherscan.io/api";
    const params = {
      module: "contract",
      action: "getabi",
      address: address,
      apikey: process.env.ETHERSCAN_API_KEY ?? "",
    };

    const queryString = new URLSearchParams(params).toString(); // url에 쓰기 적합한 querySting으로 return 해준다.
    const requrl = `${baseurl}?${queryString}`;
    setContractAddress(address);

    const fetchContractABI = async () => {
      const response = await fetch(requrl);
      const json = await response.json();
      if (json.status == "1") {
        const ABI = JSON.parse(json.result);
        setContractABI(ABI);
        const status = await getElectionStatus(ABI, router.query["address"]);
        if (status == 1) {
          router.push({
            pathname: "/vote",
            query: {
              address: router.query["address"],
              name: router.query["name"],
            },
          });
        } else if (status == 2) {
          router.push({
            pathname: "/vote-results",
            query: {
              address: router.query["address"],
              name: router.query["name"],
            },
          });
        }
      } else {
        alert(json.result);
        router.back();
      }
    };

    if (address != undefined) {
      fetchContractABI();
    }
  }, [router.query]);

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

  const addCandidateHandler = async () => {
    if (candidateName in candidateList) {
      alert("It's Already Registered Name");
    } else if (registerNum >= 3) {
      alert("You Can Add Maximum 3 Candidates");
    } else {
      setModalOpen(true);
      const result = await registerAndGetNFT(
        contractABI,
        contractAddress,
        candidateName,
      );
      setTransactionResult(result);
    }
  };

  const handleModalClose = () => {
    if (Object.entries(setTransactionResult).length != 0) {
      setModalOpen(false);
      router.reload();
    }
  };

  const onClickClose = () => {
    setModalOpen(false);
    router.reload();
  };

  useEffect(() => {
    async function getAllCandidates() {
      const candidates = await getAllCandidateNames(
        contractABI,
        contractAddress,
      );
      setCandidateList(candidates);
    }

    async function getRegistedNum() {
      const registeredNum = await getRegisterNum(contractABI, contractAddress);
      setRegisterNum(registeredNum);
    }

    if (contractABI != "" && contractAddress != "") {
      getAllCandidates();
      getRegistedNum();
    }
  }, [contractABI, contractAddress]);

  return (
    <S.RootStyle>
      <S.VoteName>{router.query["name"]} </S.VoteName>
      <S.Title>
        It{"'"}s Candidate Registering Period. Try Adding New Candidates and Get
        NFT! 🎆
      </S.Title>
      <S.CandidateWrapper>
        <S.Info> Currently Registed Candidate</S.Info>
        <S.CandidateContainer>
          {candidateList.length == 0 && <S.None> NONE</S.None>}
          {candidateList.map((name, index) => {
            return <S.Candidate key={index}>{name}</S.Candidate>;
          })}
        </S.CandidateContainer>
      </S.CandidateWrapper>
      <S.InputContainer>
        <S.Info> Register Candidates </S.Info>
        <S.InputTextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={candidateName}
          onChange={(event: any) => {
            setCandidateName(event.target.value);
          }}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{
            style: { color: "grey" },
          }}
        />

        <S.RegisterButton onClick={addCandidateHandler}>
          Register
        </S.RegisterButton>
      </S.InputContainer>

      <TransactionDialog
        open={modalOpen}
        handleClose={handleModalClose}
        onClickClose={onClickClose}
        result={transactionResult}
        NFTCA={NFTCA}
        tokenId={tokenId}
      />
    </S.RootStyle>
  );
};

export default AddCandidates;
