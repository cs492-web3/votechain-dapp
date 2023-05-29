import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as S from "./VoteCard.style";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import votedPNG from "../../../public/voted.png";

const VoteStatusSteps = ({ data }) => {
  return (
    <S.VoteStatusContainer>
      <S.VoteStatus disabled={data.status != "0"}>
        후보자 등록 진행중
      </S.VoteStatus>
      <ArrowForwardIosIcon sx={{ color: "grey" }} />
      <S.VoteStatus disabled={data.status != "1"}>Vote 시작</S.VoteStatus>
      <ArrowForwardIosIcon sx={{ color: "grey" }} />
      <S.VoteStatus disabled={data.status != "2"}>Vote 완료</S.VoteStatus>
    </S.VoteStatusContainer>
  );
};

const VoteCard = ({ data }) => {
  const router = useRouter();

  const voteStatus = ["registerCandStarted", "voteStarted", "voteEnded"];

  const onClickVote = () => {
    router.push({
      pathname: "/vote",
      query: { address: data.contractAddress, name: data.name },
    });
  };

  const onClickRegister = () => {
    router.push({
      pathname: "/add-candidates",
      query: { address: data.contractAddress, name: data.name },
    });
  };

  const onClickCheckResult = () => {
    router.push({
      pathname: "/vote-results",
      query: { address: data.contractAddress, name: data.name },
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.status == "0" && (
        <S.Contract onClick={onClickRegister}>
          <VoteStatusSteps data={data} />
          <S.Info>{`${data.name} 후보자 등록하기`} </S.Info>
        </S.Contract>
      )}
      {data.status == "1" &&
        (data.hasVoted ? (
          <S.VotedContract
            // disabled={true}
            onClick={onClickVote}
          >
            <VoteStatusSteps data={data} />
            <img
              alt="Voted"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                position: "absolute",
              }}
              src={votedPNG}
            />
            <S.Info>{`${data.name} 투표하기`} </S.Info>
          </S.VotedContract>
        ) : (
          <S.Contract onClick={onClickVote}>
            <VoteStatusSteps data={data} />
            <S.Info>{`${data.name} 투표하기`} </S.Info>
          </S.Contract>
        ))}
      {data.status == "2" && (
        <S.Contract onClick={onClickCheckResult}>
          <VoteStatusSteps data={data} />
          <S.Info>{`${data.name} 투표 결과 확인하기`} </S.Info>
        </S.Contract>
      )}
    </div>
  );
};

export default VoteCard;
