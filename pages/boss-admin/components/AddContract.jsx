import { useEffect, useState } from "react";
import * as S from "./AddContract.styles";
import { addContract } from "../../api/adminAPI";
import { useRecoilValue } from "recoil";
import { walletAddressState } from "../../atom";
import TransactionDialog from "../../../components/TransactionDialog";
const AddContract = () => {
  const [contractName, setContractName] = useState("");
  const [contractAddress, setContractAddress] = useState("");

  const [transactionResult, setTransactionResult] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const address = useRecoilValue(walletAddressState);

  const addContractHandler = async () => {
    setModalOpen(true);
    const result = await addContract(address, contractName, contractAddress);
    setTransactionResult(result);
  };

  const handleModalClose = () => {
    if (Object.entries(setTransactionResult).length != 0) {
      setModalOpen(false);
    }
  };

  const onClickClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <S.InputContainer>
        <S.Info> Contract 추가하기 </S.Info>
        <S.InputTextField
          id="outlined-basic"
          label="Contract Name"
          variant="outlined"
          value={contractName}
          onChange={(event) => {
            setContractName(event.target.value);
          }}
          InputLabelProps={{
            style: { color: "grey" },
          }}
          inputProps={{ style: { color: "white" } }}
        />
        <S.InputTextField
          id="outlined-basic"
          label="Contract Address"
          variant="outlined"
          value={contractAddress}
          InputLabelProps={{
            style: { color: "grey" },
          }}
          onChange={(event) => {
            setContractAddress(event.target.value.trim());
          }}
          inputProps={{ style: { color: "white" } }}
        />

        <S.RegisterButton onClick={addContractHandler}>
          추가하기
        </S.RegisterButton>
      </S.InputContainer>
      <TransactionDialog
        open={modalOpen}
        handleClose={handleModalClose}
        onClickClose={onClickClose}
        result={transactionResult}
      />
    </div>
  );
};

export default AddContract;
