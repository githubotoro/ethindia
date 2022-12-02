import { db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";

export async function fetchNFTData(id) {
  const docRef = doc(db, "tokens", "" + id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("Data do not exist!");
  }
}
