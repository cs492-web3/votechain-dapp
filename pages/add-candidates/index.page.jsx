import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import { Paper, TextField } from "@mui/material";
import {
  registerCandidate,
  getTotalCandidateNum,
  voteAndGetNFT,
  getTokenId,
  getNFTTokenCA,
} from "../../utils/interact";
import { useRecoilValue } from "recoil";
import { walletAddressState } from "../atom";
import TransactionDialog from "../../components/TransactionDialog";

const Vote = () => {
  const [address, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [NFTTokenCA, setNFTTokenCA] = useState("");
  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      if (!isReconnected) router.reload();
      else setAddress(address);
    },
  });

  const [transactionResult, setTransactionResult] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [candidateName, setCandidateName] = useState("");

  const address = useRecoilValue(walletAddressState);

  const addCandidateHandler = async () => {
    setModalOpen(true);
    const result = await registerCandidate(address, candidateName);
    console.log(result);
    setTransactionResult(result);
  };

  const handleModalClose = () => {
    if (Object.entries(setTransactionResult).length != 0) {
      setModalOpen(false);
    }
  };

  const onClickClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    async function getNFT() {
      const newTokenId = await getTokenId(address);
      const newNFTTokenCA = await getNFTTokenCA();
      setTokenId(newTokenId);
      setNFTTokenCA(newNFTTokenCA);
    }
    console.log(address);
    if (address != "") {
      getNFT();
      console.log(NFTTokenCA);
      console.log(tokenId);
    }
  }, [address]);

  useEffect(() => {
    async function getTotalCandidateNumber() {
      const count = await getTotalCandidateNum();
      if (!isNaN(count)) {
        setTotalCandidateNum(Number(count));
      }
    }
    getTotalCandidateNumber();
  }, []);

  useEffect(() => {
    async function getCandidateInfo(id) {
      const name = await getCandidateName(address, id);
      setCandidateList((prev) => [...prev, name]);
    }
    for (let id = 0; id < totalCandidateNum; id++) {
      setCandidateList([]);
      getCandidateInfo(id);
    }
  }, [totalCandidateNum]);

  const [selectedId, setSelectedId] = useState(null);
  const handleClick = (e) => {
    setSelectedId(Number(e.target.id));
  };

  const voteHandler = async () => {
    if (selectedId == null) {
      alert("후보자를 선택해주세요");
    } else {
      setModalOpen(true);
      const result = await voteAndGetNFT(address, selectedId);
      setTransactionResult(result);
    }
  };

  return (
    <S.RootStyle>
      <S.Title>
        {" "}
        지금은 후보자 등록 기간입니다! 나의 최애를 등록해보세요{" "}
      </S.Title>
      <S.Info> 현재 등록된 후보자</S.Info>
      <S.CandidateContainer>
        {candidateList.map((name, index) => {
          return <S.Candidate>{name}</S.Candidate>;
        })}
      </S.CandidateContainer>
      <S.InputContainer>
        <S.Info> 나만의 최애 등록하기 </S.Info>
        <S.InputTextField
          id="outlined-basic"
          label="최애 이름"
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
