import React, { useEffect, useState } from "react";
import { Spring, Transition } from "react-spring/renderprops";
import { useSpring, animated, useTrail, a } from "react-spring";

import "./_styles.scss";
import Test from "../test/test";
import Video from "../MainPage/CollegeStudentsTalking.mp4";

// const Logo = require("../../assets/images/rectangle.png");

export default function WhatIsHaray(props) {
  const [scroll, setScroll] = useState(false);

  window.addEventListener("wheel", checkScrollDirection);

  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 200;
  }
  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      setScroll(true);
    } else {
      setScroll(true);
    }
  }
  return (
    <React.Fragment>
      <div
        id="whatisharay"
        className="WhatIsHaray"
        // style={{ backgroundColor: props.backgroundColor }}
      >
        <section className="WhatIsHaray__container">
          <div className="WhatIsHaray__content-container">
            <h2 className="WhatIsHaray__main-text">
              <Spring
                from={{
                  opacity: 0,
                }}
                to={{
                  opacity: 1,
                }}
                config={{ delay: 1000, duration: 3000 }}
              >
                {(props) => (
                  <>
                    <span className="abc" style={props}>
                      Your keywords <br />
                      from media <br />
                      sources
                    </span>
                  </>
                )}
              </Spring>
            </h2>
            <Spring
              from={{
                opacity: 0,
              }}
              to={{
                opacity: 1,
              }}
              config={{ delay: 1500, duration: 3000 }}
            >
              {(props) => (
                <p className="WhatIsHaray__additional-text" style={props}>
                  Lorem ipsum is simply dummy text of the
                  <br />
                  printing and typesetting industry
                </p>
              )}
            </Spring>
          </div>

          <div className="WhatIsHaray__animation-container">
            {/* <Test /> */}
            <div className="WhatIsHaray__animation-container-box-1">
              <div className="VideoBar-test">
                <video
                  controls
                  loop
                  autostart
                  autoPlay
                  src={Video}
                  className={`presTst`}
                ></video>
              </div>
            </div>
            <div className="WhatIsHaray__animation-container-box-2">
              <div className={"outer-2"}> </div>
            </div>
            <div className="WhatIsHaray__animation-container-box-3">
              <div className={"outer-3"}> </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
