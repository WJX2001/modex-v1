import * as chains from './chains';

const MAINNETCoins = [
  {
    name: "Tether USD",
    abbr: "USDT",
    // address: "0x1A9FB160b3b2e0be41E9CEa182eC4ef0CFc75B16",
    // USDT
    address: "0xA46Ba1732444DF2b3c0c4F98186E234B69e7D215",
  },
  {
    name: "Pocket Index",
    abbr: "PocketIndex",
    // address: "0x4A85e1a3Cca418b42B5f1cB48dCe7AE72bFcaA6E",
    // IndexLPToken
    address: "0x111F608A01119707Dc70032B7738Af8B5131E949"
  },
  {
    name: "Ether",
    abbr: "ETH",
    address: "", // Weth address is fetched from the router
  },
  {
    name: "Dai",
    abbr: "DAI",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", // not deployed
  },
  {
    name: "Ampleforth",
    abbr: "AMPL",
    address: "0xD46bA6D942050d489DBd938a2C909A5d5039A161", // not deployed
  },
  {
    name: "Wrapped BTC",
    abbr: "WBTC",
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // not deployed
  },
  {
    name: "Fei USD",
    abbr: "FEI",
    address: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", // not deployed
  },
  {
    name: "frax",
    abbr: "FRAX",
    address: "0x853d955aCEf822Db058eb8505911ED77F175b99e", // not deployed
  },
  {
    name: "Frax Share",
    abbr: "FXS",
    address: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0", // not deployed
  },
  {
    name: "renBTC",
    abbr: "renBTC",
    address: "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D", // not deployed
  },
  {
    name: "StakeWise",
    abbr: "SWISE",
    address: "0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2", // not deployed
  },
]

const COINS = new Map();
COINS.set(chains.ChainId.MAINNET, MAINNETCoins);
export default COINS