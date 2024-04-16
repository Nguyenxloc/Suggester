import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function HsNetworkList() {
  const [data, setData] = useState([]);
  const navigate  = useNavigate();
  async function getData() {
    const res = await fetch("https://static.holdstation.com/wallet-configs/hsNetworkList.json");
    const data = await res.json();
    setData(data);
  }
  useEffect(
    () => {
      if (data.length == 0) {
        getData();
      }
    }
  )
  const handleChangePath = (path) => {
    navigate(`${path}`);
  }
  return (
    <div>
      <div className="flex flex-nowrap">
        <p>Hs network</p>
        <button onClick={()=>{handleChangePath("/configuration/hs-network-list-plaintext")}}><a className="ms-20">Plain text</a></button>
      </div>
      <table>
        <tr>
          <th className="border border-slate-600">Index</th>
          <th className="border border-slate-600">ChainId</th>
          <th className="border border-slate-600">nickname</th>
          <th className="border border-slate-600">rpcUrl</th>
          <th className="border border-slate-600">ticker</th>
          <th className="border border-slate-600">rpcPrefs</th>
          <th className="border border-slate-600">nativeCoinName</th>
          <th className="border border-slate-600">coinGeckoId</th>
          <th className="border border-slate-600">verified</th>
          <th className="border border-slate-600">thumbnail</th>
          <th className="border border-slate-600">apiKey</th>
          <th className="border border-slate-600">moralisType</th>
          <th className="border border-slate-600">simplehashType</th>
          <th className="border border-slate-600">image</th>
          <th className="border border-slate-600">decimals</th>
          <th className="border border-slate-600">tokenPriceQuery</th>
          <th className="border border-slate-600">viewDetail</th>
          <th className="border border-slate-600">categories</th>
        </tr>
        {
          data.map(
            (item, index) => {
              return (
                <tr>
                  <td className="border border-slate-600">{index}</td>
                  <td className="border border-slate-600">{item.chainId}</td>
                  <td className="border border-slate-600">{item.nickname}</td>
                  <td className="border border-slate-600">{item.rpcUrl}</td>
                  <td className="border border-slate-600">{item.ticker}</td>
                  <td className="border border-slate-600">{item.rpcPrefs.blockExplorerUrl} - {item.rpcPrefs.imageUrl}</td>
                  <td className="border border-slate-600">{item.nativeCoinName}</td>
                  <td className="border border-slate-600">{item.coinGeckoId}</td>
                  <td className="border border-slate-600">{item.verified ? "true" : "false"}</td>
                  <td className="border border-slate-600">{item.thumbnail}</td>
                  <td className="border border-slate-600">{item.apiKey}</td>
                  <td className="border border-slate-600">{item.moralisType}</td>
                  <td className="border border-slate-600">{item.simplehashType}</td>
                  <td className="border border-slate-600">{item.image}</td>
                  <td className="border border-slate-600">{item.decimals}</td>
                  <td className="border border-slate-600">{item.tokenPriceQuery}</td>
                  <td className="border border-slate-600">{item.viewDetail}</td>
                  <td className="border border-slate-600">{item.categories}</td>
                </tr>
              )
            }
          )
        }
      </table>
    </div>

  );
}