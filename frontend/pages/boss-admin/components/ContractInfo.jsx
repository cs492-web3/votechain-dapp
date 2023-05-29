import { useEffect, useState } from "react";
import * as S from "./ContractInfo.styles";
import { deleteContract, reopenContract } from "../../api/adminAPI";
import { useRecoilValue } from "recoil";
import { walletAddressState } from "../../atom";
import TransactionDialog from "../../../components/TransactionDialog";

const ContractInfo = ({ data }) => {
  const [contractName, setContractName] = useState("");
  const [contractAddress, setContractAddress] = useState("");

  const [transactionResult, setTransactionResult] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const address = useRecoilValue(walletAddressState);

  const handleModalClose = () => {
    if (Object.entries(setTransactionResult).length != 0) {
      setModalOpen(false);
    }
  };

  const onClickClose = () => {
    setModalOpen(false);
  };

  const activatetHandler = async () => {
    setModalOpen(true);
    if (data.isDeleted) {
      const result = await reopenContract(address, Number(data.id));
      console.log(result);
      setTransactionResult(result);
    } else {
      const result = await deleteContract(address, Number(data.id));
      console.log(result);
      setTransactionResult(result);
    }
  };

  return (
    <div>
      <S.Contract>
        <S.Info>{`Contract ID : ${data.id}`}</S.Info>
        <S.Info>{`Contract Name : ${data.name}`}</S.Info>
        <S.Info>{`Contract Address : ${data.contactAddress}`}</S.Info>
        <S.Info>{`Is Contract Activated : ${data.isDeleted}`}</S.Info>
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
