import { atom } from "recoil";

const walletAddressState = atom({
  key: "walletAddress",
  default: "",
});

const contractAddressState = atom({
  key: "contractAddress",
  default: "",
});

const contractABIState = atom({
  key: "contractABI",
  default: "",
});

export { walletAddressState, contractAddressState, contractABIState };
