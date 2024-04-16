import React, { Component } from 'react';
class MainView extends Component {
    render() {
        return (
        <div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" style={{borderRadius:50}} type="search" placeholder="Search address/memo/Web3ID" aria-label="Search"/>
                <button type="button" className="btn ms-3 mt-1" style={{borderRadius:20,width:300,height:30,fontSize:10,textAlign:"center",lineHeight:"8px",color:"white",backgroundColor:"#ff7256"}}><strong>Login in via web3wallet</strong></button>
            </form>
        </div>
        );
    }
}
export default MainView;