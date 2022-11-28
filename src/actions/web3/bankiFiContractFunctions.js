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

function depositAmountLender(tokenAddress, amount) {
  // Here the amount should be givrn in WEI which is 10^18 denomination.
  const all41Exchange = useContractStore.getState().all41ExchangeContract;

  if (!all41Exchange) {
    console.error(`all41Exchange not set correctly`);
    return null;
  }

  try {
    return all41Exchange.methods.lenderDeposit(tokenAddress, amount).send();
  } catch (error) {
    console.error("all41Exchange.methods.lenderDeposit failed");
    return null;
  }
}

function depositAmountBorrower(tokenAddress, amount) {
  // Here the amount should be givrn in WEI which is 10^18 denomination.
  const all41Exchange = useContractStore.getState().all41ExchangeContract;

  if (!all41Exchange) {
    console.error(`all41Exchange not set correctly`);
    return null;
  }

  try {
    return all41Exchange.methods.borrowerDeposit(tokenAddress, amount).send();
  } catch (error) {
    console.error("all41Exchange.methods.borrowerDeposit failed");
    return null;
  }
}

function matchBorrowerWithLender(id, uri, timeInMonths) {
  // Here the amount should be givrn in WEI which is 10^18 denomination.
  const all41Exchange = useContractStore.getState().all41ExchangeContract;

  if (!all41Exchange) {
    console.error(`all41Exchange not set correctly`);
    return null;
  }

  try {
    return all41Exchange.methods
      .matchBorrowerLender(
        id,
        0xf87522907591fd5271583d72ae6ac1e516ccc83c,
        uri,
        timeInMonths
      )
      .send();
  } catch (error) {
    console.error("all41Exchange.methods.matchBorrowerLender failed");
    return null;
  }
}

export {
  getBorrowerByID,
  getLenderByID,
  getNumOfBorrowers,
  getNumOfLenders,
  getPoolFee,
  depositAmountLender,
  depositAmountBorrower,
  matchBorrowerWithLender,
};
