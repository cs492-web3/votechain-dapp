import { NftFilters } from "@alch/alchemy-web3";
import React, { useState, useEffect } from "react";
import * as S from "./index.styles";

const NFTGallery = () => {
  const [NFTInfoList, setNFTInfoList] = useState([]);

  useEffect(() => {
    async function getImage() {

    }
    getImage();
  }, []);

  return (
    <S.RootStyle>
      <div>NFT GALLERY</div>
    </S.RootStyle>
  );
};

export default NFTGallery;
