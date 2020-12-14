import React, { useState, useEffect } from "react";
import { Spring, Transition } from "react-spring/renderprops";
import { useSpring, animated, useTrail, a } from "react-spring";
import Fade from "react-reveal/Fade";

import { motion } from "framer-motion";

import "./_styles.scss";
import Video from "./CollegeStudentsTalking.mp4";

import CirtdanLogo from "../../assets/images/unnamed 1.jpg";
import YoutubeLogo from "../../assets/images/youtube.svg";
import Test from "../../components/test/test";

// function Trail({ open, children, ...props }) {
//   const items = React.Children.toArray(children);
//   const trail = useTrail(items.length, {
//     config: { mass: 500, tension: 2000, friction: 2000 },
//     opacity: 1,
//     x: open ? 0 : 20,
//     height: open ? 300 : 0,
//     from: { opacity: 0, x: 20, height: 0 },
//   });
//   return (
//     <div className="trails-main" {...props}>
//       <div>
//         {trail.map(({ x, height, ...rest }, index) => (
//           <a.div
//             key={items[index]}
//             className="trails-text"
//             style={{
//               ...rest,
//               transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
//             }}
//           >
//             <a.div style={{ height }}>{items[index]}</a.div>
//           </a.div>
//         ))}
//       </div>
//     </div>
//   );
// }
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
            {/* <Trail open={open}>
              <h1 className="MainPage__main-text">
                Grow your <br />
                brand with <br />
                Haray
              </h1>
            </Trail> */}
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
            {/* <animated.div
              className="MainPage__animation-container-box-1"
              style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
            > */}
            <Fade delay={2000}>
              <div className="MainPage__animation-container-box-1">
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
              </div>
              <div className="MainPage__animation-container-box-2"></div>
              <div className="MainPage__animation-container-box-3"></div>
            </Fade>
            <motion.div
              className="VideoBar"
              animate={{ scale: 1.1 }}
              transition={{ duration: 2 }}
            >
              <video
                loop
                autoPlay
                src={Video}
                className="mock-video-itself"
              ></video>

              {/* <video
                  width="400"
                  autoplay=""
                  loop=""
                  className="mock-video-itself"
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                ></video> */}
            </motion.div>
            {/* </animated.div> */}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
