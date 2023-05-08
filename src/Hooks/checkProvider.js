import { Wallet } from "ethers";

export const getProvider = (wallet) => {
    let provider = null;
    if (wallet === Wallet.METAMASK) {
      if (window.ethereum?.providers) {
        // eslint-disable-next-line no-restricted-syntax
        for (const p of window.ethereum?.providers) {
          if (p.isMetaMask) {
            provider = p;
            break;
          }
        }
      } else if (window.ethereum?.isMetaMask) {
        provider = window.ethereum;
      }
    }
    if (wallet === Wallet.COINBASE) {
      if (window.ethereum?.providers)
        // eslint-disable-next-line no-restricted-syntax
        for (const p of window.ethereum?.providers) {
          if (p.isCoinbaseWallet) {
            provider = p;
            break;
          }
        }
      else provider = window.coinbaseWalletExtension;
    }
    if (wallet === Wallet.CLOVER) {
      if (window.ethereum?.providers)
        // eslint-disable-next-line no-restricted-syntax
        for (const p of window.ethereum?.providers) {
          if (p.isClover) {
            provider = p;
            break;
          }
        }
      else provider = window.clover;
    }
    return provider;
  };