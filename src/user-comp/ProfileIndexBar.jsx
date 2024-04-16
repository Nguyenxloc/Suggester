import React from 'react';
export default function ProfileIndexBar() {
    return (
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2 ms-2" style={{height:70,fontSize:12,fontWeight:"bold"}}
                >
                    <div>
                        <p className="small mb-1" style={{color:"gray"}}>TVF</p>
                        <p className="mb-0">$0</p>
                    </div>
                    <div className="px-3">
                        <p className="small mb-1" style={{color:"gray"}}>Followers</p>
                        <p className="mb-0">0</p>
                    </div>
                    <div>
                        <p className="small mb-1" style={{color:"gray"}}>Following</p>
                        <p className="mb-0">0</p>
                    </div>
                    <div>
                        <p className="small mb-1 ms-2" style={{color:"gray"}}>Trust</p>
                        <p className="mb-0 ms-2">0</p>
                    </div>
                    <div>
                        <p className="small mb-1 ms-2" style={{color:"gray"}}>Earnings</p>
                        <p className="mb-0 ms-2">$0</p>
                    </div>
                    <div>
                        <button type="button" className="btn ms-3 mt-2" style={{borderRadius:20,width:70,height:20,fontSize:10,textAlign:"center",lineHeight:"8px",color:"white",backgroundColor:"#ff7256"}}><strong>Follow</strong></button>
                    </div>
                    <div>
                        <p className="small mb-1 ms-4" style={{color:"gray"}}>Hi offer price</p>
                        <p className="mb-0 ms-4">$1.00</p>
                    </div>
                    <div>
                        <button type="button" className="btn ms-3 mt-2" style={{borderRadius:20,width:70,height:20,fontSize:10,textAlign:"center",lineHeight:"8px",color:"white",backgroundColor:"pink"}}><strong>Say hi</strong></button>
                    </div>
                </div>
    );
}