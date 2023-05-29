import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { RecoilRoot, useRecoilState } from "recoil";
import RecoilNexus from "recoil-nexus";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, useAccount, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  polygonMumbai,
  optimismGoerli,
  arbitrumGoerli,
  polygonZkEvm,
  polygonZkEvmTestnet,
  klaytn,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";
import { walletAddressState } from "./atom";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { getDefaultProvider } from "ethers";
import { NftProvider, useNft } from "use-nft";
import Home from "./index.page";
const { chains, provider } = configureChains(
  [
    mainnet,
    goerli,
    // polygon,
    // polygonMumbai,
    // optimism,
    // optimismGoerli,
    // arbitrum,
    // klaytn,
    // arbitrumGoerli,
    // polygonZkEvm,
    // polygonZkEvmTestnet
  ],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Nupkjuk Votechain",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { WagmiConfig, RainbowKitProvider };

const AdminRoute = ({ children }) => {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useRecoilState(walletAddressState);
  const account = useAccount({
    onConnect({ address, connector, isReconnected, isDisconnected }) {
      if (!isReconnected) router.reload();
      setWalletAddress(address);
    },
    onDisconnect() {
      router.replace({ pathname: '/votechain-dapp/'});
    },
  });

  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  // We are using the "ethers" fetcher here.
  const ethersConfig = {
    provider: getDefaultProvider("homestead"),
  };

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NftProvider fetcher={["ethers", ethersConfig]}>
          <RecoilNexus />
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
              modalSize="compact"
              initialChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN}
              chains={chains}
            >
              <MainLayout>
                <AdminRoute>
                  <Component {...pageProps} />
                </AdminRoute>
              </MainLayout>
            </RainbowKitProvider>
          </WagmiConfig>
        </NftProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
