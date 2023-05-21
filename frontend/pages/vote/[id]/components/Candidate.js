import React, { useState } from "react";
import { Card, CardContent, Typography, CardActionArea, } from "@mui/material";

const Candidate = ({id, selectedId, handleClick }) => {
  const [voteList, setVoteList] = useState([]);

  return (
    <div>
      <Card sx={{...{ margin:5, borderRadius: 10}, ...id == selectedId ? {border: "5px solid green"} :{border: "5px solid white"} }}>
        <CardActionArea onClick={handleClick(id)}>
          <CardContent sx={{ minWidth: 275, minHeight: 275}}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              KAIST 전산학부 과대표 투표
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Candidate;
