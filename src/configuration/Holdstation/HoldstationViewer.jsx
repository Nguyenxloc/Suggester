import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";

export default function HoldStationViewer() {
    const [data, setData] = useState([]);
    const url = "";
    async function getData() {
        const res = await fetch("");
        const data = await res.json();
    }
    useEffect(() => {
        if (data.length == 0) {
            console.log("do fetch: ", data);
        }
    })
    return (
        <div>
            <h1>holdstation.com</h1>
            <Navbar />
        </div>
    )
}