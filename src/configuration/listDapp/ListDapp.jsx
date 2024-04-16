import { findByDisplayValue } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListDapp() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
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
    const handleChangePath = (path) => {
        navigate(`${path}`);
      }
    return (
        <div>
            <div className="flex flex-nowrap">
            <h1><strong>Contracts</strong></h1>  
             <button onClick={()=>{handleChangePath("/configuration/list-dapp-plaintext")}} ><a className="ms-20">Plain text</a></button>
            </div>
            <table className="border-collapse border border-slate-500">
                <tr>
                    <th className="border border-slate-600">Index</th>
                    <th className="border border-slate-600">Chain ID</th>
                    <th className="border border-slate-600">Des</th>
                    <th className="border border-slate-600">Host name</th>
                    <th className="border border-slate-600">Logo url</th>
                    <th className="border border-slate-600">Name</th>
                    <th className="border border-slate-600">Url</th>
                </tr>
                {
                    data.map((item, index) => {
                        return (
                            <tr>
                                <td className="border border-slate-700">{index}</td>
                                <td className="border border-slate-700">{JSON.stringify(item.chainIds)}</td>
                                <td className="border border-slate-700">{item.des}</td>
                                <td className="border border-slate-700">{item.hostname}</td>
                                <td className="border border-slate-700"><img src={item.logoUrl} alt="" /></td>
                                <td className="border border-slate-700">{item.mame}</td>
                                <td className="border border-slate-700">{item.url}</td>
                            </tr>
                        );
                    }
                    )
                }
            </table>
        </div>

    );
}