require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const keys = require("./keys.json");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: keys.API_URL,
      accounts: [`0x${keys.PRIVATE_KEY}`],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./src/artifacts",
  },

  etherscan: {
    apiKey: "YI8UUAWND48WEQJ3HTNCFGDZ4CYBI92N4X",
  },
};
