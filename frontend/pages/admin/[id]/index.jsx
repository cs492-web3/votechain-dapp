import { ConnectButton } from "@rainbow-me/rainbowkit";
import * as S from "./index.styles";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();
  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      if (!isReconnected) router.reload();
    },
  });

  return (
    <S.RootStyle>
      <S.Title>Add Candidate</S.Title>
    </S.RootStyle>
  );
}
