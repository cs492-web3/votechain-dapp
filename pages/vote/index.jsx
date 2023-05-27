import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import { useAccount } from "wagmi";
import {
  getCandidateName,
  getTotalCandidateNum,
  voteAndGetNFT,
  getTokenId,
  getNFTTokenCA,
} from "../../utils/interact";

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

  const handleModalClose = () => {
    if (Object.entries(setTransactionResult).length != 0) {
      setModalOpen(false);
    }
  };
  const onClickClose = () => {
    setModalOpen(false);
  };

  const [totalCandidateNum, setTotalCandidateNum] = useState(0);
  const [candidateList, setCandidateList] = useState([]);

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
      <S.Title>투표를 해주세요!</S.Title>
      <S.CandidateContainer>
        {candidateList.map((name, index) => {
          return (
            <S.Candidate
              selected={index == selectedId}
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
