import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AppConfig() {
    //object mng
    const [data, setData] = useState([]);
    console.log("appconfig: ", data);
    //airdrop
    const [timeExpiredAirdrop, setTimeEx] = useState("-");
    const [timeStartAirdrop, setTimeStart] = useState('-');
    //contract
    const [gasPondIdo, setGasPondIdo] = useState("-");
    const [chest, setChest] = useState("-");
    //Wallet conect aa allow domain
    const [walletConnect, setWalletConnect] = useState([]);
    //contentCodePush
    const [contentCodePush, setcontentCodePush] = useState("-");
    //ido
    const [distributingTime, setdistributingTime] = useState("-");
    const [completedTime, setcompletedTime] = useState("-");
    const [isBanner, setisBanner] = useState(Boolean);
    //contract white list 
    const [contractWhiteList, setcontractWhiteList] = useState([]);
    //featture flag
    const [convertUgold, setconvertUgold] = useState(false);
    const [launchPad, setLaunchPad] = useState(false);
    const [bridge, setBridge] = useState(false);
    const [socialLogin, setSocialLogin] = useState(false);
    const [airdrop, setAirdrop] = useState(false);
    const [kyberSwapEnable, setKyberSwapEnable] = useState(false);
    const [buyHold, setBuyHold] = useState(false);
    const [dailyQuest, setDailyQuest] = useState(false);
    const [portfolio, setPortfolio] = useState(false);
    const [zkWaveSummary, setZkWaveSummary] = useState(false);
    const [balanceManta, setBalanceManta] = useState(false);
    const [resetPin, setResetPin] = useState(false);
    const [notificationChest, setNotificationChest] = useState(false);
    const navigate = useNavigate();
    //sliderImages
    const [sliderImages, setsliderImages] = useState([]);
    async function getData() {
        const res = await fetch("https://static.holdstation.com/wallet-configs/AppConfig.json");
        const data = await res.json();
        setData(data);
        //set airdrop state
        setTimeStart(JSON.stringify(data.airdrop.timeStartAirdrop))
        setTimeEx(JSON.stringify(data.airdrop.timeExpiredAirdrop));
        //set wallet connect aa allow domain
        setWalletConnect(data.walletConnectAaAllowDomain);
        // set content push code
        setcontentCodePush(JSON.stringify(data.contentCodePush));
        // set ido
        setdistributingTime(JSON.stringify(data.ido.distributingTime));
        setcompletedTime(JSON.stringify(data.ido.completedTime));
        setisBanner(data.ido.isBanner);
        setcontractWhiteList(data.contractWhiteList);
        //set featureflag
        setconvertUgold(data.featureFlag.convertUgold);
        console.log(data.featureFlag.convertUgold);
        setLaunchPad(data.featureFlag.launchPad);
        setBridge(data.featureFlag.bridge);
        setSocialLogin(data.featureFlag.socialLogin);
        setAirdrop(data.featureFlag.airdrop);
        setKyberSwapEnable(data.featureFlag.kyberSwapEnable);
        setBuyHold(data.featureFlag.buyHold);
        setDailyQuest(data.featureFlag.dailyQuest);
        setPortfolio(data.featureFlag.portfolio);
        setZkWaveSummary(data.featureFlag.zkWaveSummary);
        setBalanceManta(data.featureFlag.balanceManta);
        setResetPin(data.featureFlag.resetPin);
        setNotificationChest(data.featureFlag.notificationChest);
        setsliderImages(data.featureFlag.sliderImages);
        //set sliderimages
        setsliderImages(data.sliderImages);
    }

    useEffect(() => {
        if (data.length == 0) {
            getData();
        }
    }, [data]);
    const handleChangePath = (path) => {
        navigate(`${path}`);
    }
    return (
        <div>
            <h1><strong>https://static.holdstation.com/wallet-configs/AppConfig.json</strong></h1>
            <div className="flex flex-nowrap">
                <table>
                <h1 className="text-start mt-3"><strong>Wallet connect Aa Allow Domain</strong></h1>
                    <tr>
                        <th className="border border-slate-600">Index</th>
                        <th className="border border-slate-600">Http</th>
                    </tr>
                    {walletConnect.map((item, index) => {
                        return (
                            <tr>
                                <td className="border border-slate-600">{index + 1}</td>
                                <td className="border border-slate-600">{item}</td>
                            </tr>
                        )
                    })}
                </table>
                <button onClick={()=>{handleChangePath("/configuration/app-config-plaintext")}}> <a className="ms-10">Plain text</a> </button>
            </div>

            <div>
                <h1 className="text-start mt-3"><strong>Contracts</strong></h1>
                <table className="border-collapse border border-slate-500">
                    <tr>
                        <th className="border border-slate-600">Chain ID</th>
                        <th className="border border-slate-600">GasPondIdo</th>
                        <th className="border border-slate-600">Chest</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">280</td>
                        <td className="border border-slate-700">{timeExpiredAirdrop}</td>
                        <td className="border border-slate-700">{timeExpiredAirdrop}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">324</td>
                        <td className="border border-slate-700">{timeExpiredAirdrop}</td>
                        <td className="border border-slate-700">{timeExpiredAirdrop}</td>
                    </tr>
                </table>
            </div>


            <div>
                <h1 className="text-start mt-3"><strong>Content code push</strong></h1>
                <table className="border-collapse border border-slate-500">
                    <tr>
                        <th className="border border-slate-600" >Index</th>
                        <th className="border border-slate-600">Content</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">#</td>
                        <td className="border border-slate-600">{contentCodePush}</td>
                    </tr>
                </table>
            </div>

            <div>
            <h1 className="text-start mt-3"><strong>Airdrop</strong></h1>
                <table className="border-collapse border border-slate-500">
                    <tr>
                        <th className="border border-slate-600">Time Start Airdrop</th>
                        <th className="border border-slate-600">Time Expired Airdrop</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">{timeStartAirdrop}</td>
                        <td className="border border-slate-600">{timeExpiredAirdrop}</td>
                    </tr>
                </table>
            </div>


            <div>
                <h1 className="text-start mt-3"><strong>Ido</strong></h1>
                <table className="border-collapse border border-slate-500">
                    <tr>
                        <th className="border border-slate-600" >distributingTime</th>
                        <th className="border border-slate-600">completedTime</th>
                        <th className="border border-slate-600">isBanner</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">{distributingTime}</td>
                        <td className="border border-slate-600">{completedTime}</td>
                        <td className="border border-slate-600">{isBanner ? "true" : "false"}</td>
                    </tr>
                </table>
            </div>

            <div>
                <h1 className="text-start mt-3"><strong>ContractWhiteList</strong></h1>
                <table className="border-collapse border border-slate-500">
                    <tr>
                        <th className="border border-slate-600" >Index</th>
                        <th className="border border-slate-600">AdressID</th>
                    </tr>
                    {contractWhiteList.map((item, index) => {
                        return (
                            <tr>
                                <td className="border border-slate-600">#</td>
                                <td className="border border-slate-600">{item}</td>
                            </tr>
                        )
                    })}

                </table>
            </div>

            <div>
                <h1 className="text-start mt-3"><strong>Feature flag</strong></h1>
                <table className="border-collapse border border-slate-500">
                    <tr>
                        <th className="border border-slate-600" >convertUgold</th>
                        <th className="border border-slate-600">launchPad</th>
                        <th className="border border-slate-600">bridge</th>
                        <th className="border border-slate-600">socialLogin</th>
                        <th className="border border-slate-600">airdrop</th>
                        <th className="border border-slate-600">kyberSwapEnable</th>
                    </tr>

                    <tr>
                        <td className="border border-slate-600">{convertUgold ? "True" : "False"}</td>
                        <td className="border border-slate-600">{launchPad ? "True" : "False"}</td>
                        <td className="border border-slate-600">{bridge ? "True" : "False"}</td>
                        <td className="border border-slate-600">{socialLogin ? "True" : "False"}</td>
                        <td className="border border-slate-600">{airdrop ? "True" : "False"}</td>
                        <td className="border border-slate-600">{kyberSwapEnable ? "True" : "False"}</td>
                    </tr>

                    <tr>
                        <th className="border border-slate-600">buyHold</th>
                        <th className="border border-slate-600">dailyQuest</th>
                        <th className="border border-slate-600">portfolio</th>
                        <th className="border border-slate-600">zkWaveSummary</th>
                        <th className="border border-slate-600">balanceManta</th>
                        <th className="border border-slate-600">resetPin</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">{buyHold ? "True" : "False"}</td>
                        <td className="border border-slate-600">{dailyQuest ? "True" : "False"}</td>
                        <td className="border border-slate-600">{portfolio ? "True" : "False"}</td>
                        <td className="border border-slate-600">{zkWaveSummary ? "True" : "False"}</td>
                        <td className="border border-slate-600">{balanceManta ? "True" : "False"}</td>
                        <td className="border border-slate-600">{resetPin ? "True" : "False"}</td>

                    </tr>
                    <tr>
                        <th className="border border-slate-600">notificationChest</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">{notificationChest ? "True" : "False"}</td>
                    </tr>
                </table>
            </div>

            <div>
                <h1 className="text-start mt-3"><strong>Slider images</strong></h1>
                <table className="border-collapse border border-slate-500">
                    <tr>
                        <th className="border border-slate-600" >Index</th>
                        <th className="border border-slate-600" >imageUrl</th>
                        <th className="border border-slate-600">inAppBrowserUrl</th>
                        <th className="border border-slate-600">index</th>
                        <th className="border border-slate-600">isInApp</th>
                        <th className="border border-slate-600">isDisplay</th>
                        <th className="border border-slate-600">id</th>
                        <th className="border border-slate-600">navigateTo</th>
                    </tr>
                    {sliderImages.map((item, index) => {
                        return (
                            <tr>
                                <td className="border border-slate-600">{index + 1}</td>
                                <td className="border border-slate-600"><img src={item.imageUrl} alt=""/></td>
                                <td className="border border-slate-600">{item.inAppBrowserUrl}</td>
                                <td className="border border-slate-600">{index + 1}</td>
                                <td className="border border-slate-600">{item.isInApp?"true":"false"}</td>
                                <td className="border border-slate-600">{item.isDisplay?"true":"false"}</td>
                                <td className="border border-slate-600">{item.id}</td>
                                <td className="border border-slate-600">{item.navigateTo}</td>
                            </tr>
                        );
                    }
                    )
                    }
                </table>
            </div>

        </div>

    )
}