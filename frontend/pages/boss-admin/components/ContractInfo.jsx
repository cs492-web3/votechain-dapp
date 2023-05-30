import { useEffect, useState } from "react";
import * as S from "./ContractInfo.styles";
import { deleteContract, reopenContract } from "../../api/adminAPI";
import { useRecoilValue } from "recoil";
import { walletAddressState } from "../../atom";
import TransactionDialog from "../../../components/TransactionDialog";
import { useRouter } from "next/router";
const ContractInfo = ({ data }) => {
  const [transactionResult, setTransactionResult] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const address = useRecoilValue(walletAddressState);
  const router = useRouter();
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

  const activatetHandler = async () => {
    setModalOpen(true);
    if (data.isDeleted) {
      const result = await reopenContract(address, Number(data.id));
      setTransactionResult(result);
    } else {
      const result = await deleteContract(address, Number(data.id));
      setTransactionResult(result);
    }
  };

  return (
    <div>
      <S.Contract>
        <S.Info>{`Contract ID : ${data.id}`}</S.Info>
        <S.Info>{`Contract Name : ${data.name}`}</S.Info>
        <S.Info>{`Contract Address : ${data.contractAddress}`}</S.Info>
        <S.Info>{`Contract Inactivated : ${data.isDeleted}`}</S.Info>
        <S.RegisterButton onClick={activatetHandler}>
          {data.isDeleted ? "Activate" : "Inactivate"} Contract
        </S.RegisterButton>
      </S.Contract>
      <TransactionDialog
        open={modalOpen}
        handleClose={handleModalClose}
        onClickClose={onClickClose}
        result={transactionResult}
      />
    </div>
  );
};

export default ContractInfo;
