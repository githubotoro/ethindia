import React, { useEffect, useState } from "react";

import AdnftContract from "../components/helper/ADNFT.json";
import { useContractRead, useAccount, useNetwork, useSigner } from "wagmi";
import { ethers } from "ethers";

export default function Explore() {
	const { address, isConnected, connector } = useAccount();
	const { chain } = useNetwork();
	const { data: signer } = useSigner();

	const CONTRACT_ADDRESS = "0x3EA4c5761BC32FcEA3D7f714a0F861581764ae9a";
	const CONTRACT_ABI = AdnftContract.abi;

	const [totalNfts, setTotalNfts] = useState();
	const [allNfts, setAllNfts] = useState();

	const { data, isError, isLoading } = useContractRead({
		address: CONTRACT_ADDRESS,
		abi: CONTRACT_ABI,
		functionName: "tokenIds",
		chainId: 80001,
	});

	useEffect(() => {
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

		getTotalNfts();
	}, []);

	const getAllNfts = () => {
		let tokenList = [];
		for (let i = 0; i < totalNfts; i++) {
			tokenList.push(i + 1);
		}

		return (
			<>
				<div className="w-full bg-base-200">
					<div className="grid grid-flow-row-dense grid-cols-3 overflow-hidden">
						{tokenList.map((token) => {
							return (
								<>
									<iframe
										height="90%"
										scrolling="no"
										className="m-2 p-6 w-full h-[450px] overflow-hidden rounded-[30px] drop-shadow-md"
										src={`https://ownad.vercel.app/view/${token}`}
									></iframe>
								</>
							);
						})}
					</div>
				</div>
			</>
		);
	};

	return <>{getAllNfts()}</>;
}
