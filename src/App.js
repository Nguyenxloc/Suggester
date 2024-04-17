import SideBar from "component/SideBar";
import Calculator from "pages/Calculator";
import WalletPage from "pages/WalletPage";
import WelcomeTab from "pages/WelcomeTab";
import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex gap-5" style={{ backgroundColor: "#f0f4fc" }}>
          <SideBar />
          <Routes>
            <Route path="/crypto-checker" element={<WelcomeTab />}></Route>
            <Route path="/crypto-checker/calculator" element={<Calculator/>}/>
            <Route path="/crypto-checker/wallet" element={<WelcomeTab/>}/>
            <Route path="/crypto-checker/wallet/:chainID/:id" element={<WalletPage/>}/>
          </Routes>
        </div>
      </div>
    );
  }
}
