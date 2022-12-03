import { db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";

export const fetchNFTData = async (id) => {
  const docRef = doc(db, "tokens", "" + id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data;
};
