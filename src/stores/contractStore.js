import create from "zustand";
import Web3 from "web3";
import { NETWORK } from "./networks";
import { useWalletStore } from "./walletStore";
import ERC20ABI from "../assets/abi-erc20.json";

export const useContractStore = create((set) => ({
  all41ExchangeContract: undefined,
}));

export function clearContracts() {
  useContractStore.setState({
    all41ExchangeContract: undefined,
  });
}

export function initContractsFromWeb3(web3) {
  const deployedAddresses = NETWORK.getDeployedAddresses();
  const abis = NETWORK.getDeployedABIs();

  const all41ExchangeContract = new web3.eth.Contract(
    abis.all41Exchange,
    deployedAddresses.all41Exchange,
    { from: web3.eth.defaultAccount }
  );

  useContractStore.setState({
    all41ExchangeContract: all41ExchangeContract,
  });
}

export function getERC20Contract(address) {
  const web3 = useWalletStore.getState().web3;
  return web3
    ? new web3.eth.Contract(ERC20ABI, address, {
        from: web3.eth.defaultAccount,
      })
    : null;
}
