import React, {useState} from 'react';
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
export default function SideBar(props) {
    const [x1,setX1] = useState(true);
    const [x2,setX2] = useState(false);
    const [x3,setX3] = useState(false);
    const [x4,setX4] = useState(false);
    const [x5,setX5] = useState(false);
    const [x6,setX6] = useState(false);
    const [x7,setX7] = useState(false);
    const navigate = useNavigate();
    const resetAll = () => {
        setX1(false);
        setX2(false);
        setX3(false);
        setX4(false);
        setX5(false);
        setX6(false);
        setX7(false);
    };
    
    const routeTo = (path) => {
        navigate(`/suggester/${path.toLowerCase()}`);
    };
    
    return (
        <Sidebar backgroundColor={"white"} width={"220px"}>
            <Menu
                menuItemStyles={{
                    button: ({level, active, disabled}) => {
                        // only apply styles on first level elements of the tree
                        if (level === 0)
                            return {
                                color: disabled ? 'white' : 'black',
                                backgroundColor: active ? '#eecef9' : undefined,
                            };
                    },
                }}
            >
                <p className="ms-3 mt-3" style={{fontSize: 20}}><strong><i className="bi bi-database-check me-2"></i>Suggester</strong>
                </p>
                <MenuItem active={x1} onClick={()=> (routeTo("gitflow"),resetAll(),setX1(true))} ><i className="bi bi-house me-2" ></i>Git flow</MenuItem>
                <MenuItem active={x2} onClick={()=> (routeTo("source-tree"),resetAll(),setX2(true))} ><i className="bi bi-house me-2" ></i>Source Tree</MenuItem>
                <MenuItem active={x3} onClick={()=> (routeTo("Wallet"),resetAll(),setX3(true))} ><i className="bi bi-house me-2" ></i>feature</MenuItem>
                <MenuItem active={x4} onClick={()=> (routeTo("Wallet"),resetAll(),setX4(true))} ><i className="bi bi-house me-2" ></i>feature</MenuItem>
                <MenuItem active={x5} onClick={()=> (routeTo("Wallet"),resetAll(),setX5(true))} ><i className="bi bi-house me-2" ></i>feature</MenuItem>
                <MenuItem active={x6} onClick={()=> (routeTo("Wallet"),resetAll(),setX6(true))} ><i className="bi bi-house me-2" ></i>feature</MenuItem>
                <MenuItem active={x7} onClick={()=> (routeTo("Wallet"),resetAll(),setX7(true))} ><i className="bi bi-house me-2" ></i>feature</MenuItem>
            </Menu>
        </Sidebar>
    );
}