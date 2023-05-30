import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { walletAddressState } from "../atom";
import { getRecoil, setRecoil } from "recoil-nexus";

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;

const web3 = createAlchemyWeb3(alchemyKey);

export async function fetchContractABI(contractAddress) {
  const baseurl = "https://api-goerli.etherscan.io/api";
  const params = {
    module: "contract",
    action: "getabi",
    address: contractAddress,
    apikey: process.env.ETHERSCAN_API_KEY,
  };

  const queryString = new URLSearchParams(params).toString(); // url에 쓰기 적합한 querySting으로 return 해준다.
  const requrl = `${baseurl}?${queryString}`;
  const response = await fetch(requrl);
  const json = await response.json();
  if (json.status == "1") {
    const ABI = JSON.parse(json.result);
    return ABI;
  }
}

// ------ 투표 status 바꿔주는 함수 -------

export const startVoteSession = async (contractABI, contractAddress) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const startABI = ElectionContract.methods.startVoteSession().encodeABI();
  const result = await makeTransaction(
    walletAddress,
    startABI,
    contractAddress
  );
  return result;
};

export const endVoteSession = async (contractABI, contractAddress) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const endABI = ElectionContract.methods.endVoteSession().encodeABI();
  const result = await makeTransaction(walletAddress, endABI, contractAddress);
  return result;
};

export const restartVoteSession = async (contractABI, contractAddress) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const restartABI = ElectionContract.methods.restartVoteSession().encodeABI();
  const result = await makeTransaction(
    walletAddress,
    restartABI,
    contractAddress
  );
  return result;
};

// ------ 투표 시스템을 위한 함수 ------

export const registerCandidate = async (
  contractABI,
  contractAddress,
  candidateName
) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const registerABI = ElectionContract.methods
    .registerCandidate(candidateName)
    .encodeABI();
  const result = await makeTransaction(
    walletAddress,
    registerABI,
    contractAddress
  );
  return result;
};

export const vote = async (contractABI, contractAddress, candidateId) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const voteABI = ElectionContract.methods.vote(candidateId).encodeABI();
  const result = await makeTransaction(walletAddress, voteABI, contractAddress);
  return result;
};

export const voteAndGetNFT = async (
  contractABI,
  contractAddress,
  candidateId
) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const voteABI = ElectionContract.methods
    .voteAndGetNFT(candidateId)
    .encodeABI();
  const result = await makeTransaction(walletAddress, voteABI, contractAddress);
  return result;
};

export const registerAndGetNFT = async (
  contractABI,
  contractAddress,
  candidateName
) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const registerABI = ElectionContract.methods
    .registerCandidateAndGetNFT(candidateName)
    .encodeABI();
  const result = await makeTransaction(
    walletAddress,
    registerABI,
    contractAddress
  );
  return result;
};

export const getTotalCandidateNum = async (contractABI, contractAddress) => {
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const totalNum = await ElectionContract.methods.getTotalCandidateNum().call();
  return totalNum;
};

export const getCandidateName = async (
  contractABI,
  contractAddress,
  candidateId
) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const candidateName = await ElectionContract.methods
    .getCandidateName(candidateId)
    .call({ from: walletAddress });
  return candidateName;
};

export const getAllCandidateNames = async (contractABI, contractAddress) => {
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const candidateName = await ElectionContract.methods
    .getAllCandidateNames()
    .call();
  return candidateName;
};

export const getCandidateVoteCount = async (
  contractABI,
  contractAddress,
  candidateId
) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const totalCount = await ElectionContract.methods
    .getCandidateVoteCount(candidateId)
    .call({ from: walletAddress });
  return totalCount;
};

export const getTotalVoteCount = async (contractABI, contractAddress) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const totalVoteCount = await ElectionContract.methods
    .getTotalVoteCount()
    .call({ from: walletAddress });
  return totalVoteCount;
};

export const getIsAdmin = async (contractABI, contractAddress) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const isAdmin = await ElectionContract.methods
    .getIsAdmin(walletAddress)
    .call();
  return isAdmin;
};

export const getRecentTokenId = async (contractABI, contractAddress) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const tokenId = await ElectionContract.methods
    .getRecentTokenId(walletAddress)
    .call();
  console.log(tokenId);
  return tokenId;
};

export const getNFTTokenCA = async (contractABI, contractAddress) => {
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const NFTTokenCA = await ElectionContract.methods.getNFTTokenCA().call();
  console.log(NFTTokenCA);
  return NFTTokenCA;
};

export const getElectionStatus = async (contractABI, contractAddress) => {
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const status = await ElectionContract.methods.getElectionStatus().call();
  return status;
};

export const getHasVoted = async (contractABI, contractAddress) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const hasVoted = await ElectionContract.methods
    .getHasVoted(walletAddress)
    .call();
  return hasVoted;
};

export const getRegisterNum = async (contractABI, contractAddress) => {
  const walletAddress = getRecoil(walletAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const registerNum = await ElectionContract.methods
    .getRegisterNum(walletAddress)
    .call();
  return registerNum;
};

async function makeTransaction(walletAddress, methodABI, contractAddress) {
  //input error handling
  if (walletAddress == "") {
    return {
      status: "fail",
      message: "💡 Connect your Metamask wallet to vote on the blockchain.",
    };
  }

  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: walletAddress, // must match user's active address.
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
