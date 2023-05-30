import { Button, colors } from "@mui/material";
import styled from "@emotion/styled";

const InfoText = styled("div")(() => ({
  marginTop: 5,
}));

const RewardText = styled("div")(() => ({
  marginTop: 15,
  marginBottom: 15,
  fontSize: '18px',
  color: '#0288d1'
}));

const CheckButton = styled(Button)(() => ({
  marginTop: 30,
  fontSize: '15px',
  color: '#0288d1',
  border: '1px solid #0288d1'
}));




const NFTDialog = ({ NFTCA, tokenId }) => {

    const url =
      "https://pixxiti.com/ethereum/goerli/nfts/" + NFTCA + "/" + tokenId;


  return (
    <div style={{ marginTop: '10px'}}>
      <RewardText>You got NFT as Reward! 🌇</RewardText>
      <InfoText>{`Your NFT contract Address is ${NFTCA} `}</InfoText>
      <InfoText>{`Your Token ID is ${tokenId}`}</InfoText>
      <CheckButton onClick={() => window.open(url , "_blank")}>
        Check Your NFT
      </CheckButton>
    </div>
  );
};
export default NFTDialog;
