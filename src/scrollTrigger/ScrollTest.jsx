import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(ScrollTrigger)
export default function ScrollTest(){

     return(
        <div className="trigger min-h-[500vh]">
            <h1>Scroll down</h1>
            <div className="box"></div>
        </div> 
     );
}