import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useAccount, useSigner, useNetwork } from "wagmi";

import AdnftContract from "../../components/helper/ADNFT.json";

const Mint = () => {
	const [headline, setHeadline] = useState();
	const [title, setTitle] = useState();
	const [logoUrl, setLogoUrl] = useState();
	const [linkText, setLinkText] = useState();
	const [linkUrl, setLinkUrl] = useState();
	const [ipfsUrl, setIpfsUrl] = useState();

	const [mintProvider, setMintProvider] = useState();
	const { address, isConnected, connector } = useAccount();
	const { chain } = useNetwork();
	const { data: signer, isError, isLoading } = useSigner();

	const CONTRACT_ADDRESS = "0x3EA4c5761BC32FcEA3D7f714a0F861581764ae9a";
	const CONTRACT_ABI = AdnftContract.abi;

	const mintNFT = async (_ipfsLink) => {
		const adnftContract = new ethers.Contract(
			CONTRACT_ADDRESS,
			CONTRACT_ABI,
			signer
		);

		const mintNFT = await adnftContract.mint(_ipfsLink);
		await mintNFT.wait();
	};

	return (
		<>
			<div className="w-full h-screen bg-base-200 p-4">
				<center>
					<div className="max-w-lg space-y-4 ">
						<input
							className="input input-bordered font-medium text-md w-full focus:border-4 focus:border-neutral"
							placeholder="Title"
							value={title}
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>

						<input
							className="input input-bordered font-medium text-md w-full focus:border-4 focus:border-neutral"
							placeholder="Headline"
							value={headline}
							onChange={(e) => {
								setHeadline(e.target.value);
							}}
						/>

						<input
							className="input input-bordered font-medium text-md w-full focus:border-4 focus:border-neutral"
							placeholder="Link Text"
							value={linkText}
							onChange={(e) => {
								setLinkText(e.target.value);
							}}
						/>

						<input
							className="input input-bordered font-medium text-md w-full focus:border-4 focus:border-neutral"
							placeholder="Link URL"
							value={linkUrl}
							onChange={(e) => {
								setLinkUrl(e.target.value);
							}}
						/>

						<button
							onClick={() => {
								mintNFT("Some link.");
							}}
							className="btn btn-sm h-fit w-fit px-3 py-1 capitalize font-black text-lg border-4 border-neutral-content shadow-sm shadow-neutral-focus"
						>
							Mint NFT
						</button>
					</div>
				</center>
			</div>
		</>
	);
};

export default Mint;
