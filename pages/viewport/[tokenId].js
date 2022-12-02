import React, { useState } from "react";

import { db } from "../../utils/firebase/firebase-config";
import {
	collection,
	getDocs,
	doc,
	getDoc,
	setDoc,
	deleteDoc,
	deleteField,
	updateDoc,
} from "firebase/firestore";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Viewport() {
	const [nftData, setNftData] = useState();
	const [metadata, setMetadata] = useState();
	const [tokenId, setTokenId] = useState("1");
	const [addata, setAdddata] = useState();

	const getAllData = async () => {
		const tokenDocRef = doc(db, "tokens", tokenId);
		const tokenDoc = await getDoc(tokenDocRef);
		setNftData(tokenDoc.data());
	};

	// const setData = async () => {
	// 	await setDoc(doc(db, "tokens", tokenId), {
	// 		metadata: metadata,
	// 		addata: addata,
	// 	});
	// };

	return (
		<>
			<ConnectButton />
			<button onClick={() => setData()}>Save</button>
			<h1>Viewport</h1>
		</>
	);
}
