import { findByDisplayValue } from "@testing-library/react";
import React, { useEffect, useState } from "react";
export default function ListDappUI() {
    const [data, setData] = useState([]);
    async function getData() {
        const res = await fetch("https://static.holdstation.com/wallet-configs/listDapp.json");
        const data = await res.json();
        setData(data);
    }
    
    useEffect(() => {
        if (data.length == 0) {
            getData();
        }
    }, [data]);
    const obj = data[0];
    console.log("new data: ", obj); 
    return (
        <div>
            <p>Dapp list</p>
        </div>
    );
}