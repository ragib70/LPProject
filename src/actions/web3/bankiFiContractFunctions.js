import BN from "bn.js";
import { useWalletStore } from "../../stores/walletStore";
import { web3UintMax, ZERO_ADDRESS } from "../../modules/web3/utils/Web3Utils";
import { useContractStore } from "../../stores/contractStore";

// Read Contract functions.
async function getBorrowerByID(id) {
  const contract = useContractStore.getState().all41ExchangeContract;
  // Removing bn as it means bigNumber Implementation.
  try {
    return contract ? await contract.methods._borrowerList(id).call() : "-1";
  } catch (ex) {
    console.log(ex);
    throw new Error("Failed to get Borrower By ID");
  }
}

async function getLenderByID(id) {
  const contract = useContractStore.getState().all41ExchangeContract;
  // Removing bn as it means bigNumber Implementation.
  try {
    return contract ? await contract.methods._lenderList(id).call() : "-1";
  } catch (ex) {
    console.log(ex);
    throw new Error("Failed to get Lender By ID");
  }
}

async function getNumOfBorrowers() {
  const contract = useContractStore.getState().all41ExchangeContract;
  // Removing bn as it means bigNumber Implementation.
  try {
    return contract ? await contract.methods._borrowerNum().call() : "-1";
  } catch (ex) {
    console.log(ex);
    throw new Error("Failed to get Number of Borrowers");
  }
}

async function getNumOfLenders() {
  const contract = useContractStore.getState().all41ExchangeContract;
  // Removing bn as it means bigNumber Implementation.
  try {
    return contract ? await contract.methods._lenderNum().call() : "-1";
  } catch (ex) {
    console.log(ex);
    throw new Error("Failed to get Number of Lenders");
  }
}

async function getPoolFee() {
  const contract = useContractStore.getState().all41ExchangeContract;
  // Removing bn as it means bigNumber Implementation.
  try {
    return contract ? await contract.methods.poolFee().call() : "-1";
  } catch (ex) {
    console.log(ex);
    throw new Error("Failed to get Pool Fee");
  }
}

// Write Contract Functions

export {
  getBorrowerByID,
  getLenderByID,
  getNumOfBorrowers,
  getNumOfLenders,
  getPoolFee,
};
