import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import contractABI from "./admin-abi.json";

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;

const web3 = createAlchemyWeb3(alchemyKey);

// 전체 vote 관리자의 contract address
const contractAddress = "0x12D1FC33d8aa9b1E4bb1F2e8e2E97EC7efb28F94";

export const adminContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

export const getIsAdmin = async (walletAddress) => {
  const isAdmin = await adminContract.methods.getIsAdmin(walletAddress).call();
  return isAdmin;
};

export const addContract = async (
  walletAddress,
  contractName,
  contractAddress
) => {
  const addABI = adminContract.methods
    .addContract(contractName, contractAddress)
    .encodeABI();
  const result = await makeTransaction(walletAddress, addABI);
  return result;
};

export const getAllContracts = async () => {
  const allContracts = await adminContract.methods.getAllContracts().call();
  return allContracts;
};

export const deleteContract = async (walletAddress, contractId) => {
  const deleteABI = adminContract.methods
    .deleteContract(contractId)
    .encodeABI();
  const result = await makeTransaction(walletAddress, deleteABI);
  return result;
};

export const reopenContract = async (walletAddress, contractId) => {
  const deleteABI = adminContract.methods
    .reopenContract(contractId)
    .encodeABI();
  const result = await makeTransaction(walletAddress, deleteABI);
  return result;
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
