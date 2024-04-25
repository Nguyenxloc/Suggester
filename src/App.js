import SideBar from "component/SideBar";
import Calculator from "pages/Calculator";
import GitFlow from "pages/GitFlow";
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
            <Route path="/suggester/" element={<GitFlow />}></Route>
            <Route path="/suggester/gitflow" element={<GitFlow/>}/>
            <Route path="/suggester/wallet" element={<WelcomeTab/>}/>
          </Routes>
        </div>
      </div>
    );
  }
}
