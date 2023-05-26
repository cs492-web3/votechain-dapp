import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import contractABI from "./contract-abi.json";

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;

const web3 = createAlchemyWeb3(alchemyKey);

// 컨트랙트의 주인: 주희
// const contractAddress = "0x749d7E5a6Fb66C7983D6056b16df8CB770d3B785";

//컨트랙트의 주인: 세아 - 카이스트 마스코트 투표
const contractAddress = "0x83082AecC750949bB2686AfCAfe4E5A708a56Fe9";

export const ElectionContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// ------ 투표 status 바꿔주는 함수 -------

export const endRegisterCandSession = async (address) => {
  const endABI = ElectionContract.methods.endRegisterCandSession().encodeABI();
  const result = await makeTransaction(address, endABI);
  return result;
};

export const startVoteSession = async (address) => {
  const startABI = ElectionContract.methods.startVoteSession().encodeABI();
  const result = await makeTransaction(address, startABI);
  return result;
};

export const endVoteSession = async (address) => {
  const endABI = ElectionContract.methods.endVoteSession().encodeABI();
  const result = await makeTransaction(address, endABI);
  return result;
};

// ------ 투표 시스템을 위한 함수 ------

export const registerCandidate = async (address, candidateName) => {
  const registerABI = ElectionContract.methods
    .registerCandidate(candidateName)
    .encodeABI();
  const result = await makeTransaction(address, registerABI);
  return result;
};

export const vote = async (address, candidateId) => {
  const voteABI = ElectionContract.methods.vote(candidateId).encodeABI();
  const result = await makeTransaction(address, voteABI);
  return result;
};

export const getTotalCandidateNum = async () => {
  const totalNum = await ElectionContract.methods.getTotalCandidateNum().call();
  return totalNum;
};

export const getCandidateName = async (address, candidateId) => {
  const candidateName = await ElectionContract.methods
    .getCandidateName(candidateId)
    .call({ from: address });
  return candidateName;
};

export const getCandidateVoteCount = async (address, candidateId) => {
  const totalCount = await ElectionContract.methods
    .getCandidateVoteCount(candidateId)
    .call({ from: address });
  return totalCount;
};

export const getTotalVoteCount = async (address) => {
  const totalVoteCount = await ElectionContract.methods
    .getTotalVoteCount()
    .call({ from: address });
  return totalVoteCount;
};

export const getIsAdmin = async (address) => {
  const isAdmin = await ElectionContract.methods.getIsAdmin(address).call();
  return isAdmin;
};

export const getElectionStatus = async () => {
  const status = await ElectionContract.methods.getElectionStatus().call();
  return status;
};

async function makeTransaction(address, methodABI) {
  //input error handling
  if (address == "") {
    return {
      status: "fail",
      message: "💡 Connect your Metamask wallet to vote on the blockchain.",
    };
  }

  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: methodABI,
  };

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      status: "success",
      message: txHash,
    };
  } catch (error) {
    return {
      status: "fail",
      message: "😥 " + error.message,
    };
  }
}
