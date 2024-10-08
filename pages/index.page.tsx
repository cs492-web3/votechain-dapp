//@ts-nocheck
import { ConnectButton } from "@rainbow-me/rainbowkit";
import * as S from "./index.styles";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      if (!isReconnected) router.reload();
    },
  });
  if (account.isConnected) {
    router.replace({ pathname: "/all-votes", shallow: true });
  }

  return (
    <S.RootStyle>
      <S.Title>Welcome to Nupjuk Votechain</S.Title>
      <S.Title>Let{"'"}s Get Started</S.Title>
      <ConnectButton></ConnectButton>
    </S.RootStyle>
  );
}
