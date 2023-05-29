import { atom } from "recoil";

const walletAddressState = atom({
  key: "walletAddress",
  default: "",
});

export { walletAddressState };
