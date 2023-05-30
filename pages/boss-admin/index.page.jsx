import { useEffect, useState } from "react";
import * as S from "./index.styles";
import { getIsAdmin, getAllContracts } from "../api/adminAPI";
import { useRecoilValue } from "recoil";
import { walletAddressState } from "../atom";
import AddContract from "./components/AddContract";
import ContractInfo from "./components/ContractInfo";

export default function BossAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [contractList, setContractList] = useState([]);
  const address = useRecoilValue(walletAddressState);
  useEffect(() => {
    async function checkIsAdmin() {
      if (address != "") {
        const admin = await getIsAdmin(address);
        setIsAdmin(admin);
      }
    }
    checkIsAdmin();
  }, [address]);

  useEffect(() => {
    async function allContracts() {
      const contractList = await getAllContracts();
      setContractList(contractList);
      return contractList;
    }

    if (isAdmin) {
      const contractList = allContracts();
    }
  }, [isAdmin]);

  return (
    <S.RootStyle>
      {isAdmin ? (
        <>
          <S.Title>관리자 페이지에 오신 것을 환영합니다</S.Title>
          <S.Info> 현재 등록된 투표들</S.Info>
          {contractList.map((data, index) => {
            return <ContractInfo key={index} data={data} />;
          })}
          <AddContract />
        </>
      ) : (
        <S.Title>관리자가 아닙니다</S.Title>
      )}
    </S.RootStyle>
  );
}
