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

  useEffect(() => {
    async function fetchCandidates() {
      // const candidates = await getCandidates();
      // const totalNum = await getTotalCandidatesNum();
      // console.log(candidates);
      // console.log(totalNum);
      // setCandidates(candidates);
      // setTotalCandidates(totalNum);

      const result = await getVoteResultFor(4);
      setResult(result);
    }
    fetchCandidates();
  }, []);

  console.log(result);
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
