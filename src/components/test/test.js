import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import "./test.css";
import { Rotate90DegreesCcwRounded } from "@material-ui/icons";
import transitions from "@material-ui/core/styles/transitions";

function Test() {
  // let logoItem = useRef(null);

  // useEffect(() => {
  //   TweenMax.to(logoItem, 0.8, {
  //     y: -20,
  //     ease: "elastic",
  //     rotation: 360,
  //     totalTime: 10,
  //     repeatDelay: 2,
  //     repeat: 100,
  //   });
  //   TweenMax.to(".x91", 0.8, {
  //     rotation: 27,
  //     x: 200,
  //     y: 100,
  //     duration: 1,
  //     repeat: 100,
  //   });
  // }, []);

  return (
    <div className="main-circle">
      <div className="x91">
        ​<div className="x92"></div>​
      </div>
    </div>
  );
}

export default Test;
