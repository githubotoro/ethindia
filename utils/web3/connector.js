import detectEthereumProvider from "@metamask/detect-provider";
import { parse } from "postcss";
import Web3 from "web3";

import { Web3Storage } from "web3.storage";

import NftContract from "../helper/ADNFT.json";

const CONTRACT_ADDRESS = "0x97983903d9c2D624C5d3D581d894277740f3d602";
const CONTRACT_ABI = NftContract.abi;

export const connectSmartContract = async () => {
  const provider = await detectEthereumProvider();

  let web3 = new Web3(provider);

  let contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  return contract;
};

export const mintNft = async (name, description, _ipfsLink, address) => {
  let contract = await connectSmartContract();
  await contract.methods
    .mint(name, description, _ipfsLink)
    .send({ from: address });
  let id = await contract.methods.tokenIds().call();
  return id;
};

export const getCount = async () => {
  let contract = await connectSmartContract();
  let id = await contract.methods.tokenIds().call();
  return id;
};

function makeStorageClient() {
  return new Web3Storage({
    token: process.env.NEXT_PUBLIC_WEB3STORAGE_API_KEY,
  });
}

export const storeFiles = async (files) => {
  const client = makeStorageClient();
  const cid = await client.put(files);
  return cid;
};
