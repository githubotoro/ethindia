import React, { useState } from "react";

import AdnftContract from "../components/helper/ADNFT.json";
import { useContractRead, useAccount, useNetwork, useSigner } from "wagmi";
import { ethers } from "ethers";

export default function Explore() {
	const { address, isConnected, connector } = useAccount();
	const { chain } = useNetwork();
	const { data: signer } = useSigner();

	const CONTRACT_ADDRESS = "0xE1DBC6647e1e3e2c4a8E3092131724EE8579f1B2";
	const CONTRACT_ABI = AdnftContract.abi;

	const [totalNfts, setTotalNfts] = useState();
	const [allNfts, setAllNfts] = useState();

	const { data, isError, isLoading } = useContractRead({
		address: CONTRACT_ADDRESS,
		abi: CONTRACT_ABI,
		functionName: "tokenIds",
		chainId: 80001,
	});

	const getTotalNfts = async () => {
		let ALCHEMY_PROVIDER = new ethers.providers.JsonRpcProvider(
			process.env.NEXT_PUBLIC_POLYGON_MUMBAI_API_KEY
		);

		let AdnftContract = new ethers.Contract(
			CONTRACT_ADDRESS,
			CONTRACT_ABI,
			ALCHEMY_PROVIDER
		);

		let getTokenIdsPromise = AdnftContract.tokenIds();

		await getTokenIdsPromise.then(function (result) {
			setTotalNfts(parseInt(result._hex));
		});
	};

	const getAllNfts = () => {
		let tokenList = [];
		for (let i = 0; i < totalNfts; i++) {
			tokenList.push(i + 1);
		}

		return (
			<>
				{tokenList.map((token) => {
					return (
						<>
							<iframe
								className="w-100 h-100"
								src="https://ethindia-one.vercel.app/view/1"
							></iframe>
						</>
					);
				})}
			</>
		);
	};

	return (
		<>
			<button
				onClick={() => {
					getTotalNfts();
				}}
			>
				Get Total NFTs
			</button>

			{getAllNfts()}
		</>
	);
}
