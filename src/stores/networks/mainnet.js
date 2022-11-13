// import { INetworkSpecifics, ExternalAddresses, AddNetworkParams, SwitchNetworkParams } from '.'
// import DeployedAddressesMainnet from '../../assets/deployed-mainnet.json'
// import DeployedABIsMainnet from '../../assets/abis-mainnet.json'
import TokenListMainnet from "../../assets/token-list-mainnet.json";

export default class MainnetNetworkSpecifics {
  getNetworkName() {
    return "mainnet";
  }

  getHumanReadableNetworkName() {
    return "Ethereum mainnet";
  }

  getChainID() {
    return 1;
  }

  getDeployedAddresses() {
    // return DeployedAddressesMainnet
    return null;
  }

  getDeployedABIs() {
    // return DeployedABIsMainnet
    return null;
  }

  getExternalAddresses() {
    return {
      imo: "",
      dai: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      cDai: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
      weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    };
  }

  getTokenList() {
    return TokenListMainnet;
  }

  getSubgraphURL() {
    return "";
  }

  getEtherscanTxUrl(tx) {
    return `https://etherscan.io/tx/${tx}`;
  }

  getAddNetworkParams() {
    return {
      chainId: "0x1",
      chainName: "Mainnet",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://mainnet.infura.io/v3/"],
      blockExplorerUrls: ["https://etherscan.io"],
    };
  }

  getSwitchNetworkParams() {
    return {
      chainId: "0x1",
    };
  }

  getRPCURL() {
    return "https://mainnet.infura.io/v3/";
  }
}
