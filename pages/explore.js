import React, { useState } from "react";

import AdnftContract from "../../components/helper/ADNFT.json";

export default function Explore() {
	const { address, isConnected, connector } = useAccount();
	const { chain } = useNetwork();
	const { data: signer, isError, isLoading } = useSigner();

	const CONTRACT_ADDRESS = "0xE1DBC6647e1e3e2c4a8E3092131724EE8579f1B2";
	const CONTRACT_ABI = AdnftContract.abi;

	const [allNfts, setAllNfts] = useState();

	const getAllNfts = async () => {
		const adnftContract = new ethers.Contract(
			CONTRACT_ADDRESS,
			CONTRACT_ABI,
			signer
		);
	};

	return (
		<>
			<h1>Explore</h1>
		</>
	);
}
