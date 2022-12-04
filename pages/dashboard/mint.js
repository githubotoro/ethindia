import { useState } from "react";
import dynamic from "next/dynamic";

import { storeFiles, mintNft } from "../../utils/web3/connector";
import { storeNft } from "../../utils/firebase/functions";
import { useAccount } from "wagmi";

import { WidgetProps } from "@worldcoin/id";

import Footer from "../../components/home/Footer";

export default function Mint() {
  const { address, isConnected } = useAccount();

  const [isVerified, setIsVerified] = useState(false);

  const [nftName, setNftName] = useState();
  const [nftDescription, setNftDescription] = useState();
  const [nftFiles, setNftFiles] = useState();
  const [adTitle, setAdTitle] = useState();
  const [adHeadline, setAdHeadline] = useState();
  const [adLink, setAdLink] = useState();
  const [adFiles, setAdFiles] = useState();

  const WorldIDWidget = dynamic(
    () => import("@worldcoin/id").then((mod) => mod.WorldIDWidget),
    { ssr: false }
  );

  // const nftName = "Name of NFT";
  // const nftDescription = "Description";
  // const adTitle = "Ad";
  // const adHeadline = "This is Ad";
  // const adLink = "";

  const onSave = async () => {
    console.log("--->", "start");
    const cid = await storeFiles(nftFiles);

    const nftImage = "https://i.seadn.io/gae/" + cid;
    const id = await mintNft(nftName, nftDescription, nftImage, address);

    const data = {
      id,
      address,
      nftName,
      nftDescription,
      nftImage,
      adTitle,
      adLink,
      adHeadline,
    };
    await storeNft(adFiles[0], data);
    console.log("Saved successfully!");
  };

  return (
    <div className="container min-h-screen">
      <div className="mt-10 flex">
        <div>
          <div className="p-2 border-2 border-gray-400 rounded-md">
            <img
              src={
                nftFiles
                  ? URL.createObjectURL(nftFiles[0])
                  : "/images/addimage.jpg"
              }
              alt="nft"
              className="rounded-md nftSize object-cover"
            />
          </div>
          <div className="mt-7 relative">
            <label className="cursor-pointer btn btn-primary absolute top-0 bottom-0 left-0 bg-primary">
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setNftFiles(event.target.files);
                }}
              />
              Upload NFT
            </label>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-x-5 gap-y-7 ml-20">
          <div>
            <div className="text-sm font-semibold mb-2">
              Upload advertisers logo
            </div>
            <div className="flex justify-between">
              <div className="rounded-full border-2 p-1 overflow-hidden">
                <img
                  src={
                    adFiles
                      ? URL.createObjectURL(adFiles[0])
                      : "/images/uploadimage.png"
                  }
                  alt="logo"
                  className=" h-20 w-20 rounded-full object-cover"
                />
              </div>

              <label className="cursor-pointer btn btn-success">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    setAdFiles(event.target.files);
                  }}
                />
                Upload Ad Logo
              </label>
            </div>
          </div>
          <div></div>
          <div className="mt-3">
            <div className="text-sm font-semibold mb-2">NFT Name:</div>
            <input
              type="text"
              placeholder="Add NFT name"
              className="input w-full max-w-xs"
              onChange={(event) => setNftName(event.target.value)}
            />
          </div>
          <div className="mt-3">
            <div className="text-sm font-semibold mb-2">NFT Description:</div>
            <input
              type="text"
              placeholder="Add description"
              className="input w-full max-w-xs"
              onChange={(event) => setNftDescription(event.target.value)}
            />
          </div>
          <div className="mt-3">
            <div className="text-sm font-semibold mb-2">
              Advertisement title:
            </div>
            <input
              type="text"
              placeholder="Add advertisement title"
              className="input w-full max-w-xs"
              onChange={(event) => setAdTitle(event.target.value)}
            />
          </div>
          <div className="mt-3">
            <div className="text-sm font-semibold mb-2">
              Advertisement headline:
            </div>
            <input
              type="text"
              placeholder="Add advertisement headline"
              className="input w-full max-w-xs"
              onChange={(event) => setAdHeadline(event.target.value)}
            />
          </div>
          <div className="mt-3">
            <div className="text-sm font-semibold mb-2">Advertisement url:</div>
            <input
              type="text"
              placeholder="Add advertisement url"
              className="input w-full max-w-xs"
              onChange={(event) => setAdLink(event.target.value)}
            />
          </div>
          <div></div>
          <div>
            {!isVerified && (
              <WorldIDWidget
                actionId={process.env.NEXT_PUBLIC_WORLD_COIN_ID} // obtain this from developer.worldcoin.org
                signal="my_signal"
                enableTelemetry
                onSuccess={() => {
                  console.log(isVerified);
                  return setIsVerified(true);
                }}
                onError={(error) => console.error(error)}
                debug={true}
              />
            )}
            <button
              disabled={!isVerified}
              onClick={onSave}
              className="btn btn-primary px-12 mt-12"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
