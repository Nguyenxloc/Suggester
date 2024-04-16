import React from "react";

export default function ScrollTrigger(){
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
          markers: true
        }
      });
      tl.to(".box", {yPercent: 350, duration: 1})
      tl.to(".box", {rotation: 360, duration: 3})
      tl.to(".box", {xPercent: 350, duration: 1})
     return(
        <div>
            <h1>Scroll down</h1>
            <div className="box"></div>
        </div> 
     );
}