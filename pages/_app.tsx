import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
	[mainnet, polygon, optimism, arbitrum, goerli],
	//api key to add to .env later. but adding here so everyone can use for now
	[alchemyProvider({ apiKey: "9RscFf-M5Wz5EMfVOcX9Wnic6kAUMB6r" }), publicProvider()]
);
  
const { connectors } = getDefaultWallets({
	appName: "SuperFlow",
	chains
});
  
const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider
});
  
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains} theme={darkTheme({
			accentColor: 'black',
			accentColorForeground: 'white',
			borderRadius: 'medium',
			fontStack: 'system',
			overlayBlur: 'small',
			})}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</RainbowKitProvider>
		</WagmiConfig>
	)
}

export default MyApp
