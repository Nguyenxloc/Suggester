import React, { useEffect, useState } from "react";
import PairInfoCard from "./PairInfoCard";
export default function PairInfo() {
  const [data, setData] = useState([]);
  async function getData() {
    const res = await fetch("https://static.holdstation.com/wallet-configs/chains/v6/324.json");
    const data = await res.json();
    setData(data.pairsInfo);
  }
  useEffect(
    () => {
      if (data.length == 0) {
        getData();
      }
    }
  );
  return (
        <div className="bg-black6 w-[1500px]">
          <h2 className="text-center text-[72px] text-white">
            <span className="text-purple">Multiple </span>
            Trading Assets
          </h2>
          <div className="bg-black6 grid grid-cols-3 gap-2">
          {data.map((item,index) =>(
            <PairInfoCard dataPrefix={item}/>
          )
          )
          }
          </div>
        </div>
        
  );
}