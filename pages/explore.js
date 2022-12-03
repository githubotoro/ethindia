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
				<div className="w-full bg-base-200 min-h-screen">
					<div className="grid grid-flow-row-dense grid-cols-3 overflow-hidden">
						{tokenList.map((token) => {
							return (
								<>
									<iframe
										height="90%"
										scrolling="no"
										className=" m-2 p-6 w-full h-[450px] overflow-hidden rounded-[30px] drop-shadow-md"
										src={`https://ethindia-one.vercel.app/view/${token}`}
									></iframe>
								</>
							);
						})}
					</div>
				</div>
			</>
		);
	};

	const FooterContent = () => {
		return (
			<>
				<footer className="footer footer-center p-5 bg-primary text-primary-content">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 400 400"
							className="h-8 w-8 sm:h-11 sm:w-11 fill-primary-content"
						>
							<g id="Layer_3" data-name="Layer 3">
								<path d="M200.16,0Q274.56,0,349,0c29,0,50.86,21.32,51,49.63.17,28.47-22.11,50.47-51.34,50.48q-148.8.08-297.6,0c-28.76,0-50.91-21.8-51-49.91C-.11,21.55,21.86,0,51.36,0Q125.76,0,200.16,0Z" />
								<path d="M149.56,249.34q-49.47,0-98.95,0c-28.68,0-50.68-21.91-50.6-50.17s22.22-49.92,51-49.94q99-.08,197.9,0c28.87,0,50.89,21.64,51,49.88.07,28.47-21.65,50.17-50.46,50.24C216.11,249.41,182.84,249.34,149.56,249.34Z" />
								<path d="M49.87,400C21.87,399.94.09,378.15,0,350.14a50,50,0,0,1,50.59-50.28A49.9,49.9,0,0,1,100.43,350C100.44,378.39,78.52,400.06,49.87,400Z" />
							</g>
						</svg>
						<div className="font-bold text-md sm:text-lg">
							<span className="text-lg sm:text-xl">Ownad</span>
							<br />
							Turn your NFTs into Ad-Spaces.
						</div>
						<div>Copyright © 2022 - All Rights Reserved</div>
					</div>
				</footer>
			</>
		);
	};

	return (
		<>
			<center>
				<h1 className="font-black text-3xl md:text-2xl lg:text-3xl">
					NFTs&nbsp;
					<div className="ml-1 md:ml-2 h-fit items-center badge badge-accent font-black text-3xl md:text-2xl lg:text-3xl py-0 md:py-1 rounded-lg content-center shadow-md">
						Converted
					</div>
					&nbsp;to&nbsp;
					<div className="ml-1 md:ml-2 h-fit items-center badge badge-primary font-black text-3xl md:text-2xl lg:text-3xl py-0 md:py-1 rounded-lg content-center shadow-md">
						Ad-Spaces
					</div>
					&nbsp;so far
				</h1>
			</center>

			{getAllNfts()}

			{FooterContent()}
		</>
	);
}
