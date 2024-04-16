import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import EthereumAddress from 'ethereum-address';
import { useNavigate } from 'react-router-dom';
const WelcomeTab = () => {
    const [lstClone, setLstClone] = useState([]);
    const [address, setAddress] = useState('');
    const [chainid, setChainid] = useState('');
    const [err1, seterr1] = useState(0);
    const [err2, seterr2] = useState(0);
    const navigate = useNavigate();
    console.log("life cycle++");
    function processAddresses(inputString) {
        const addressesArray = inputString.split(' ');
        if (addressesArray.length !== 5) {
            seterr1(0);
        }
        const processedAddresses = addressesArray.map(address => address.trim());
        return processedAddresses;
    }

    const isValidEthAddress = (address) => {
        return EthereumAddress.isAddress(address);
    }

    const routeTo = (address, chainID) => {
        navigate(`/crypto-checker/wallet/${chainID}/${address.toLowerCase()}`);
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const arr = processAddresses(value);
        let count = 0;
        if(isValidEthAddress(arr[0])){
            count++;
        }
        if(isValidEthAddress(arr[1])){
            count++;
        }
        if(isValidEthAddress(arr[2])){
            count++;
        }
        if(isValidEthAddress(arr[3])){
            count++
        }
        if(isValidEthAddress(arr[4])){
            count++;
        }
        if(count===5){
            seterr1(1);
            setAddress(JSON.stringify(arr));
        }
    }

    const handleChangeSelect = (event) => {
        const value = event.target.value;
        if(value!==''){
            seterr2(1);
            setChainid(value);
            console.log("chainid:"+value);
        }
        console.log("err1: "+err1+"err2: "+err2);
        console.log("test value= " + value);
    }

    useEffect(() => {
        // Check if data exists before fetching
        if (err1 === 1&&err2===1) {
            routeTo(address,chainid);
        }
    }, [err1,err2]);

    return (
        <div className="" style={{ backgroundColor: "#fffcfc", width:"100%" }}>
            <div className="">
                <textarea className="form-control me-2" name="adrs"
                    onChange={handleChange} placeholder="Type 5 address with space beetween each of address..."
                    aria-label="Search" style={{height:250}} />
            </div>
            {(err1===0) ? <p style={{color:"red"}}>please enter valid address</p>:<p></p>}
            <div className="">
            <select className="form-select" name="chainID" onChange={handleChangeSelect} aria-label="Default select example"required>
                <option value="">Select chainID</option>
                <option value="chainid1">ChainID1</option>
                <option value="chainid324">ChainID324</option>
            </select>
            {(err2===0) ? <p style={{color:"red"}}>please select network</p>:<p></p>}
            </div>
        </div>
    );
}

export default WelcomeTab;
