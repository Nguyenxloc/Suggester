import React, { useState } from "react";

export default function DappCard(dataPrefix) {
    console.log("dataPrefix: ", dataPrefix);
    return (
        <div className="bg-black6 w-fit">
            <table className="text-white">
                <h1><strong>Dapp list</strong></h1>
                <tr>
                    <th className="border border-slate-600">Images Url</th>
                    <th className="border border-slate-600">Name</th>
                    <th className="border border-slate-600">Des</th>
                    <th className="border border-slate-600">Host name</th>
                    <th className="border border-slate-600">Url</th>
                    <th className="border border-slate-600">ChainIds</th>
                </tr>
                {
                    <tr>
                        <td className="border border-slate-600"><img className="w-10" src={dataPrefix.dataPrefix.logoUrl} alt="" /></td>
                        <td className="border border-slate-600">{dataPrefix.dataPrefix.name}</td>
                        <td className="border border-slate-600">{dataPrefix.dataPrefix.name}</td>
                        <td className="border border-slate-600">{dataPrefix.dataPrefix.name}</td>
                    </tr>
                }
            </table>
        </div>
    )
}