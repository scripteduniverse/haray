import React from "react";
import "./_styles.scss";
import Logo from "../../assets/images/Vector.svg";
import CirtdanLogo from "../../assets/images/unnamed 1.jpg";
import YoutubeLogo from "../../assets/images/Vector (4).svg";
import Logo1 from "../../assets/images/logo-footer.png";

export default function HowDoesItWork() {
  return (
    <React.Fragment>
      <div id="contact" className="Contact__container">
        <div className="cellphone-2">
          <div className="cellphone-2__inner-box2">
            <div className="Contact__inner-container">
              <div className="cellphone-2__middle-bar">
                <div className="cellphone-2__middle-bar-section">
                  <img
                    alt="cirtdan"
                    W
                    className="cirtdanLogo"
                    src={CirtdanLogo}
                  ></img>

                  <div className="cellphone-2__middle-bar-section-2nd-box">
                    <p className="cirtdan-phrase">Cirtdan pro</p>
                    <div className="additional-box">
                      <img alt="youtube" src={YoutubeLogo}></img>
                      <p>Youtube</p>
                    </div>
                  </div>
                  <div className="cellphone-2__left-box">
                    <div className="cellphone-2__keyword-number">
                      <p>37 keywords</p>
                    </div>
                    <div className="cellphone-2__video-length">
                      <p>12:38</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cellphone-2__video-bar">
                <div className="cellphone-2__youtube">
                  <iframe
                    className="cellphone-2__youtube"
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
        <section className="Contact">
          <h1 className="Contact__main-text">
            Start monitoring <br /> your brand
          </h1>
          <p className="Contact__additional-text">
            Lorem ipsum is simply dummy text of the
            <br />
            printing and typesetting industry
          </p>
          <div className="Contact__input-box">
            <input
              className="Contact__input-place"
              placeholder="Monitoring keyword"
            ></input>
            <div className="Contact__test">
              <div className="Contact__chingiz"></div>
            </div>
          </div>
          <button className="Contact__send-request">Send request</button>
        </section>
        <div className="footer-wrapper">
          <footer className="footer">
            <div className="logo-n-copyright">
              <img src={Logo1} alt="logo" className="footer-logo"></img>
              <p className="copyright">Copyright © 2020 Haray LLC </p>
            </div>
            <p className="adress">
              Az 1010 Baki sh,Nesimi r-nu,Tramvay
              <br />
              dongesi 4,9-cu mertebe
            </p>
            <p className="email">info@haray.az</p>
            <div className="faq-block">
              <p className="faq-itself">Suallar </p>
              <div className="question-mark-circle">
                <p className="question-mark-itself">?</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
}
