import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

import { motion } from "framer-motion";

import "./teststyles.scss";

function Test() {
  // const [flipped, set] = useState(false);
  // const { transform, opacity } = useSpring({
  //   opacity: flipped ? 1 : 0,
  //   transform: "scale(0.7)",
  //   config: { mass: 500, tension: 500, friction: 480, duration: 3000 },
  // });

  return (
    <>
      <div className="circles-box">
        <div className="upper-circle"></div>
        <div className="x91">
          <div className="x92"></div>​<div class="x93"></div>​
        </div>
      </div>
      {/* <motion.div
        className="test-div"
        animate={{ scale:2 }}
        transition={{ duration: 2 }}
      ></motion.div> */}
    </>
  );
}

export default Test;
