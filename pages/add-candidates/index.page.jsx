import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import { Paper, TextField } from "@mui/material";
import {
  registerCandidate,
  getTotalCandidateNum,
  getCandidateName,
  getElectionStatus,
} from "../api/voteAPI";
import { useRecoilValue } from "recoil";
import { walletAddressState } from "../atom";
import TransactionDialog from "../../components/TransactionDialog";
import { useRouter } from "next/router";

const AddCandidates = () => {
  const router = useRouter();
  const [totalCandidateNum, setTotalCandidateNum] = useState(0);
  const [candidateList, setCandidateList] = useState([]);

  const [selectedId, setSelectedId] = useState(null);

  const [transactionResult, setTransactionResult] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [candidateName, setCandidateName] = useState("");

  const walletAddress = useRecoilValue(walletAddressState);
  const [contractAddress, setContractAddress] = useState("");
  const [contractABI, setContractABI] = useState("");

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

  const addCandidateHandler = async () => {
    setModalOpen(true);
    const result = await registerCandidate(
      contractABI,
      contractAddress,
      candidateName
    );
    console.log(result);
    setTransactionResult(result);
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
    async function getTotalCandidateNumber() {
      const count = await getTotalCandidateNum(contractABI, contractAddress);
      if (!isNaN(count)) {
        setTotalCandidateNum(Number(count));
      }
    }
    if (contractABI != "" && contractAddress != "") {
      getTotalCandidateNumber();
    }
  }, [contractABI, contractAddress]);

  useEffect(() => {
    async function getCandidateInfo(id) {
      const name = await getCandidateName(contractABI, contractAddress, id);
      setCandidateList((prev) => [...prev, name]);
    }

    if (contractABI != "" && contractAddress != "") {
      for (let id = 0; id < totalCandidateNum; id++) {
        setCandidateList([]);
        getCandidateInfo(id);
      }
    }
  }, [totalCandidateNum]);

  return (
    <S.RootStyle>
      <S.VoteName>
        현재 후보자 등록 중인 투표: {router.query["name"]}{" "}
      </S.VoteName>
      <S.Title>지금은 후보자 등록 기간입니다! 후보자를 등록해보세요</S.Title>
      <S.CandidateWrapper>
        <S.Info> 현재 등록된 후보자</S.Info>
        <S.CandidateContainer>
          {candidateList.length == 0 && (
            <S.Info>
              {" "}
              현재 등록된 후보자가 없습니다. 첫번째로 등록해보세요!
            </S.Info>
          )}
          {candidateList.map((name, index) => {
            return <S.Candidate key={index}>{name}</S.Candidate>;
          })}
        </S.CandidateContainer>
      </S.CandidateWrapper>
      <S.InputContainer>
        <S.Info> 후보자 등록하기 </S.Info>
        <S.InputTextField
          id="outlined-basic"
          label="후보자 이름"
          variant="outlined"
          value={candidateName}
          onChange={(event) => {
            setCandidateName(event.target.value);
          }}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{
            style: { color: "grey" },
          }}
        />

        <S.RegisterButton onClick={addCandidateHandler}>
          등록하기
        </S.RegisterButton>
      </S.InputContainer>

      <TransactionDialog
        open={modalOpen}
        handleClose={handleModalClose}
        onClickClose={onClickClose}
        result={transactionResult}
      />
    </S.RootStyle>
  );
};

export default AddCandidates;
