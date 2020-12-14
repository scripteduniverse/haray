import React, { useState, useEffect } from "react";
import { Spring } from "react-spring/renderprops";
import { useSpring } from "react-spring";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";

// import Slide from "react-reveal/Slide";

import { motion } from "framer-motion";

import "./_styles.scss";
import Video from "./CollegeStudentsTalking.mp4";

import CirtdanLogo from "../../assets/images/unnamed 1.jpg";
import YoutubeLogo from "../../assets/images/youtube.svg";
import Test from "../../components/test/test";

export default function MainPage(props) {
  const [open, set] = useState(true);
  const [flipped, set1] = useState(false);

  const { transform, opacity } = useSpring(
    {
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 60 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80, duration: 3000 },
    },
    console.log("clicked")
  );

  useEffect(() => {
    set1((state) => !state);
  }, []);
  return (
    <React.Fragment>
      <div
        id="mainpage"
        className="MainPage"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <section className="MainPage__container">
          <div className="MainPage__content-container">
            <h1 className="MainPage__main-text">
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
                      Grow your <br />
                      brand with <br />
                      Haray
                    </span>
                  </>
                )}
              </Spring>
            </h1>
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
                <p className="MainPage__additional-text" style={props}>
                  Lorem ipsum is simply dummy text of the
                  <br />
                  printing and typesetting industry
                </p>
              )}
            </Spring>
          </div>
          <div className="MainPage__animation-container">
            <Test />
            <Fade delay={1300}>
              <div className="MainPage__animation-container-box-1">
                {/* <Fade bottom delay={2100}> */}
                <div className="MainPage__animation-container-top-bar">
                  <div className="TopBar__logo-box">
                    {" "}
                    <img
                      alt="cirtdan"
                      className="cirtdanLogo"
                      src={CirtdanLogo}
                    ></img>
                    <div className="TopBar__video-name-box">
                      <p>Cirtdan Pro</p>
                      <div className="additional-box">
                        <img
                          className="youtube-logo"
                          alt="youtube"
                          src={YoutubeLogo}
                        ></img>
                        <p>Youtube</p>
                      </div>
                    </div>
                  </div>

                  <div className="TopBar__video-length">
                    <div className="TopBar__video-length-box">
                      <p>37 keywords</p>
                    </div>
                    <p className="TopBar__video-length-itself">12:38</p>
                  </div>
                </div>
                {/* </Fade> */}
              </div>
            </Fade>
            <Fade delay={1400}>
              <div className="MainPage__animation-container-box-2"></div>
            </Fade>
            <Fade delay={1500}>
              <div className="MainPage__animation-container-box-3"></div>
            </Fade>

            <motion.div
              className="VideoBar"
              animate={{ scale: 1.1 }}
              transition={{ duration: 1 }}
            >
              <video
                loop
                autoPlay
                src={Video}
                className="mock-video-itself"
              ></video>
            </motion.div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
