import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as S from "./VoteCard.style";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import votedPNG from "../../../public/voted.png";
import CheckResultPNG from "../../../public/CheckResult.png";
import Image from "next/image";
const VoteStatusSteps = ({ data }) => {
  return (
    <S.VoteStatusContainer>
      <S.VoteStatus disabled={data.status != "0"}>
        Resistering Candidates
      </S.VoteStatus>
      <ArrowForwardIosIcon sx={{ color: "grey" }} />
      <S.VoteStatus disabled={data.status != "1"}>Vote Ongoing</S.VoteStatus>
      <ArrowForwardIosIcon sx={{ color: "grey" }} />
      <S.VoteStatus disabled={data.status != "2"}>Vote Ended</S.VoteStatus>
    </S.VoteStatusContainer>
  );
};

const VoteCard = ({ data }) => {
  const router = useRouter();
  useState(() => {
    if (data.contractAddress == "0xeF1AA4215eFA8bA8161e6929a2022cef06484A2a") {
      data.description = "Who Do You Want to see in KAIST Festival?";
    }
  }, []);

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
          <S.Info>{`${data.name}`} </S.Info>
          <S.Description>{`${data.description}`} </S.Description>
        </S.Contract>
      )}
      {data.status == "1" &&
        (data.hasVoted ? (
          !data.isShowResultImm && (
            <S.VotedContract disabled={true} onClick={onClickVote}>
              <VoteStatusSteps data={data} />
              <Image
                alt="Voted"
                layout="fill"
                objectFit="contain"
                src={votedPNG}
              />
              <S.Info>{`${data.name}`} </S.Info>
              <S.Description>{`${data.description}`} </S.Description>
            </S.VotedContract>
          )
        ) : (
          <S.Contract onClick={onClickVote}>
            <VoteStatusSteps data={data} />
            <S.Info>{`${data.name}`} </S.Info>
            <S.Description>{`${data.description}`} </S.Description>
          </S.Contract>
        ))}
      {(data.status == "2" || (data.hasVoted && data.isShowResultImm)) && (
        <S.Contract onClick={onClickCheckResult}>
          <VoteStatusSteps data={data} />
          <Image
            alt="Voted"
            layout="fill"
            objectFit="contain"
            src={CheckResultPNG}
          />
          <S.Info>{`${data.name}`} </S.Info>
          <S.Description>{`${data.description}`} </S.Description>
        </S.Contract>
      )}
    </div>
  );
};

export default VoteCard;
