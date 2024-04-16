import React from "react";

export default function PairInfoCard(dataPrefix) {
    console.log("data prefix: ", dataPrefix.dataPrefix.chartName);

    return (
        <div className="h-65 bg-black7 rounded-lg p-[64px]">
            <img className="w-[52px] mb-3" src={dataPrefix.dataPrefix.imageUrl} alt="" />
            <p className="text-white text-start text-[56px]">{dataPrefix.dataPrefix.symbol}</p>
            <div className="flex gap-x-2">
            <span className="text-white text-start text-2xl">$67,221.4</span>
            <p className="flex items-center text-basis md:text-xl text-black bg-green rounded-full px-2 ms-8">
                +
                9.51
                %
            </p>
            </div>
            <p className="text-white text-start mt-10 text-xl">Total Volume</p>
            <p className="text-purple text-start text-[32px]">190.04M</p>
        </div>
    )
}