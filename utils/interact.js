import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import contractABI from "./contract-abi.json";

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
// const alchemyKey =
//   "wss://eth-goerli.g.alchemy.com/v2/refaFG0a94Wv8ud9tUiSHlqS6I1lUknQ";

const web3 = createAlchemyWeb3(alchemyKey);

const contractAddress = "0xA0869fa4bCf38a80cf33c65212874Cf0132ff32d";

export const ElectionContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

console.log(ElectionContract);

export const getCandidates = async () => {
  const candidates = await ElectionContract.methods.candidates;
  return candidates;
};

export const getTotalCandidatesNum = async () => {
  const totalNum = await ElectionContract.methods.totalCandidateNum.call();
  return totalNum;
};

export const getVoteResultFor = async (candidateId) => {
  const result = await ElectionContract.methods
    .voteResultFor(candidateId)
    .call();
  return result;
};

export const sendVoteTo = async (address, candidateId) => {
  //input error handling
  if (address == "") {
    return {
      status: "fail",
      message: "💡 Connect your Metamask wallet to vote on the blockchain.",
    };
  }

  if (candidateId == null) {
    return {
      status: "fail",
      message: "❌ choose candidate",
    };
  }

  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: ElectionContract.methods.vote(candidateId).encodeABI(),
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

  return result;
};
