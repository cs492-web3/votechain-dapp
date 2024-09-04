import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { createConfig, http, WagmiProvider } from "wagmi";
import { mainnet, goerli } from "viem/chains";
import MainLayout from "../layout/mainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = createConfig({
  chains: [mainnet, goerli],
  transports: {
    [mainnet.id]: http(),
    [goerli.id]: http(),
  },
});

function MyApp({ Component, pageProps }: any) {
  const queryClient = new QueryClient();
  // We are using the "ethers" fetcher here.

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RecoilNexus />
        <WagmiProvider config={config}>
          <RainbowKitProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </RainbowKitProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
