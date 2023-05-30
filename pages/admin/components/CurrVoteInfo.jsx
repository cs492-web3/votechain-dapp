import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import * as S from "./CurrVoteInfo.styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  getElectionStatus,
  getTotalCandidateNum,
  getCandidateName,
  getCandidateVoteCount,
  startVoteSession,
  endVoteSession,
  getTotalVoteCount,
  restartVoteSession,
  getDescription,
} from "../../api/voteAPI";
import TransactionDialog from "../../../components/TransactionDialog";
import { useRouter } from "next/router";

const CurrVoteInfo = ({ contractAddress, name, ABI }) => {
  const router = useRouter();
  const [currVoteStatus, setCurrVoteStatus] = useState(null);
  const [candidateList, setCandidateList] = useState([]);
  const [totalCandidateNum, setTotalCandidateNum] = useState();
  const [totalVoteNum, setTotalVoteNum] = useState();
  const [voteDescription, setVoteDescription] = useState("");

  const [transactionResult, setTransactionResult] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

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
    async function getCurrVoteStatus() {
      const status = await getElectionStatus(ABI, contractAddress);
      if (!isNaN(status)) {
        setCurrVoteStatus(Number(status));
        // 0 : registerCandStarted,
        // 1 : voteStarted,
        // 2 : voteEnded
      }
    }
    async function getTotalCandidateNumber() {
      const count = await getTotalCandidateNum(ABI, contractAddress);
      if (!isNaN(count)) {
        setTotalCandidateNum(Number(count));
      }
    }

    async function getTotalVoteNumber() {
      const count = await getTotalVoteCount(ABI, contractAddress);
      if (!isNaN(count)) {
        setTotalVoteNum(Number(count));
      }
    }
    async function getVoteDescription() {
      const description = await getDescription(ABI, contractAddress);
      setVoteDescription(description);
    }

    getTotalCandidateNumber();
    getCurrVoteStatus();
    getTotalVoteNumber();
    getVoteDescription();
  }, []);

  useEffect(() => {
    async function getCandidateInfo(id) {
      const name = await getCandidateName(ABI, contractAddress, id);
      var voteCount = "-";
      if (currVoteStatus == 2) {
        voteCount = await getCandidateVoteCount(ABI, contractAddress, id);
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
      const result = await startVoteSession(ABI, contractAddress);
      setTransactionResult(result);
    } else if (currVoteStatus == 1) {
      const result = await endVoteSession(ABI, contractAddress);
      setTransactionResult(result);
    }
  };

  const onClickReopenVote = async () => {
    setModalOpen(true);
    const result = await restartVoteSession(ABI, contractAddress);
    setTransactionResult(result);
  };

  return (
    <S.RootStyle>
      <S.Title>
        <div style={{ color: "#b2ddef", marginRight: 10 }}>
          {voteDescription}
        </div>{" "}
        투표 정보
      </S.Title>
      <S.VoteStatusWrapper>
        <S.WhiteInfo>현재 투표 status</S.WhiteInfo>
        <S.VoteStatusContainer>
          <S.VoteStatus disabled={currVoteStatus != 0}>
            후보자 등록 진행중
          </S.VoteStatus>
          <ArrowForwardIosIcon sx={{ color: "grey" }} />
          <S.VoteStatus disabled={currVoteStatus != 1}>Vote 시작</S.VoteStatus>
          <ArrowForwardIosIcon sx={{ color: "grey" }} />
          <S.VoteStatus disabled={currVoteStatus != 2}>Vote 완료</S.VoteStatus>
        </S.VoteStatusContainer>
      </S.VoteStatusWrapper>
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

      {currVoteStatus != 2 && (
        <S.NextProgress onClick={onClickNextProgress}>
          다음 투표 과정으로 넘어가기
        </S.NextProgress>
      )}
      {currVoteStatus == 2 && (
        <S.NextProgress onClick={onClickReopenVote}>
          투표 다시 재개하기
        </S.NextProgress>
      )}
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
