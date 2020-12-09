import React from "react";

import "./_styles.scss";

import CirtdanLogo from "../../assets/images/unnamed 1.jpg";
import YoutubeLogo from "../../assets/images/youtube.svg";

export default function MainPage(props) {
  return (
    <React.Fragment>
      <div
        id="mainpage"
        className="MainPage"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <section className="MainPage__container">
          <div className="MainPage__content-container">
            <h1 className="MainPage__main-text animate__animated animate__fadeIn ">
              Grow your <br /> brand with <br /> Haray
            </h1>

            <p className="MainPage__additional-text">
              Lorem ipsum is simply dummy text of the
              <br />
              printing and typesetting industry
            </p>
          </div>
          <div className="MainPage__animation-container">
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
              <div className="VideoBar">
                <iframe
                  className="VideoBar__youtube"
                  src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>
            </div>
            <div className="MainPage__animation-container-box-2"></div>
            <div className="MainPage__animation-container-box-3"></div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
