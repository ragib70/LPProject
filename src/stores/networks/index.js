import MainnetNetworkSpecifics from "./mainnet";

const specifics = [new MainnetNetworkSpecifics()];

export function getNetworkSpecifics() {
  return specifics;
}

export function getNetworkSpecificsByNetworkName(networkName) {
  for (const s of specifics) {
    if (s.getNetworkName() === networkName) {
      return s;
    }
  }

  return null;
}

if (!process.env.NEXT_PUBLIC_NETWORK) {
  console.log("WARNING: NEXT_PUBLIC_NETWORK not found. Defaulting to rinkeby");
}

const networkName = process.env.NEXT_PUBLIC_NETWORK
  ? process.env.NEXT_PUBLIC_NETWORK
  : "mainnet";

// Gets network based on NEXT_PUBLIC_NETWORK environment variable
export const NETWORK = getNetworkSpecificsByNetworkName(networkName);

if (!NETWORK) {
  throw Error("no network config: " + networkName);
}
