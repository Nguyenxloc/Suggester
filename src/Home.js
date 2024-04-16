import React, { Component } from 'react';
import './App.css';
import SideBar from "./component/SideBar";
import ProfileTab from "./pages/WalletPage";
import WelcomeTab from "./pages/WelcomeTab";
import {ColorRing} from "react-loader-spinner";
import { Sidebar } from 'react-pro-sidebar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
class Home extends Component {
    emptyItem  = {
        id: '',
        amount: '',
    };

    setPage(event){
        console.log("number page = "+ event);
        this.setState({pageNum:event});
    }

    setWallet(event){
        this.setState({wallet:event});
    }

    profileData(event){
        this.setState({profileData:event})
        console.log("data bound back: "+ event);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log("name handlechange:" + name);
        console.log("value handlechange:" + value);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
        await fetch('/chucVu/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
    }

    constructor(props) {
        super(props);
        this.state = {profileData: [], item: this.emptyItem, pageNum:1,wallet:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setPage= this.setPage.bind(this);
        this.setWallet= this.setWallet.bind(this);
        this.profileData= this.profileData.bind(this);
    }

    async componentDidMount() {
        // Set up a timeout to update the state after 3000 milliseconds (3 seconds)
    }
    componentWillUnmount() {
        // Clear the timeout if the component is unmounted before the timeout
    }
    render() {
        const {profileData} = this.state;
        console.log("home data :"+profileData);
        const {loader} = this.state;
        return (
        <div className="d-flex flex-row mb-3" style={{backgroundColor:"#f0f4fc"}}>
            <SideBar onClickFunction={this.setPage}/>
            <div>
                {(() => {
                    if (this.state.pageNum===1) {
                            if(this.state.wallet===false){
                                return (
                                <WelcomeTab onCLickFucntion={this.setWallet} setPage={this.setPage} getData={this.profileData}/>
                                )
                            }
                            else if(this.state.wallet===true){
                                return (
                                     <ProfileTab setWallet={this.setWallet} setPage={this.setPage} data = {this.state.profileData} />
                                )
                            }
                    } else if (this.state.pageNum===2) {
                        return (
                            <div>#1Comming soon.....</div>
                        )
                    } else if (this.state.pageNum===3) {
                        return (
                            <ColorRing/>
                        )
                    }else if (this.state.pageNum===4) {
                        return (
                            <div>#3Comming soon.....</div>
                        )
                    }
                    else if (this.state.pageNum===6) {
                        return (
                            <ColorRing/>
                        )
                    }
                    else {
                        return (
                            <div>#4Comming soon</div>
                        )
                    }
                })()}
            </div>
        </div>
        );
    }
}
export default Home;