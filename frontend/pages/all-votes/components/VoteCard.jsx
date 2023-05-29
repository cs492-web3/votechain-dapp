import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Paper,
} from "@mui/material";
import { useRouter } from "next/router";
import voteComplete from "../assets/voteComplete.png";
import * as S from "./VoteCard.style";
const VoteCard = ({ data }) => {
  const router = useRouter();

  const onClickVote = () => {
    router.push({
      pathname: "/vote",
      query: { address: data.contactAddress },
    });
  };

  return (
    <S.Contract onClick={onClickVote}>
      <S.Info>{`${data.name} 투표하기`} </S.Info>
    </S.Contract>
  );
};

export default VoteCard;
