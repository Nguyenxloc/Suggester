import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import React from "react";

const timeline = gsap.timeline({ repeat: -1, yoyo: true });

export default function test2() {
  const tl = useRef(timeline);
  const app = useRef(null);
  const circle = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current
        // use scoped selectors
        // i.e., selects matching children only
        .to(".box", {
          rotation: 360,
          borderRadius: 0,
          x: 100,
          y: 100,
          scale: 1.5,
          duration: 1
        })
        // or refs
        .to(circle.current, {
          rotation: 360,
          borderRadius: 50,
          x: -100,
          y: -100,
          scale: 1.5,
          duration: 1
        });
    }, app.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={app} className="App">

    </div>
  );
}