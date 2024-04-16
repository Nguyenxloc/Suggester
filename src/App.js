
import SideBar from "component/SideBar";
import WelcomeTab from "pages/WelcomeTab";
import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex gap-5" style={{backgroundColor:"#f0f4fc"}}>
              <SideBar/>
              <WelcomeTab/>
          </div>
      </div>
    );
  }
}
