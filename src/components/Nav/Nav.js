import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./_styles.scss";
import { ReactSVG } from "react-svg";
import Logo from "../../assets/images/logo_animation.svg";
import ModalWindow from "../ModalWindow/ModalWindow";

export default function Nav() {
  const [modalShow, setModalShow] = useState(false);

  const toggle = () => {
    setModalShow(!modalShow);
    console.log("clicked");
  };

  // const print = () => {
  //   console.log("clicked");
  // };
  return (
    <React.Fragment>
      {/* <p>{setModalll}</p> */}
      <nav className="Navbar">
        <div className="container">
          <div className="Navbar__wrapper">
            <div onClick={() => scroll.scrollToTop()} className="Navbar__logo">
              <ReactSVG src={Logo}></ReactSVG>
            </div>
            <ul className="Navbar__nav">
              <li className="Navbar__nav-item">
                <Link
                  activeClass="active"
                  to="whatisharay"
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  duration={500}
                  className="Navbar__nav-link"
                >
                  What is Haray?
                </Link>
              </li>
              <li className="Navbar__nav-item">
                <Link
                  activeClass="active"
                  to="howdoesitwork"
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  duration={500}
                  className="Navbar__nav-link"
                >
                  How does it work?
                </Link>
              </li>
              <li className="Navbar__nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  duration={500}
                  className="Navbar__nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button onClick={() => toggle()} className="Navbar__send-request">
              Send request
            </button>
          </div>
        </div>
      </nav>
      {modalShow ? <ModalWindow toggle={toggle} /> : null}
    </React.Fragment>
  );
}
