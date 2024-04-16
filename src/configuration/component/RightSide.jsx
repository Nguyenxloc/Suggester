
import App324 from "configuration/324/App324";
import App324plainText from "configuration/324/App324plainText";
import HoldPaidAcross from "configuration/HoldPaidAcross/HoldPaidAcross";
import HoldstationViewer from "configuration/Holdstation/HoldstationViewer";
import Accessible from "configuration/accesible-mobile/Accesible";
import AppConfig from "configuration/appConfig/AppConfig";
import AppConfigPlainText from "configuration/appConfig/AppConfigPlainText";
import Env from "configuration/env/Env";
import EnvPlainText from "configuration/env/EnvPlainText";
import HsNetworkList from "configuration/hsNetworkList/HsNetworkList";
import HsNetworkListPlaintext from "configuration/hsNetworkList/HsNetworkListPlaintext";
import ListDapp from "configuration/listDapp/ListDapp";
import ListDappPlaintext from "configuration/listDapp/ListDappPlaintext";
import ListDappUI from "configuration/listDappUI/ListDappUI";
import PairInfo from "configuration/pair/PairInfo";
import React from "react";
import { Route, Routes } from "react-router-dom";
export default function RightSide() {
    return (
        <div className="w-7/12">
            <Routes>
                <Route path="/configuration/app-config" element={<AppConfig />}></Route>
                <Route path="/configuration/app-config-plaintext" element={<AppConfigPlainText />}></Route>
                <Route path="/configuration/app-324-plaintext" element={<App324plainText/>}></Route>
                <Route path="/configuration/env-plaintext" element={<EnvPlainText/>}></Route>
                <Route path="/configuration/hs-network-list-plaintext" element={<HsNetworkListPlaintext/>}></Route>
                <Route path="/configuration/app-324" element={<App324 />}></Route>
                <Route path="/configuration/env" element={<Env />}></Route>
                <Route path="/configuration/list-dapp" element={<ListDapp />}></Route>
                <Route path="/configuration/list-dapp-plaintext" element={<ListDappPlaintext />}></Route>
                <Route path="/configuration/hs-network-list" element={<HsNetworkList />}></Route>
                <Route path="/configuration/app-config-ui" element={<AppConfig />}></Route>
                <Route path="/configuration/app-324-ui" element={<App324 />}></Route>
                <Route path="/configuration/env-ui" element={<Env />}></Route>
                <Route path="/configuration/list-dapp-ui" element={<ListDappUI/>}></Route>
                <Route path="/configuration/hs-network-list-ui" element={<HsNetworkList />}></Route>
                <Route path="/configuration/pair-info" element={<PairInfo/>}></Route>
                <Route path="/configuration/accessible-mobile" element={<Accessible/>}></Route>
                <Route path="/configuration/hold-paid-across" element={<HoldPaidAcross/>}></Route>
                <Route path="/configuration/hold-station" element={<HoldstationViewer/>}></Route>
            </Routes>
        </div>
    )
}
