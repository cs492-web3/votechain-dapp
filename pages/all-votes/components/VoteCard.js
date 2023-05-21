import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea} from '@mui/material';
import { useRouter } from "next/router";
import voteComplete from '../assets/voteComplete.png'

const VoteCard = (data) => {
  const router = useRouter();

  const onClickVote = ()=>{
    // id
    const id = 1
    router.push("/vote/"+id)
  }

  // 투표 완료 한 경우 

  return (
    <div>
      <Card sx={{ minWidth: 275, minHeight:275, marginRight: 10 }}>
        <CardActionArea onClick={onClickVote}>
          <CardMedia component="img"  sx={{ height: '100', width:'100' }} image={require("../assets/voteComplete.png")}/>
          <CardContent sx={{ minWidth: 275, minHeight: 275}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            KAIST 전산학부 과대표 투표 참여하기
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};


export default VoteCard;
