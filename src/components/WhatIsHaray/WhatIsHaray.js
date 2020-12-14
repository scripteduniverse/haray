import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
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
            <h2 className="WhatIsHaray__main-text animate__animated animate__fadeIn">
              Your keywords <br /> from media
              <br /> sources
            </h2>
            <p className="WhatIsHaray__additional-text">
              Lorem ipsum is simply dummy text of the
              <br />
              printing and typesetting industry
            </p>
          </div>
          <Zoom when={scroll}>
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
          </Zoom>
        </section>
      </div>
    </React.Fragment>
  );
}
