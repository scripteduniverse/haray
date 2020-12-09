import React, { useState } from "react";
import { ReactSVG } from "react-svg";

import "./_styles.scss";

import Close from "../../assets/images/close.svg";

const ModalWindow = (props) => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const incomingData = [];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    incomingData.push(name, surname, email, company);
    console.log(incomingData);
    props.toggle();
  };

  const handleCloseButton = () => {
    props.toggle();
  };

  return (
    <div className="wrapper-for-modal">
      <div className="modal-window">
        <div className="left-section">
          <p className="left-section-main-text">
            Grow
            <br /> your
            <br /> brand
          </p>
          <p className="left-section-additional-text">
            How do I message <br />
            someone?
          </p>
        </div>
        <div className="right-section">
          <div
            onClick={() => handleCloseButton()}
            // ref={dataRef}
            className="close-button"
          >
            <ReactSVG src={Close}></ReactSVG>
          </div>

          <div className="form-section">
            <p className="form-section-head-text">
              Send request <br />
              for demo
            </p>
            <p className="form-section-additional-text">
              The user profiles are being shown to the <br />
              user based on the preference that
            </p>
          </div>
          <form className="form-box" onSubmit={handleSubmit}>
            <input
              className="company-input"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company"
            />

            <div className="name-surname-box">
              {" "}
              <input
                className="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name"
              />
              <input
                className="surname-input"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Second name"
              />
            </div>

            <input
              className="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              className="input-button"
              type="submit"
              value="Send request"
            />
            <p className="text-under-button">
              The user profiles are being shown to the user <br /> based on the
              preference that
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
