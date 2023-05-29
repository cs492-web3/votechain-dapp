import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { contractAddressState } from "../atom";
import { getRecoil, setRecoil } from "recoil-nexus";

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;

const web3 = createAlchemyWeb3(alchemyKey);

// ------ 투표 status 바꿔주는 함수 -------

export const endRegisterCandSession = async (contractABI, address) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const endABI = ElectionContract.methods.endRegisterCandSession().encodeABI();
  const result = await makeTransaction(address, endABI);
  return result;
};

export const startVoteSession = async (contractABI, address) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const startABI = ElectionContract.methods.startVoteSession().encodeABI();
  const result = await makeTransaction(address, startABI);
  return result;
};

export const endVoteSession = async (contractABI, address) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const endABI = ElectionContract.methods.endVoteSession().encodeABI();
  const result = await makeTransaction(address, endABI);
  return result;
};

// ------ 투표 시스템을 위한 함수 ------

export const registerCandidate = async (
  contractABI,
  address,
  candidateName
) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const registerABI = ElectionContract.methods
    .registerCandidate(candidateName)
    .encodeABI();
  const result = await makeTransaction(address, registerABI);
  return result;
};

export const vote = async (contractABI, address, candidateId) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const voteABI = ElectionContract.methods.vote(candidateId).encodeABI();
  const result = await makeTransaction(address, voteABI);
  return result;
};

export const voteAndGetNFT = async (contractABI, address, candidateId) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const voteABI = ElectionContract.methods
    .voteAndGetNFT(candidateId)
    .encodeABI();
  const result = await makeTransaction(address, voteABI);
  return result;
};

export const getTotalCandidateNum = async (contractABI) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const totalNum = await ElectionContract.methods.getTotalCandidateNum().call();
  return totalNum;
};

export const getCandidateName = async (contractABI, address, candidateId) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const candidateName = await ElectionContract.methods
    .getCandidateName(candidateId)
    .call({ from: address });
  return candidateName;
};

export const getCandidateVoteCount = async (
  contractABI,
  address,
  candidateId
) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const totalCount = await ElectionContract.methods
    .getCandidateVoteCount(candidateId)
    .call({ from: address });
  return totalCount;
};

export const getTotalVoteCount = async (contractABI, address) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const totalVoteCount = await ElectionContract.methods
    .getTotalVoteCount()
    .call({ from: address });
  return totalVoteCount;
};

export const getIsAdmin = async (contractABI, address) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const isAdmin = await ElectionContract.methods.getIsAdmin(address).call();
  return isAdmin;
};

export const getTokenId = async (contractABI, address) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const tokenId = await ElectionContract.methods.getTokenId(address).call();
  console.log(tokenId);
  return tokenId;
};

export const getNFTTokenCA = async (contractABI) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const NFTTokenCA = await ElectionContract.methods.getNFTTokenCA().call();
  console.log(NFTTokenCA);
  return NFTTokenCA;
};

export const getElectionStatus = async (contractABI) => {
  const contractAddress = getRecoil(contractAddressState);
  const ElectionContract = new web3.eth.Contract(contractABI, contractAddress);
  const status = await ElectionContract.methods.getElectionStatus().call();
  return status;
};

async function makeTransaction(address, methodABI) {
  const contractAddress = getRecoil(contractAddressState);
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
