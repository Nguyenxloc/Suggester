import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App324() {
    const [isLoading, setIsLoading] = useState(Boolean);
    const [data, setData] = useState([]);
    const [wssPriceUrl, setWssPriceUrl] = useState("-");
    const [wssTrading, setWssTrading] = useState("-");
    const [refBaseUrl, setRefBaseUrl] = useState("-");
    const [maxPosDai, setMaxPosDai] = useState("-");
    const [minimumGasPaymaster, setMinimumGasPaymaster] = useState("-");
    const [maximumGasPaymaster, setMaximumGasPaymaster] = useState("-");
    const [maxGainP, setMaxGainP] = useState("-");
    const [paymaster, setPaymaster] = useState(false);
    const [maxTradesPerPair, setMaxTradesPerPair] = useState("-");
    const [maxPendingMarketOrders, setMaxPendingMarketOrders] = useState("-");
    const [isDefiScan, setIsDefiScan] = useState(false);
    const [liquidPercent, setLiquidPercent] = useState("-");
    const [percentGas, setPercentGas] = useState("-");
    const [isGasPondRef, setIsGasPondRef] = useState(false);
    const [maxGasLimitDex, setMaxGasLimitDex] = useState("-");
    const [isFullListTokenSpending, setIsFullListTokenSpending] = useState(false);
    const [availableListSpending, setAvailableListSpending] = useState([]);
    const [contractList, setContractList] = useState([]);
    //chain info
    const [chainId, setChainId] = useState("-");
    const [chainIdHex, setChainIdHex] = useState("-");
    const [chainName, setChainName] = useState("-");
    const [nativeCurrency, setNativeCurrency] = useState([]);
    const [nativeName, setNativeName] = useState("-");
    const [nativeSymbol, setNativeSymbol] = useState("-");
    const [nativeDecimals, setNavtiveDecimals] = useState("-");
    const [configName, setConfigName] = useState("-");
    const [rpcUrls, setRpcUrls] = useState([]);
    const [blockExplorerUrls, setBlockExplorerUrls] = useState("-");
    const [defaultSigningGasLimit, setdefaultSigningGasLimit] = useState("-");
    const [pairInfo, setPairInfo] = useState([]);
    const navigate = useNavigate();
    async function getData() {
        const res = await fetch("https://static.holdstation.com/wallet-configs/chains/v6/324.json");
        const data = await res.json();
        setData(data);
        setWssPriceUrl(JSON.stringify(data.wssPriceUrl));
        setWssTrading(JSON.stringify(data.wssTrading));
        setRefBaseUrl(JSON.stringify(data.refBaseUrl));
        setMaxPosDai(JSON.stringify(data.maxPosDai));
        setMinimumGasPaymaster(JSON.stringify(data.minimumGasPaymaster));
        setMaximumGasPaymaster(JSON.stringify(data.minimumGasPaymaster));
        setMaxGainP(JSON.stringify(data.maxGainP));
        setPaymaster(data.paymaster);
        setMaxTradesPerPair(JSON.stringify(data.maxTradesPerPair));
        setMaxPendingMarketOrders(JSON.stringify(data.maxPendingMarketOrders));
        setIsDefiScan(data.IsDefiScan);
        setLiquidPercent(data.liquidPercent);
        setPercentGas(JSON.stringify(data.percentGas));
        setMaxGasLimitDex(JSON.stringify(data.maxGasLimitDex));
        setIsGasPondRef(data.isGasPondRef);
        setIsFullListTokenSpending(data.isFullListTokenSpending);
        setAvailableListSpending(data.availableListSpending);
        setContractList(Object.entries(data.contracts));
        setPairInfo(data.pairsInfo);
        //set chainInfo
        setChainId(data.chainInfo.chainId);
        setChainIdHex(data.chainInfo.chainIdHex);
        setChainName(data.chainInfo.chainName);
        setNativeName(data.chainInfo.nativeCurrency.name);
        setNativeSymbol(data.chainInfo.nativeCurrency.symbol);
        setNavtiveDecimals(data.chainInfo.nativeCurrency.decimals);
        setConfigName(data.chainInfo.configName);
        setRpcUrls(data.chainInfo.rpcUrls);
        setBlockExplorerUrls(data.chainInfo.blockExplorerUrls);
        setdefaultSigningGasLimit(data.chainInfo.defaultSigningGasLimit);
    }
    getData();
    useEffect(
        () => {
            if (data.length == 0) {
                setIsLoading(true);
                getData();
            }
        }
        , [data]);
    const handleChangePath = (path) => {
        navigate(`${path}`);
    }

    if (isLoading) {
        return (
            <div>
                <div className="flex flex-nowrap">
                    <div>
                        <p className="text-start">App 324</p>
                        <p className="text-start">wssPriceUrl: {wssPriceUrl}</p>
                        <p className="text-start">refBaseUrl: {refBaseUrl}</p>
                        <p className="text-start">maxPosDai: {maxPosDai}</p>
                        <p className="text-start">minimumGasPaymaster: {minimumGasPaymaster}</p>
                        <p className="text-start">maximumGasPaymaster: {maximumGasPaymaster}</p>
                        <p className="text-start">maxGainP:{maxGainP} </p>
                        <p className="text-start">paymaster: {paymaster ? "true" : "false"}</p>
                        <p className="text-start">maxTradesPerPair: {maxTradesPerPair}</p>
                        <p className="text-start">maxPendingMarketOrders: {maxPendingMarketOrders} </p>
                        <p className="text-start">isDefiScan: {isDefiScan ? "true" : "false"} </p>
                        <p className="text-start">liquidPercent:{liquidPercent}</p>
                        <p className="text-start">percentGas:{percentGas} </p>
                        <p className="text-start">maxGasLimitDex:{maxGasLimitDex}</p>
                    </div>
                    <button onClick={()=>{handleChangePath("/configuration/app-324-plaintext")}} ><a className="ms-20">Plain text</a></button>
                </div>


                <div className="flex flex-nowrap">
                    <table>
                        <h1><strong> Available list spending</strong></h1>
                        <tr>
                            <th className="border border-slate-600">Index</th>
                            <th className="border border-slate-600">addressID</th>
                        </tr>
                        {
                            availableListSpending.map(
                                (item, index) => {
                                    return (
                                        <tr>
                                            <td className="border border-slate-600">{index}</td>
                                            <td className="border border-slate-600">{item}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </table>

                </div>

                <p>IsFullListTokenSpending: {isFullListTokenSpending ? "true" : "false"}</p>
                <table>
                    <h1><strong>ChainID</strong></h1>
                    <tr>
                        <th className="border border-slate-600">Index</th>
                        <th className="border border-slate-600">ChainId</th>
                        <th className="border border-slate-600">ChainIdHex</th>
                        <th className="border border-slate-600">ChainName</th>
                        <th className="border border-slate-600">native currency</th>
                        <th className="border border-slate-600">configName</th>
                        <th className="border border-slate-600">rpcUrls</th>
                        <th className="border border-slate-600">blockExplorerUrls</th>
                        <th className="border border-slate-600">defaultSigningGasLimit</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">#</td>
                        <td className="border border-slate-600">{chainId}</td>
                        <td className="border border-slate-600">{chainIdHex}</td>
                        <td className="border border-slate-600">{chainName}</td>
                        <td className="border border-slate-600">{nativeName}-{nativeSymbol}-{nativeDecimals}</td>
                        <td className="border border-slate-600">{configName}</td>
                        <td className="border border-slate-600">{rpcUrls[0]}</td>
                        <td className="border border-slate-600">{blockExplorerUrls}</td>
                        <td className="border border-slate-600">{defaultSigningGasLimit}</td>
                    </tr>
                </table>
                <table>
                    <h1><strong>Contracts</strong></h1>
                    <tr>
                        <th className="border border-slate-600">Name</th>
                        <th className="border border-slate-600">addressID</th>
                    </tr>
                    {
                        contractList.map(
                            (item, index) => {
                                return (
                                    <tr>
                                        <td className="border border-slate-600">{contractList[index][0]}</td>
                                        <td className="border border-slate-600">{contractList[index][1]}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </table>
                <table>
                    <h1><strong>Pair Infor</strong></h1>
                    <tr>
                        <th className="border border-slate-600">Index</th>
                        <th className="border border-slate-600">Name</th>
                        <th className="border border-slate-600">Symbol</th>
                        <th className="border border-slate-600">Decimals</th>
                        <th className="border border-slate-600">imagesUrl</th>
                        <th className="border border-slate-600">pairIndex</th>
                        <th className="border border-slate-600">index price</th>
                        <th className="border border-slate-600">list date</th>
                        <th className="border border-slate-600">deciamals to show</th>
                        <th className="border border-slate-600">group</th>
                        <th className="border border-slate-600">charName</th>
                        <th className="border border-slate-600">group name</th>
                        <th className="border border-slate-600">max open interest</th>
                    </tr>
                    {
                        pairInfo.map(
                            (item, index) => {
                                return (
                                    <tr>
                                        <td className="border border-slate-600">{index}</td>
                                        <td className="border border-slate-600">{item.name}</td>
                                        <td className="border border-slate-600">{item.symbol}</td>
                                        <td className="border border-slate-600">{item.decimals}</td>
                                        <td className="border border-slate-600"><img className="w-10" src={item.imageUrl} alt="" /> </td>
                                        <td className="border border-slate-600">{item.pairIndex}</td>
                                        <td className="border border-slate-600">{item.indexPrice}</td>
                                        <td className="border border-slate-600">{item.listedDate}</td>
                                        <td className="border border-slate-600">{item.decimalsToShow}</td>
                                        <td className="border border-slate-600">{item.group}</td>
                                        <td className="border border-slate-600">{item.chartName}</td>
                                        <td className="border border-slate-600">{item.groupName}</td>
                                        <td className="border border-slate-600">{item.maxOpenInterest}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </table>
            </div>
        )
    }

}