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

const VoteCard = (data) => {
  const router = useRouter();

  const onClickVote = () => {
    // id
    const id = 1;
    router.push("/vote/" + id);
  };

  return (
    <div>
      <Paper
        sx={{
          minWidth: 275,
          minHeight: 275,
          margin: 5,
          borderRadius: 20,
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <CardActionArea onClick={onClickVote}>
          <CardContent
            sx={{
              width: "100%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              투표 참여하기
            </Typography>
          </CardContent>
        </CardActionArea>
      </Paper>
    </div>
  );
};

export default VoteCard;
