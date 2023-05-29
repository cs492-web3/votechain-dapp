import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import * as S from "./index.styles";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { walletAddressState } from "../atom";
import { getIsAdmin, startVoteSession, fetchContractABI } from "../api/voteAPI";
import { getAllContracts } from "../api/adminAPI";
import TransactionDialog from "../../components/TransactionDialog";
import CurrVoteInfo from "./components/CurrVoteInfo";

export default function Admin() {
  const [adminContractList, setAdminContractList] = useState([]);
  const [allContractList, setAllContractList] = useState([]);
  const address = useRecoilValue(walletAddressState);
  const [modalOpen, setModalOpen] = useState(false);
  const [transactionResult, setTransactionResult] = useState({});

  useEffect(() => {
    async function allContracts() {
      var contractList = await getAllContracts();
      contractList = contractList.filter((contract) => !contract.isDeleted);
      setAllContractList(contractList);
    }
    allContracts();
  }, []);

  useEffect(() => {
    async function checkIsAdmin(contract) {
      if (contract.contractAddress != "") {
        const ABI = await fetchContractABI(contract.contractAddress);
        const isAdmin = await getIsAdmin(ABI, contract.contractAddress);
        const newData = {
          name: contract.name,
          contractAddress: contract.contractAddress,
          ABI: ABI,
        };
        if (isAdmin) {
          setAdminContractList((prev) => [...prev, newData]);
        }
      }
    }
    setAdminContractList([]);
    allContractList.map((contract) => {
      checkIsAdmin(contract);
    });
  }, [allContractList]);

  const handleModalClose = () => {
    if (Object.entries(setTransactionResult).length != 0) {
      setModalOpen(false);
      router.reload();
    }
  };
  const onClickClose = () => {
    setModalOpen(false);
    router.reload();
  };

  return (
    <S.RootStyle>
      {adminContractList.length != 0 ? (
        <>
          <S.Title>관리자 페이지에 오신 것을 환영합니다</S.Title>
          {adminContractList.map((contract, index) => {
            return (
              <CurrVoteInfo
                key={index}
                contractAddress={contract.contractAddress}
                name={contract.name}
                ABI={contract.ABI}
              />
            );
          })}
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
