import React from "react";

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

export default function Viewport() {
	const tokenId = "1";
	const metadata = "some metadata";
	const addata = "some addata";

	const setData = async () => {
		await setDoc(doc(db, "tokens", tokenId), {
			metadata: metadata,
			addata: addata,
		});
	};

	return (
		<>
			<button onClick={() => setData()}>Save</button>
			<h1>Viewport</h1>
		</>
	);
}
