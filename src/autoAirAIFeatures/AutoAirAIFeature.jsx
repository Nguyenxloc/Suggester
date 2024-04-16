import React from "react";

export default function AutoAirAIFeature() {
  return (
    <div className="ms-[150px]">
      <div className="flex flex-wrap gap-[40px] text-start">
        <p className="text-[80px] w-3/12">AutoAir AI Features</p>
        <div className="w-7/12">
          <p className="text-[25px] leading-[28px] font-medium text-gray9 mt-[15px]">
            AutoAir AI streamlines airdrop participation, eliminating
            complexity. We scan on-chain transactions for high success rate
            wallets, offering an easy solution for users, regardless of
            experience level.
          </p>
          <h3 className="text-[32px] font-medium">Our key features</h3>
        </div>
      </div>
      <div className="flex mt-[100px] gap-[43px]">
        <div className="w-3/12 h-fit">
          <p className="font-bold text-[20px] text-start">01</p>
          <hr />
          <h3 className="text-[24px] text-start">Automated Airdrop Farming</h3>
          <p className="text-[20px] font-medium text-gray9 text-start">
            Use advanced AI to monitor on-chain transactions, detecting patterns
            signaling upcoming airdrops.
          </p>
        </div>
        <div className="w-3/12 h-fit">
          <p className="font-bold text-[20px] text-start">02</p>
          <hr />
          <h3 className="text-[24px] text-start">Data-Driven Insights</h3>
          <p className="text-[20px] font-medium text-gray9 text-start">
            Analyze past airdrops for better predictions. AutoAir AI offers
            recommendations, improving users' chances of airdrops.
          </p>
        </div>
        <div className="w-3/12 h-fit">
          <p className="font-bold text-[20px] text-start">03</p>
          <hr />
          <h3 className="text-[24px] text-start">User-Friendly Interface</h3>
          <p className="text-[20px] font-medium text-gray9 text-start">
            Streamline airdrop hunting with our intuitive platform, accessible
            via AutoAir AI Terminal and Telegram Bots.
          </p>
        </div>
      </div>
    </div>
  );
}
