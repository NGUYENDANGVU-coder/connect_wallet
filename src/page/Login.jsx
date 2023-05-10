import React, { useState } from 'react'
import image from '../assets/image/image'
import Web3 from "web3";
import { errors, ethers } from "ethers";
import { getProvider } from '../Hooks/checkProvider';
import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { async } from 'q';
export default function Login({ setIsConnected }) {
    const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/9bab56a381cb440eb809f56e01c59de5"))
    async function activateInjectedProvider(providerName) {
        const { ethereum } = window;
        if (!ethereum?.providers) {
            alert(`No ${providerName} provider found`);
            return undefined;
        }

        let provider;
        switch (providerName) {
            case 'CoinBase':
                provider = ethereum.providers.find(({ isCoinbaseWallet }) => isCoinbaseWallet);
                break;
            case 'MetaMask':
                provider = ethereum.providers.find(({ isMetaMask }) => isMetaMask);
                break;
            default:
                console.log(errors)
        }

        if (provider) {
            ethereum.setSelectedProvider(provider);
        }
        if (!provider) {
            console.log(`No ${providerName} provider found`);
            return;
        }
        const testProvider = getProvider(providerName);
        console.log(testProvider);
        try {
            const account = await provider.request({ method: 'eth_requestAccounts' });
            localStorage.setItem('addressAccount', account)
            // Lấy balance
            web3.eth.getBalance(account.toString(), function (err, result) {
                if (err) {
                    console.log(err)
                } else {
                    localStorage.setItem('balance', web3.utils.fromWei(result, "ether"))
                    console.log(web3.utils.fromWei(result, "ether") + " ETH")
                }
            })
        } catch (error) {
            // console.error(`Failed to activate ${providerName} provider.`, error);
            // setIsConnected(false)
            if (error.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                alert(`Please connect to ${providerName}`);
                return
            } else {
                console.error(error);
            }
        }
        setIsConnected(true);
    }

    const connectBinace = async () => {
        if (window.BinanceChain) {
            const web3 = new Web3(window.BinanceChain);
            try {
                const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0) {
                    const balance = await web3.eth.getBalance(accounts[0]);
                    localStorage.setItem('addressAccount', accounts[0])

                    localStorage.setItem('balance', balance)
                    setIsConnected(true)
                    return true;
                } else {
                    console.log('No account found');
                    return false;
                }
            } catch (error) {
                console.error(error);
                return false;
            }
        } else {
            alert('Binance Wallet not found');
            return false;
        }
    }
    const handleWalletConnect = async() => {
        //  Create WalletConnect Provider
        const provider = new WalletConnectProvider({
            infuraId: "9bab56a381cb440eb809f56e01c59de5",
        });
        //  Enable session (triggers QR Code modal)
        await provider.enable();
        const web3 = new Web3(provider);
    }
    return (
        <div className='relative h-screen '>
            <div className='w-[25%] m-auto absolute top-[30%] left-[35%] rounded-md flex flex-col gap-y-4 p-4 shadow-formShadow'>
                <div className='ndv__wallet-item' onClick={() => activateInjectedProvider('MetaMask')}>
                    <img src={image.metaImg} alt='metamask' className='ndv__img' />
                    <h3 className='ml-6 text-lg font-bold'>Metamask</h3>
                </div>
                <div className='ndv__wallet-item' onClick={() => activateInjectedProvider('CoinBase')}>
                    <img src={image.coinbase} alt='coinbase' className='ndv__img' />
                    <h3 className='ml-6 text-lg font-bold'>Coinbase</h3>
                </div>
                <div className='ndv__wallet-item' onClick={connectBinace}>
                    <img src={image.binance} alt='binance' className='ndv__img' />
                    <h3 className='ml-6 text-lg font-bold'>Binace</h3>
                </div>
                <div className='ndv__wallet-item' onClick={handleWalletConnect}>
                    <img src={image.wallet} alt='wallet' className='ndv__img' />
                    <h3 className='ml-6 text-lg font-bold'>WalletConnect</h3>
                </div>
            </div>
        </div>
    )
}

