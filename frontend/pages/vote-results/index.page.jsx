import { useEffect, useState } from "react";
import * as S from "./index.styles";
import ResultChart from "./components/ResultChart";
import { useRouter } from "next/router";
import { getTotalCandidateNum, getCandidateName, getCandidateVoteCount } from "../api/voteAPI";

const VoteResults = () => {
  const router = useRouter();
  const [candidateList, setCandidateList] = useState([]);
  const [totalCandidateNum, setTotalCandidateNum] = useState();

  const [contractAddress, setContractAddress] = useState("");
  const [contractABI, setContractABI] = useState("");

  useEffect(() => {
    async function getTotalCandidateNumber() {
      const count = await getTotalCandidateNum(contractABI, contractAddress);
      if (!isNaN(count)) {
        setTotalCandidateNum(Number(count));
      }
    }
    if (contractABI != "" && contractAddress != "") {
      getTotalCandidateNumber();
    }
  }, []);

  // contract address를 바탕으로 ABI 가져오기
  useEffect(() => {
    const address = router.query["address"];
    const baseurl = "https://api-goerli.etherscan.io/api";
    const params = {
      module: "contract",
      action: "getabi",
      address: address,
      apikey: process.env.ETHERSCAN_API_KEY,
    };

    const queryString = new URLSearchParams(params).toString(); // url에 쓰기 적합한 querySting으로 return 해준다.
    const requrl = `${baseurl}?${queryString}`;
    setContractAddress(address);

    const fetchContractABI = async () => {
      const response = await fetch(requrl);
      const json = await response.json();
      if (json.status == "1") {
        const abi = JSON.parse(json.result);
        setContractABI(abi);
      } else {
        alert(json.result);
        router.back();
      }
    };

    if (address != undefined) {
      fetchContractABI();
    }
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

  console.log(candidateList);

  return (
    <S.RootStyle>
      <S.Title> 투표 결과입니다 </S.Title>
      <ResultChart
        voteData={candidateList.map((cand) => cand.voteCount)}
        voteLabels={candidateList.map((cand) => cand.name)}
      />
    </S.RootStyle>
  );
};

export default VoteResults;
