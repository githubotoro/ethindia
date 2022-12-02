import "../styles/tailwnd.scss";
import { Poppins } from "@next/font/google";

import Layout from "../components/default/layout";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal"],
	subsets: ["latin"],
});

const { chains, provider } = configureChains(
	[chain.polygonMumbai],
	[
		alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
		publicProvider(),
	]
);

const { connectors } = getDefaultWallets({
	appName: "My RainbowKit App",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

function MyApp({ Component, pageProps }) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<QueryClientProvider client={queryClient}>
					<div className={poppins.className}>
						<Layout>
							<main>
								<Component {...pageProps} />
								<ReactQueryDevtools initialIsOpen={false} />
							</main>
						</Layout>
					</div>
				</QueryClientProvider>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default MyApp;
