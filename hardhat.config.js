require('dotenv').config({path:'.env'})

require("@nomicfoundation/hardhat-toolbox");

dev_private_key = process.env.DEV_PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000";
dev_provider = process.env.DEV_PROVIDER || "http://127.0.0.1:8545";
dev_chainId = parseInt(process.env.DEV_CHAIN_ID || "987789");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "dev",
    networks: {
        dev: {
            url: dev_provider,
            accounts: [dev_private_key],
            chainId: dev_chainId
        }
    },
    solidity: {
        version: "0.8.17",
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000
            }
        }
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    mocha: {
        timeout: 40000
    }
};
