import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import * as S from "./CurrVoteInfo.styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  getElectionStatus,
  getTotalCandidateNum,
  getCandidateName,
  getCandidateVoteCount,
  endRegisterCandSession,
  startVoteSession,
  endVoteSession,
  getTotalVoteCount,
} from "../../../utils/interact";
import TransactionDialog from "../../../components/TransactionDialog";

const CurrVoteInfo = ({ address }) => {
  const [currVoteStatus, setCurrVoteStatus] = useState(null);
  const [candidateList, setCandidateList] = useState([]);
  const [totalCandidateNum, setTotalCandidateNum] = useState();
  const [totalVoteNum, setTotalVoteNum] = useState();

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

  useEffect(() => {
    async function getCurrVoteStatus() {
      const status = await getElectionStatus();
      if (!isNaN(status)) {
        setCurrVoteStatus(Number(status));
      }
    }
    async function getTotalCandidateNumber() {
      const count = await getTotalCandidateNum();
      if (!isNaN(count)) {
        setTotalCandidateNum(Number(count));
      }
    }

    async function getTotalVoteNumber() {
      const count = await getTotalVoteCount(address);
      if (!isNaN(count)) {
        setTotalVoteNum(Number(count));
      }
    }
    getTotalCandidateNumber();
    getCurrVoteStatus();
    getTotalVoteNumber();
  }, []);

  useEffect(() => {
    async function getCandidateInfo(id) {
      const name = await getCandidateName(address, id);
      var voteCount = "-";
      if (currVoteStatus == 3) {
        voteCount = await getCandidateVoteCount(address, id);
      }
      setCandidateList((prev) => [
        ...prev,
        { name: name, voteCount: voteCount },
      ]);
    }
    for (let id = 0; id < totalCandidateNum; id++) {
      setCandidateList([]);
      getCandidateInfo(id);
    }
  }, [totalCandidateNum]);

  const onClickNextProgress = async () => {
    setModalOpen(true);
    if (currVoteStatus == 0) {
      const result = await endRegisterCandSession(address);
      setTransactionResult(result);
    } else if (currVoteStatus == 1) {
      const result = await startVoteSession(address);
      setTransactionResult(result);
    } else if (currVoteStatus == 2) {
      const result = await endVoteSession(address);
      setTransactionResult(result);
    }
  };

  /// 등록된 Cadidate 불러오기

  return (
    <S.RootStyle>
      <S.Title> 현재 투표 정보</S.Title>
      <S.WhiteInfo>현재 투표 status</S.WhiteInfo>
      <S.VoteStatusContainer>
        <S.VoteStatus disabled={currVoteStatus != 0}>
          후보자 등록 진행중
        </S.VoteStatus>
        <ArrowForwardIosIcon sx={{ color: "grey" }} />
        <S.VoteStatus disabled={currVoteStatus != 1}>
          후보자 등록 완료
        </S.VoteStatus>
        <ArrowForwardIosIcon sx={{ color: "grey" }} />
        <S.VoteStatus disabled={currVoteStatus != 2}>Vote 시작</S.VoteStatus>
        <ArrowForwardIosIcon sx={{ color: "grey" }} />
        <S.VoteStatus disabled={currVoteStatus != 3}>Vote 완료</S.VoteStatus>
      </S.VoteStatusContainer>
      <S.WhiteInfo>현재 등록된 후보자 수: {totalCandidateNum}</S.WhiteInfo>
      <S.WhiteInfo>현재까지 총 투표 수: {totalVoteNum}</S.WhiteInfo>
      <S.WhiteInfo>현재 등록된 후보자 정보</S.WhiteInfo>
      {candidateList.map((info, index) => {
        return (
          <S.CandidateInfo key={index}>
            <S.BlackInfo>후보자 이름 : {info.name}</S.BlackInfo>
            <S.BlackInfo>현재 득표수 : {info.voteCount}</S.BlackInfo>
          </S.CandidateInfo>
        );
      })}

      <S.NextProgress
        disabled={currVoteStatus == 3}
        onClick={onClickNextProgress}
      >
        다음 투표 과정으로 넘어가기
      </S.NextProgress>
      <TransactionDialog
        open={modalOpen}
        result={transactionResult}
        handleClose={handleModalClose}
        onClickClose={onClickClose}
      />
    </S.RootStyle>
  );
};

export default CurrVoteInfo;
