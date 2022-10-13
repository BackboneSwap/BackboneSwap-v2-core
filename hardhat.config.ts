import * as dotenv from 'dotenv'
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.5.16",
  networks: {
    ivarextestnet: {
      url: 'https://testnet.ivarex.com',
      chainId: 16888,
      accounts: process.env.PRIVATE_KEY_DEPLOY_FACTORY ? [process.env.PRIVATE_KEY_DEPLOY_FACTORY] : []
    },
    ivarex: {
      url: 'https://mainnet.ivarex.com',
      chainId: 88888,
      accounts: process.env.PRIVATE_KEY_DEPLOY_FACTORY ? [process.env.PRIVATE_KEY_DEPLOY_FACTORY] : []
    },
    rei: {
      url: 'https://rei-rpc.moonrhythm.io',
      chainId: 55555,
      accounts: process.env.PRIVATE_KEY_DEPLOY_FACTORY ? [process.env.PRIVATE_KEY_DEPLOY_FACTORY] : []
    },
    bitkubtestnet: {
      url: 'https://rpc-testnet.bitkubchain.io',
      chainId: 25925,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    },
    velastestnet: {
      url: 'https://testnet.velas.com/rpc/',
      chainId: 111,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    },
    novatestnet: {
      url: 'https://testnet.rpc.novanetwork.io:9070',
      chainId: 107,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    },
  },
  etherscan: {
    apiKey: {
      ivarex: 'ivarex',
      rei: 'rei',
      ivarextestnet: ':D',
      bitkubtestnet: 'bitkubtestnet',
      velastestnet: 'velastestnet',
    },
    customChains: [
      {
        network: 'ivarextestnet',
        chainId: 16888,
        urls: {
          apiURL: 'https://testnet.ivarscan.com/api',
          browserURL: 'https://testnet.ivarscan.com/'
        }
      },
      {
        network: 'ivarex',
        chainId: 88888,
        urls: {
          apiURL: 'https://ivarscan.com/api',
          browserURL: 'https://ivarscan.com/'
        }
      },
      {
        network: 'rei',
        chainId: 55555,
        urls: {
          apiURL: 'https://reiscan.com/api',
          browserURL: 'https://reiscan.com/'
        }
      },
      {
        network: 'bitkubtestnet',
        chainId: 25925,
        urls: {
          apiURL: 'https://testnet.bkcscan.com/api',
          browserURL: 'https://testnet.bkcscan.com/'
        }
      },
      {
        network: 'velastestnet',
        chainId: 111,
        urls: {
          apiURL: 'https://explorer.testnet.velas.com/api',
          browserURL: 'https://evmexplorer.testnet.velas.com'
        }
      },
      // {
      //   network: 'novatestnet',
      //   chainId: 107,
      //   urls: {
      //     apiURL: 'https://explorer.novanetwork.io/api',
      //     browserURL: 'https://explorer.novanetwork.io/'
      //   }
      // },
    ]
  }
};

export default config;