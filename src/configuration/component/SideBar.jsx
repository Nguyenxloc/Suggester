import React, { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
    const navigate = useNavigate();
     
    const handleChangePath = (path) => {
        navigate(`/configuration/${path}`);
    }    
    const[selectionStt, setSelectionStt] = useState([]);
    const falseLst = [];
    const menuItem = ([{ link: "app-config", name: "App config"}, { link: "app-324", name: "324"}, { link: "env", name: "evn"},
    { link: "list-dapp", name: "List Dapp"}, { link: "hs-network-list", name: "hs-network-list"},
    ,{link:"pair-info",name: "Trading asset"},{link:"hold-station", name:"holdstation.com"},
    {link:"accessible-mobile",name:"Accessible on Mobile & web"},{link:"hold-paid-across", name:"Hold paid across"}]);
    const nunberMenuItem = menuItem.length; 
    if(falseLst.length == 0){
        for(let i = 0;i<nunberMenuItem;i++){
            falseLst.push(false);
        }
    }
    const clearSelection = ()=>{
          setSelectionStt(falseLst);
    }   
    const select = (index) =>{
          const newArr = falseLst;
    }

    return (
        <div>
            <div>
                <Sidebar className="w-3/12">
                    <Menu
                          menuItemStyles={{
                            button: ({ level, active, disabled }) => {
                              // only apply styles on first level elements of the tree
                              if (level === 0)
                                return {
                                  color: disabled ? '#000000' : '#000000',
                                  backgroundColor: active ? '#eecef9' : undefined,
                                };
                            },
                          }}
                    >
                        {menuItem.map((item, index) => {
                            return (
                                <MenuItem className = "text-start" active={false} onClick={()=>(handleChangePath(item.link))}>{item.name}</MenuItem>
                            )
                        })}
                    </Menu>
                </Sidebar>
            </div>
        </div>
    )
}
