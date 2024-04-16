import React from "react";
import { useEffect, useState } from "react";

export default function App324plainText() {
    const [data, setData] = useState([]);
    const [dataString, setDataString] = useState("");
    async function getData() {
        const res = await fetch("https://static.holdstation.com/wallet-configs/listDapp.json");
        const data = await res.json();
        setData(data);
        const stringData = JSON.stringify(data,null,4);
        setDataString(stringData);
    }
    useEffect(
        () => {
            if (data.length == 0) {
                getData();
            }
        }
    )
    return (
        <pre className="w-fit flex">
            <p className="text-start">{dataString}</p>
            <div> 
            <button onClick={() => { navigator.clipboard.writeText(dataString) }} className="">
                <p className="text-xl">Copy</p>
            </button>
            </div>
        </pre>
    );
}