import React, { useState, useEffect } from "react";
import VoteCard from "./components/VoteCard";
import * as S from "./index.styles";
import { getAllContracts } from "../api/adminAPI";

const AllVotes = () => {
  const [contractList, setContractList] = useState([]);

  useEffect(() => {
    async function allContracts() {
      const contractList = await getAllContracts();
      setContractList(contractList);
      return contractList;
    }
    allContracts();
  }, []);

  // 해당 vote에 참여했는지 확인
  

  console.log(contractList);

  return (
    <S.RootStyle>
      <S.Title> 현재 진행중인 투표</S.Title>
      <S.VoteContainer>
        {contractList.map((data, index) => {
          if (!data.isDeleted) {
            return <VoteCard data={data} />;
          }
        })}
      </S.VoteContainer>
    </S.RootStyle>
  );
};

export default AllVotes;
