import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import * as S from "./index.styles";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { walletAddressState } from "../atom";
import { getIsAdmin, startVoteSession } from "../../utils/interact";
import TransactionDialog from "../../components/TransactionDialog";
import CurrVoteInfo from "./components/CurrVoteInfo";

export default function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const address = useRecoilValue(walletAddressState);
  const [modalOpen, setModalOpen] = useState(false);
  const [transactionResult, setTransactionResult] = useState({});

  useEffect(() => {
    async function checkIsAdmin() {
      if (address != "") {
        const admin = await getIsAdmin(address);
        console.log(admin);
        setIsAdmin(admin);
      }
    }
    checkIsAdmin();
    console.log("address: ", address);
  }, [address]);

  const handleModalClose = () => {
    if (Object.entries(setTransactionResult).length != 0) {
      setModalOpen(false);
    }
  };
  const onClickClose = () => {
    setModalOpen(false);
  };

  return (
    <S.RootStyle>
      {isAdmin ? (
        <>
          <S.Title>관리자 페이지에 오신 것을 환영합니다</S.Title>
          <CurrVoteInfo address={address} />
        </>
      ) : (
        <S.Title>관리자가 아닙니다</S.Title>
      )}

      <TransactionDialog
        open={modalOpen}
        result={transactionResult}
        handleClose={handleModalClose}
        onClickClose={onClickClose}
      />
    </S.RootStyle>
  );
}
