import React from "react";

export default function Accessible() {
    const url1 = "https://holdstation.com/_next/image?url=%2Ftrade%2Fimage-chart.png&w=3840&q=75";
    const url2 = "https://holdstation.com/_next/image?url=%2Ftrade%2FtradingNew2x4.png&w=3840&q=75";
    return (
        <div className="bg-black6 w-[1500px]">
            <h2 className="text-center text-[72px] text-white">
                Accessible on
                <span className="text-purple"> Mobile & Web</span>
            </h2>
            <div className ="bg-black7 flex w-[1500px] p-[24px] rounded-3xl">
              <img src={url1} className="w-[950px] h-[700px]" alt="" />  
              <img src={url2} className="w-[550px] h-[700px] ms-10" alt=""/>  
            </div>
        </div>
    )
}