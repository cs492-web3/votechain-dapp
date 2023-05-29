import React, { useState, useEffect } from "react";
import VoteCard from "./components/VoteCard";
import * as S from "./index.styles";
import { getAllContracts } from "../api/adminAPI";
import {
  fetchContractABI,
  getElectionStatus,
  getHasVoted,
} from "../api/voteAPI";

import banner from "../../assets/banner.png";
const AllVotes = () => {
  const [allContractList, setAllContractList] = useState([]);
  const [contractInfoList, setContractInfoList] = useState([]);

  useEffect(() => {
    async function allContracts() {
      var contractList = await getAllContracts();
      contractList = contractList.filter((contract) => !contract.isDeleted);
      setAllContractList(contractList);
    }
    allContracts();
  }, []);

  // 현재 투표의 진행상황 및 해당 vote에 참여했는지 확인

  useEffect(() => {
    async function allContractsInfo(contract) {
      const contractAddress = contract.contractAddress.trim();
      const ABI = await fetchContractABI(contractAddress);
      const hasVoted = await getHasVoted(ABI, contractAddress);
      const status = await getElectionStatus(ABI, contractAddress);
      const newData = {
        hasVoted: hasVoted,
        name: contract.name,
        contractAddress: contractAddress,
        status: status,
      };
      setContractInfoList((prev) => [...prev, newData]);
    }
    setContractInfoList([]);
    allContractList.map((contract) => {
      allContractsInfo(contract);
    });
  }, [allContractList]);

  return (
    <S.RootStyle>
      <S.Title> 현재 진행중인 투표</S.Title>
      <S.VoteContainer>
        {contractInfoList.map((data, index) => {
          return <VoteCard key={index} data={data} />;
        })}
      </S.VoteContainer>
      <img
        alt="Nupjuk NFT"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100px",
          backgroundColor: "white",
        }}
        src={banner}
      />
    </S.RootStyle>
  );
};

export default AllVotes;
