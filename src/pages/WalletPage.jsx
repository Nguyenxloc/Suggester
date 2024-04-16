import React, { useState, useEffect } from 'react';
import BackButton from "../component/BackButton";
import { ethers } from "ethers";
import { Provider, types } from "zksync-ethers";
import EthereumAddress from 'ethereum-address';
import { useNavigate, useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
function WalletPage(props) {
    const emptyItem = {
        id: '',
        amount: '',
    };
    console.log("life cycle ++");
    const chainID = useParams().chainID;
    const id = useParams().id;
    const [lstCrypto, setCryptos] = useState([]);
    console.log("state: " + JSON.stringify(lstCrypto));
    const [item, setItem] = useState('');
    const navigate = useNavigate();
    let lstEth = null;
    let total = 0;

    const processedID = (listAddress) => {
        return JSON.parse(listAddress);
    }

    const arr = processedID(id);
    useEffect(() => {
        if (lstCrypto.length <= 4) {
            if(chainID==="chainid324")
            collectCrypto324(arr);
            if(chainID==="chainid1")
            collectCrypto(arr);
        }
    }, [id, lstCrypto]);

    const isValidEthAddress = (address) => {
        return EthereumAddress.isAddress(address);
    }

    if (lstCrypto !== undefined&&chainID==="chainid1") {
        lstEth = lstCrypto.map(crypto => {
            total += 2272 * crypto.amount;
            return <tr key={crypto.id}>
                <td >#</td>
                <td >{crypto.id}</td>
                <td >ETH</td>
                <td >$2,272</td>
                <td >{crypto.amount}</td>
                <td >$ {2272 * crypto.amount}</td>
            </tr>
        });
    }

    if (lstCrypto !== undefined&&chainID==="chainid324") {
        lstEth = lstCrypto.map(crypto => {
            total += 2272 * crypto.amount;
            return <tr key={crypto.id}>
                <td >#</td>
                <td >{crypto.id}</td>
                <td >ETH-zksync</td>
                <td >$2,272</td>
                <td >{crypto.amount}</td>
                <td >$ {2272 * crypto.amount}</td>
            </tr>
        });
    }

    function convertBigIntToString(obj) {
        if (typeof obj === 'bigint') {
            return obj.toString();
        } else if (typeof obj === 'object' && obj !== null) {
            for (let key in obj) {
                obj[key] = convertBigIntToString(obj[key]);
            }
        }
        return obj;
    }
    async function collectCrypto324(addresses) {
        try {
            // Create a provider for the zkSync network
            const provider = Provider.getDefaultProvider(types.Network.Mainnet);
            const updatedCryptos = [];
            // Iterate over each address in the array
            for (const address of addresses) {
                    const balance = await provider.getBalance(address);
                    let newItem = { id: address, amount: parseFloat(ethers.formatEther(balance)) };
                    // Add the new item to the updatedCryptos array
                    updatedCryptos.push(newItem);
            }
            setCryptos(updatedCryptos);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async function collectCrypto(addresses) {
        try {
            const provider = new ethers.JsonRpcProvider('https://eth.nodeconnect.org');
            const updatedCryptos = [];
            // Iterate over each address in the array
            for (const address of addresses) {
                // Fetch balance for the current address
                let balance = await provider.getBalance(address);
                // Create a new item with address and balance
                let newItem = { id: address, amount: parseFloat(ethers.formatEther(balance)) };
                // Add the new item to the updatedCryptos array
                updatedCryptos.push(newItem);
            }
            // Update the state with the updatedCryptos array
            setCryptos(updatedCryptos);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    function handleChange(event) {
        const value = event.target.value;
        setItem(value);
        if (isValidEthAddress(value)) {
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
    }

    async function remove(id) {
        // Implement removal logic if needed
    }

    return (
        <div className="row g-" style={{ backgroundColor: "#fffcfc" }}>
            <div className="col-md-4 mt-2">
                <BackButton url={"/crypto-checker/wallet"} />
            </div>
            <hr />
            <div className="col-md-12">
            </div>
            <div className="card">
                <h5 className="card-header"><i className="bi bi-wallet-fill" style={{ color: "#fe7192" }}></i> Wallet</h5>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Address</th>
                                <th scope="col">Token</th>
                                <th scope="col">Price</th>
                                <th scope="col">Amount</th>
                                <th scope="col">USD Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lstCrypto.length > 0 ? lstEth : <ColorRing />}
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ><strong>Total: ${total}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default WalletPage;
