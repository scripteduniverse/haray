import "./_styles.scss";
import Nav from "../Nav/Nav";
import * as Scroll from "react-scroll";

import React from "react";

export default function MainPage() {
  return (
    <React.Fragment>
      <div id="mainpage" className="MainPage">
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
            {/* <div className="MainPage__animation-container-top-bar"></div> */}
            <div className="MainPage__animation-container-box-1"></div>
            <div className="MainPage__animation-container-box-2"></div>
            <div className="MainPage__animation-container-box-3"></div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
