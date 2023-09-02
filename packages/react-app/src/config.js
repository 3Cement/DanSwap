import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x39aF9b3877dfa7Ea9D089502A003ed12467A46e7"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/-jhzDL32wN5O3glbCCvJikUomzBh6QAT",
  },
};