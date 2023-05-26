import React, { useState, useEffect } from "react";
import VoteCard from "./components/VoteCard";
import * as S from "./index.styles";
import {
  getCandidates,
  getTotalCandidatesNum,
  getVoteResultFor,
} from "../../utils/interact";

const AllVotes = () => {
  const [candidates, setCandidates] = useState([]);
  const [totalCandidates, setTotalCandidates] = useState([]);

  const [result, setResult] = useState([]);

  return (
    <S.RootStyle>
      <S.CardContainer>
        <VoteCard />
        <VoteCard />
      </S.CardContainer>
    </S.RootStyle>
  );
};

export default AllVotes;
