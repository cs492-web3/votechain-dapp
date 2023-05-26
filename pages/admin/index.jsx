import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import * as S from "./index.styles";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { getIsAdmin, startVoteSession } from "../../utils/interact";
import TransactionDialog from "../../components/TransactionDialog";
import CurrVoteInfo from "./components/CurrVoteInfo";
export default function Admin() {
  const router = useRouter();
  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      if (!isReconnected) router.reload();
      else setAddress(address);
    },
  });

  const [isAdmin, setIsAdmin] = useState(false);
  const [address, setAddress] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [transactionResult, setTransactionResult] = useState({});

  useEffect(() => {
    async function checkIsAdmin() {
      if (address != "") {
        const admin = await getIsAdmin(address);
        setIsAdmin(admin);
      }
    }
    checkIsAdmin();
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
