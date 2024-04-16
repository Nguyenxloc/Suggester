import React from "react";

export default function PopupBanner(){
    return( 
       <div className="flex w-[345px] h-[128px] p-[4px] rounded-3xl bg-white">
            <video className="w-[156px] h-[120px] text-white rounded-3xl object-cover" autoPlay muted loop>
                <source src="https://autoair.xyz/video/banner.mp4" type="video/mp4" />
            </video>
            <div className="w-[149px] h-[120px] ms-[16px]">
                <div className="flex mt-6">
                    <img className="w-[18px] h-[18px] mt-[2px]" src="https://autoair.xyz/_next/image?url=%2Ficon%2Faai-token.png&w=96&q=75" alt="" />
                    <p className="text-l font-bold break-normal uppercase" >AAI is now live</p>
                </div>
                <div className="bg-black w-[95px] h-[40px] rounded-full ms-4 p-2">
                    <p className="text-white text-sm font-medium text-center">Explore</p>
                </div>
            </div>
       </div> 
    ); 
}