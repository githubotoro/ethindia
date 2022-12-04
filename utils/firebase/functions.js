import { db, storage } from "./firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

export const fetchNFTData = async (id) => {
  const docRef = doc(db, "tokens", "" + id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data;
};

export const storeNft = async (file, data) => {
  const imageRef = ref(storage, "" + data.id);
  const res = await uploadBytes(imageRef, file);

  const fileName = res.metadata.name;
  const adImage = `https://firebasestorage.googleapis.com/v0/b/ethindia-21512.appspot.com/o/${fileName}?alt=media&token=${Date.now()}`;

  const docRef = doc(db, "tokens", "" + data.id);
  const result = await setDoc(docRef, {
    id: data.id,
    nftName: data.nftName,
    nftDescription: data.nftDescription,
    nftImage: data.nftImage,
    adTitle: data.adTitle,
    adHeadline: data.adHeadline,
    adImage: adImage,
    adLink: data.adLink,
  });
  return result;
};

export const findUserNFT = () => {};
