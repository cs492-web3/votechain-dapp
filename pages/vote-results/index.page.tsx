//@ts-nocheck
import { useEffect, useState } from "react";
import * as S from "./index.styles";
import ResultChart from "./components/ResultChart";
import { useRouter } from "next/router";
import {
  fetchContractABI,
  getTotalCandidateNum,
  getCandidateName,
  getCandidateVoteCount,
  getDescription,
} from "../api/voteAPI";

const VoteResults = () => {
  const router = useRouter();
  const [candidateList, setCandidateList] = useState([]);
  const [totalCandidateNum, setTotalCandidateNum] = useState<number>(0);

  const [contractAddress, setContractAddress] = useState<string>("");
  const [contractABI, setContractABI] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function getTotalCandidateNumber() {
      const count = await getTotalCandidateNum(contractABI, contractAddress);
      if (!isNaN(count)) {
        setTotalCandidateNum(Number(count));
      }
    }

    async function getVoteDescription() {
      const text = await getDescription(contractABI, contractAddress);
      setDescription(text);
    }
    if (contractABI != "" && contractAddress != "") {
      getTotalCandidateNumber();
      getVoteDescription();
    }
  }, [contractABI, contractAddress]);

  useEffect(() => {
    async function getABI() {
      const address = router.query["address"]?.toString();
      if (address != undefined) {
        setContractAddress(address);
        const ABI = await fetchContractABI(address);
        setContractABI(ABI);
      }
    }
    getABI();
  }, [router.query]);

  useEffect(() => {
    async function getCandidateInfo(id) {
      const name = await getCandidateName(contractABI, contractAddress, id);
      var voteCount = 0;
      voteCount = await getCandidateVoteCount(contractABI, contractAddress, id);
      setCandidateList((prev) => [
        ...prev,
        { name: name, voteCount: voteCount },
      ]);
    }
    if (contractABI != "" && contractAddress != "") {
      for (let id = 0; id < totalCandidateNum; id++) {
        setCandidateList([]);
        getCandidateInfo(id);
      }
    }
  }, [totalCandidateNum]);

  return (
    <S.RootStyle>
      <S.VoteTitle> {description} </S.VoteTitle>
      <S.Title> Check Vote Results! </S.Title>
      <ResultChart
        voteData={candidateList.map((cand) => cand.voteCount)}
        voteLabels={candidateList.map((cand) => cand.name)}
      />
    </S.RootStyle>
  );
};

export default VoteResults;
