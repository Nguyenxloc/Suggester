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
    const navigate = useNavigate();
    const resetAll = () => {
        setX1(false);
        setX2(false);
        setX3(false);
        setX4(false);
        setX5(false);
    };
    
    const routeTo = (path) => {
        navigate(`/crypto-checker/${path.toLowerCase()}`);
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
                <p className="ms-3 mt-3" style={{fontSize: 20}}><strong><i className="bi bi-database-check me-2"></i>CryptoChecker</strong>
                </p>
                <MenuItem active={x1} onClick={()=> (routeTo("Wallet"),resetAll(),setX1(true))} ><i className="bi bi-house me-2" ></i>Wallet</MenuItem>
            </Menu>
        </Sidebar>
    );
}