useEffect(() => {
  async function getNFT() {
    const newTokenId = await getTokenId(contractABI, contractAddress);
    const newNFTTokenCA = await getNFTTokenCA(contractABI, contractAddress);
    setTokenId(newTokenId);
    setNFTTokenCA(newNFTTokenCA);
  }
  console.log(address);
  if (address != "") {
    getNFT();
    console.log(NFTTokenCA);
    console.log(tokenId);
  }
}, [address]);
