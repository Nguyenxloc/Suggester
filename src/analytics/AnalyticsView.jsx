import BannerView from "banner/BannerView";
import Footer from "footer/Footer";
import Navbar from "header/Navbar";
import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

export default function AnalyticsView() {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    },
  ]
  return (
    <div className="bg-[#f2f2f2] gap-[100px]">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="font-medium w-full text-center text-[80px] leading-[80px] py-[56px]">
        <p>AutoAir Stats</p>
      </div>
      <div className="flex justify-center mb-[56px]">
        <div
          className="w-7/12 text-[32px] font-medium text flex justify-center"
        >
          AutoAir is an airdrop farming Telegram bot that leverages AI to
          streamline the process. By analyzing historical data, it tailors
          strategies for users, enabling effortless participation with 1-click
          access.
        </div>
      </div>
      <div className="p-[40px] bg-white">
        <div className="flex flex-col gap-[16px]">
          <div className="flex text-[32px] font-medium">Overview</div>
          <div className="flex gap-[10px]">
            <div
              className="px-[20px] py-[10px] rounded-full"
            >
              Today
            </div>
            <div
              className="px-[20px] py-[10px] rounded-full"
            >
              Week
            </div>
            <div
              className="px-[20px] py-[10px] rounded-full"
            >
              Month
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white mt-[20px]">
        <div
          className="gap-[10px] h-[296px] w-4/12 py-[60px]"
        >
          <h2 className="text-start text-[24px]">Wallets Created</h2>
          <div className="flex gap-[20px]">
            <h2 className="text-[80px]">1770</h2>
            <h2>###chart</h2>
          </div>
        </div>
        <div
          className="gap-[10px] h-[296px] w-4/12 py-[60px]"
        >
          <h2 className="text-start text-[24px]">Wallets Created</h2>
          <div className="flex gap-[20px]">
            <h2 className="text-[80px]">1770</h2>
            <h2>###chart</h2>
          </div>
        </div>
        <div
          className="gap-[10px] h-[296px] w-4/12 py-[60px]"
        >
          <h2 className="text-start text-[24px]">Wallets Created</h2>
          <div className="flex gap-[20px]">
            <h2 className="text-[80px]">1770</h2>
            <h2>###chart</h2>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <h2 className="text-start text-2xl font-medium">Total Users Balance</h2>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="224"
            height="224"
            fill="none"
          >
            <path
              fill="#627EEA"
              d="M112 224c61.856 0 112-50.144 112-112S173.856 0 112 0 0 50.144 0 112s50.144 112 112 112Z"
            ></path>
            <g fill="#fff">
              <path
                fill-opacity="0.602"
                d="M115.486 28v62.09l52.479 23.45L115.486 28Z"
              ></path>
              <path d="M115.486 28 63 113.54l52.486-23.45V28Z"></path>
              <path
                fill-opacity="0.602"
                d="M115.486 153.776v42.189L168 123.312l-52.514 30.464Z"
              ></path>
              <path d="M115.486 195.965v-42.196L63 123.312l52.486 72.653Z"></path>
              <path
                fill-opacity="0.2"
                d="m115.486 144.011 52.479-30.471-52.479-23.436v53.907Z"
              ></path>
              <path
                fill-opacity="0.602"
                d="m63 113.54 52.486 30.471V90.104L63 113.54Z"
              ></path>
            </g>
          </svg>
          <p className="text-balance truncate text-[70px] md:text-[100px] lg:text-[140px] xl:text-[200px] 2xl:text-[254px] leading-[1]">
            75.43 ETH
          </p>
        </div>
        <div className="flex justify-end">
          <div className="flex flex-wrap gap-[10px]">
            <div className="flex flex-wrap">
              <div className="flex">
                <div className="flex flex-wrap gap-x-2">
                  <div className="w-[20px] h-[20px] bg-black rounded-[4px]"></div>
                  <p>zkSync</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-wrap gap-x-2">
                  <div className="w-[20px] h-[20px] bg-purple rounded-[4px]"></div>
                  <p>Ethereum</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-[500px] mt-10 md:mt-auto">
              <ul className="flex basis-1/3 w-full border border-solid border-black">
                <li
                  className="h-8 md:h-[64px]"
                  style={{ background: "rgb(0, 0, 0)", width: "94.3291%" }}
                ></li>
                <li
                  className="h-8 md:h-[64px]"
                  style={{
                    background: "rgb(135, 133, 255)",
                    width: "5.67093%",
                  }}
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
      <div className="px-[16px] py-[40px]">
      <h2 className="text-start text-[32px]">Analytics</h2>
      </div>
      <div className="flex flex-wrap gap-[500px]">
        <div className="w-2/12">
          <BarChart width={500} height={550} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="w-2/12">
          <BarChart width={500} height={550} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
          </BarChart>
        </div>          
      </div>
      </div>

      <Footer />
    </div>
  );
}
