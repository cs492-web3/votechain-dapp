import React, { useState } from "react";
import VoteCard from "./components/VoteCard";
import * as S from "./index.styles";

const AllVotes = ()=> {
  const [voteList, setVoteList] = useState([]);

  return (
    <S.RootStyle>
      <S.CardContainer>
        <VoteCard />
        <VoteCard />
      </S.CardContainer>
    </S.RootStyle>
  );
}

export default AllVotes;
