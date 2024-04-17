import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function TokenomicsChart() {
  const data = [
    { name: "Public Sale", value: 200 },
    { name: "Team", value: 50 },
    { name: "Airdrop", value: 100 },
    { name: "Community Reserve", value: 200 },
    { name: "Private Round", value: 250 },
    { name: "Seed Round", value: 150 },
    { name: "Liquidity", value: 50 },
  ];
  const COLORS = [
    "#2793f7",
    "#42CA80",
    "#8D75ED",
    "#F7BD27",
    "#FF679E",
    "#000000",
    "#FF6B3D",
  ];
  return (
    <div className="flex">
      <div className="flex flex-wrap gap-[104px] md:justify-center lg:justify-start">
        <div
          className="w-[326px] h-[468px]"
        >
          <ResponsiveContainer width={700} height="100%">
          <PieChart width={326} height={468}>
            <Pie
              data={data}
              cx={155}
              cy={200}
              innerRadius={110}
              outerRadius={160}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          </ResponsiveContainer>
        </div>
        <div
          className="w-7/12 h-[475px] flex flex-col gap-[40px]"
        >
          <p className="text-[20px] font-medium leading-[28px] text-gray9 text-start">
            This table provides a clear overview of the token distribution,
            immediate availability at TGE, and the vesting schedule for each
            category of the
            <span className="text-black"> AutoAir AI</span>. This structure aims
            to balance the needs of early investors and team members with the
            project‘s long-term sustainability and success.
          </p>
          <div className="grid grid-rows-4 grid-flow-col gap-x-[88px] gap-y-[40px]">
            <div
              className="w-12/12 h-[49px] flex gap-[12px]"
            >
              <div className="w-[12px] h-[49px] bg-blue1 rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-wrap"
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Public Sale
                </p>
                <p className="font-bold">20%</p>
              </div>
            </div>
            <div
              className="w-12/12 h-[49px] flex gap-[12px]"
            >
              <div className="w-[12px] h-[49px] bg-[#8D75ED] rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-wrap"
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Airdrop
                </p>
                <p className="font-bold">10%</p>
              </div>
            </div>
            <div
              className="w-12/12 h-[49px] flex gap-[12px]"
            >
              <div className="w-[12px] h-[49px] bg-[#FF679E] rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-wrap"
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Private Round
                </p>
                <p className="font-bold">25%</p>
              </div>
            </div>
            <div
              className="w-12/12 h-[49px] flex gap-[12px]"
            >
              <div className="w-[12px] h-[49px] bg-blue1 rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-wrap"
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Liquidity
                </p>
                <p className="font-bold">5%</p>
              </div>
            </div>
             <div
              className="w-12/12 h-[49px] flex gap-[12px]"
            >
              <div className="w-[12px] h-[49px] bg-[#42CA80] rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-wrap"
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Team
                </p>
                <p className="font-bold">05%</p>
              </div>
            </div>
            <div
              className="w-12/12 h-[49px] flex gap-[12px]"
            >
              <div className="w-[12px] h-[49px] bg-[#F7BD27] rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-wrap"
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Community Reserve
                </p>
                <p className="font-bold">20%</p>
              </div>
            </div>
            <div
              className="w-12/12 h-[49px] flex gap-[12px]"
            >
              <div className="w-[12px] h-[49px] bg-black rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-wrap"
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Seed Round
                </p>
                <p className="font-bold">15%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
