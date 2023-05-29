import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import voted from "../../../assets/voted.png";
import * as S from "./VoteCard.style";
const VoteCard = ({ data }) => {
  const router = useRouter();

  const voteStatus = [
    "registerCandStarted",
    "registerCandEnded",
    "voteStarted",
    "voteEnded",
  ];

  const onClickVote = () => {
    router.push({
      pathname: "/votechain-dapp/vote",
      query: { address: data.contractAddress, name: data.name },
    });
  };

  const onClickRegister = () => {
    router.push({
      pathname: "/votechain-dapp/add-candidates",
      query: { address: data.contractAddress, name: data.name },
    });
  };

  const onClickCheckResult = () => {
    router.push({
      pathname: "/votechain-dapp/vote-results",
      query: { address: data.contractAddress, name: data.name },
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.status == "0" && (
        <S.Contract onClick={onClickRegister}>
          <S.Info>{`${data.name} 후보자 등록하기`} </S.Info>
        </S.Contract>
      )}
      {data.status == "1" &&
        (data.hasVoted ? (
          <S.VotedContract
            disabled={true}
            // onClick={onClickVote}
          >
            <img
              alt="Voted"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                position: "absolute",
              }}
              src={voted}
            />
            <S.Info>{`${data.name} 투표하기`} </S.Info>
          </S.VotedContract>
        ) : (
          <S.Contract onClick={onClickVote}>
            <S.Info>{`${data.name} 투표하기`} </S.Info>
          </S.Contract>
        ))}
      {data.status == "2" && (
        <S.Contract onClick={onClickCheckResult}>
          <S.Info>{`${data.name} 투표 결과 확인하기`} </S.Info>
        </S.Contract>
      )}
    </div>
  );
};

export default VoteCard;
