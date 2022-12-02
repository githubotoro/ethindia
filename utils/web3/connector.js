import Web3 from "web3";
import Web3Modal from "web3modal";
import detectEthereumProvider from "@metamask/detect-provider";

export function init() {
  const providerOptions = {};

  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
  });

  return web3Modal;
}

export async function fetchAccountData() {
  const provider = await detectEthereumProvider();
  const web3 = new Web3(provider);
  const account = web3.eth.getAccounts();
  return account;
}
