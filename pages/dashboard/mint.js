import { useState } from "react";

import { storeFiles, mintNft } from "../../utils/web3/connector";
import {} from "../../utils/firebase/functions";
import { useAccount } from "wagmi";

export default function Mint() {
  const { address, isConnected } = useAccount();

  //   const [nftName, setNftName] = useState();
  //   const [nftDescription, setNftDescription] = useState();
  const [nftFiles, setNftFiles] = useState();
  //   const [adTitle, setAdTitle] = useState();
  //   const [adHeadline, setAdHeadline] = useState();
  //   const [adLink, setAdLink] = useState();
  const [adFiles, setAdFiles] = useState();

  const nftName = "Name of NFT";
  const nftDescription = "Description";
  const adTitle = "Ad";
  const adHeadline = "This is Ad";
  const adLink = "";

  const onSave = async () => {
    console.log("--->", "start");
    const cid = await storeFiles(nftFiles);

    const nftImage = "https://i.seadn.io/gae/" + cid;
    const id = await mintNft(nftName, nftDescription, nftImage, address);

    const data = {
      id,
      nftName,
      nftDescription,
      nftImage,
      adTitle,
      adHeadline,
    };
    const result = await storeNft(adFiles[0], data);

    console.log(result);
  };

  return (
    <div className="container">
      <label className="cursor-pointer">
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            setNftFiles(event.target.files);
          }}
        />
        Upload NFT
      </label>

      <label className="cursor-pointer ml-40">
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            setAdFiles(event.target.files);
          }}
        />
        Upload Ad Logo
      </label>

      <button onClick={onSave} className="ml-40">
        Save
      </button>
    </div>
  );
}
