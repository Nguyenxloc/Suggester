import React from "react";

export default function TokenomicsTbl() {
    return (
        <div className="flex">
        <div>
            <h2 className="text-center text-[80px]">Tokenomics</h2>
            <table className="table-fixed">
                <thead>
                    <tr className="text-gray11 border-b border-gray12">
                        <th className="text-[16px] py-[12px] px-[56px] font-bold text-start">Allowcation</th>
                        <th className="text-[16px] py-[12px] px-[56px] font-bold text-start">Percentage</th>
                        <th className="text-[16px] py-[12px] px-[56px] font-bold text-start">TGE</th>
                        <th className="text-[16px] py-[12px] px-[56px] font-bold text-start">Vesting Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Public Sale</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">20%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">100%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Immediate</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Team</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">5%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">0%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">6-month cliff, then 12-month linear vesting</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Airdrop</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">10%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">10%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">2 months - split into multiple tranches, align with the major ecosystem airdrops</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Community Reserve</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">20%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">0%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">6-month linear vesting</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Private Round</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">25%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">33%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Remaining vests linearly over 6 months</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Seed Round</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">15%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">0%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Cliff 2 months, then 6-month linear vesting</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Liquidity</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">5%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">100%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Locked for 2 years</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">Total</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold text-start">100%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    );
}