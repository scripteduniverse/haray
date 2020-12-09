import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { ReactSVG } from "react-svg";

import "./_styles.scss";

import Logo from "../../assets/images/logo_animation.svg";
import ModalWindow from "../ModalWindow/ModalWindow";
// import MobileModal from "../MobileModal/MobileModal";

export default function Nav(props) {
  const [modalShow, setModalShow] = useState(false);

  const toggle = () => {
    setModalShow(!modalShow);
    console.log("clicked");
  };

  return (
    <React.Fragment>
      {/* <p>{setModalll}</p> */}
      <nav className="Navbar">
        <div
          className="container"
          style={{ backgroundColor: props.backgroundColor }}
        >
          <div
            className="Navbar__wrapper"
            style={{ backgroundColor: props.backgroundColor }}
          >
            <div className="Navbar__logo">
              <a href="/">
                <ReactSVG src={Logo}></ReactSVG>
              </a>
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
              <li className="Navbar__nav-item">
                <a href="/faq" className="Navbar__nav-link">
                  Faq
                </a>
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
