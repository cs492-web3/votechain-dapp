import { Button } from "@mui/material";

const NFTDialog = ({ NFTCA, tokenId }) => {

    const url =
      "https://pixxiti.com/ethereum/goerli/nfts/" + NFTCA + "/" + tokenId;


  return (
    <div>
      <div>You got NFT as Reward!</div>
      <div>{`Your NFT contract Address is ${NFTCA} `}</div>
      <div>{`Your Token ID is ${tokenId}`}</div>
      <Button onClick={() => window.open(url , "_blank")}>
        Check Your NFT
      </Button>
    </div>
  );
};
export default NFTDialog;
