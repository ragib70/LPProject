import BN from "bn.js";
import { useWalletStore } from "../../stores/walletStore";
import { web3UintMax, ZERO_ADDRESS } from "../../modules/web3/utils/Web3Utils";
import { getERC20Contract, useContractStore } from "../../stores/contractStore";

export default async function getBorrowerList(id) {
  const contract = useContractStore.getState().all41ExchangeContract;
  // Removing bn as it means bigNumber Implementation.
  try {
    return contract ? await contract.methods._borrowerList(id).call() : "-1";
  } catch (ex) {
    console.log(ex);
    throw new Error("Failed to get allowance");
  }
}
