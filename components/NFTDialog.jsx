

const NFTDialog = ({ NFTCA, tokenId }) => {


  onClinckOpen(()=>{
    const href = "https://pixxiti.com/ethereum/goerli/nfts/"+NFTCA + "/" +tokenId
    window.open(href)
  })

  return (
  
    <div>
    You got NFT as Reward!

    Your NFT contract Address is 
    Your Token ID is 
    <Button onClinck = {onClinckOpen}>
      Check Your NFT!
    </Button>
    
    </div>)
};
export default NFTDialog;
