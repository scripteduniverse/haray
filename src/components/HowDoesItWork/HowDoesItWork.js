import React from "react";
import { ReactSVG } from "react-svg";

import "./_styles.scss";

import Logo from "../../assets/images/Vector.svg";
import CirtdanLogo from "../../assets/images/unnamed 1.jpg";
import YoutubeLogo from "../../assets/images/youtube.svg";

export default function HowDoesItWork(props) {
  return (
    <React.Fragment>
      <div
        id="howdoesitwork"
        className="HowDoesItWork__container"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <section className="HowDoesItWork">
          <h2 className="HowDoesItWork__main-text">
            Monitoring <br /> keywords with API
          </h2>
          <p className="HowDoesItWork__additional-text">
            Lorem ipsum is simply dummy text of the
            <br />
            printing and typesetting industry
          </p>
        </section>

        <div className="cellphone">
          <div className="cellphone__inner-box2">
            <div className="HowDoesItWork__inner-container">
              <div className="cellphone__top-bar">
                <div className="cellphone__svg-box">
                  <ReactSVG src={Logo} className="cellphone__svg"></ReactSVG>
                  <p className="cellphone__number">1,384</p>
                </div>
                <p className="cellphone__phrase">Found keywords</p>
                <div className="cellphone__test">
                  <div className="cellphone__chingiz"></div>
                </div>
              </div>
              <div className="cellphone__middle-bar">
                <div className="cellphone__middle-bar-section">
                  <img
                    alt="cirtdan"
                    W
                    className="cirtdanLogo"
                    src={CirtdanLogo}
                  ></img>

                  <div className="cellphone__middle-bar-section-2nd-box">
                    <p className="cirtdan-phrase">Cirtdan pro</p>
                    <div className="additional-box">
                      <img alt="youtube" src={YoutubeLogo}></img>
                      <p className="youtube-word">Youtube</p>
                    </div>
                  </div>
                  <div className="cellphone__left-box">
                    <div className="cellphone__keyword-number">
                      <p>37 keywords</p>
                    </div>
                    <div className="cellphone__video-length">
                      <p>12:38</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cellphone__video-bar">
                <div className="cellphone__youtube">
                  <iframe
                    className="cellphone__youtube"
                    src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
