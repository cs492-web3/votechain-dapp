import React, { useState, useEffect } from "react";
import { ImageList, ImageListItem } from "@mui/material";
import * as S from "./index.styles";
import Image from "next/image";
import questionPNG from "../../public/question.png";
import { fetchContractABI, getNFTTokenCA, getTokenIds } from "../api/voteAPI";
import { getAllContracts } from "../api/adminAPI";

const NFTGallery = () => {
  const [NFTInfoList, setNFTInfoList] = useState([]);
  const [allContractList, setAllContractList] = useState([]);

  useEffect(() => {
    async function getContractList() {
      var contractList = await getAllContracts();
      contractList = contractList.filter((contract) => !contract.isDeleted);
      setAllContractList(contractList);
    }
    getContractList();
  }, []);

  useEffect(() => {
    async function getNFTInfos(contract) {
      const contractAddress = contract.contractAddress.trim();
      const ABI = await fetchContractABI(contractAddress);
      const NFTCAAddress = await getNFTTokenCA(ABI, contractAddress);
      const tokenIDList = await getTokenIds(ABI, contractAddress);
      tokenIDList.map((id, index) => {
        setNFTInfoList((prev) => [
          ...prev,
          { NFTCA: NFTCAAddress, tokenId: id },
        ]);
      });
    }
    setNFTInfoList([]);
    allContractList.map((contract) => getNFTInfos(contract));
  }, [allContractList]);

  return (
    <S.RootStyle>
      <S.Title>NFT GALLERY</S.Title>
      <S.BlueInfo>
        You can Add NFT in your MetaMask with NFT Contract Address and TokenID 🤗
      </S.BlueInfo>
      <ImageList sx={{ margin: 5 }}>
        {NFTInfoList.map((item, index) => {
          const url =
            "https://pixxiti.com/ethereum/goerli/nfts/" +
            item.NFTCA +
            "/" +
            item.tokenId;
          return (
            <ImageListItem
              sx={{
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                margin: 1,
              }}
              key={index}
              onClick={() => window.open(url, "_blank")}
            >
              <Image width="200" height="200" src={questionPNG} alt={"NFT"} />
              <S.Info> {`NFT Contract Address : ${item.NFTCA}`}</S.Info>
              <S.Info> {`tokenID : ${item.tokenId}`}</S.Info>
            </ImageListItem>
          );
        })}
      </ImageList>
    </S.RootStyle>
  );
};

export default NFTGallery;
