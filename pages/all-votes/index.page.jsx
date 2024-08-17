import React, { useState, useEffect } from "react";
import VoteCard from "./components/VoteCard";
import * as S from "./index.styles";
import Image from "next/image";
import { getAllContracts } from "../api/adminAPI";
import {
  fetchContractABI,
  getElectionStatus,
  getHasVoted,
  getIsShowResultImm,
  getDescription,
} from "../api/voteAPI";
import bannerPNG from "../../public/banner.png";

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
      const description = await getDescription(ABI, contractAddress);
      const isShowResultImm = await getIsShowResultImm(ABI, contractAddress);
      const newData = {
        hasVoted: hasVoted,
        name: contract.name,
        contractAddress: contractAddress,
        status: status,
        isShowResultImm: Boolean(Number(isShowResultImm)),
        description: description,
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
      <S.Title>Currently Ongoing Votes 🗳️ </S.Title>
      <S.VoteContainer>
        {contractInfoList.map((data, index) => {
          return <VoteCard key={index} data={data} />;
        })}
      </S.VoteContainer>
      <S.ImageContainer>
        <Image
          alt="Nupjuk NFT"
          layout="fill"
          objectFit="contain"
          src={bannerPNG}
        />
      </S.ImageContainer>
    </S.RootStyle>
  );
};

export default AllVotes;
