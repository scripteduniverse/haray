import React, { useState } from "react";
import "./_styles.scss";

const MobileModal = (props) => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const incomingData = [];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    incomingData.push(name, surname, email, company);
    console.log(incomingData);
    // props.toggle();
  };

  const handleCloseButton = () => {
    props.toggle();
  };

  return (
    <form className="MobileModal" onSubmit={handleSubmit}>
      <p className="MobileModal__main-text">
        Send request <br /> for demo
      </p>
      <p className="MobileModal__additional-text">
        The user profiles are being <br /> shown to the user based
      </p>
      <input
        className="MobileModal__company-name"
        type="text"
        placeholder="Company"
        onChange={(e) => setCompany(e.target.value)}
      ></input>
      <input
        className="MobileModal__first-name"
        type="text"
        placeholder="First name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        className="MobileModal__second-name"
        type="text"
        placeholder="Second name"
        onChange={(e) => setSurname(e.target.value)}
      ></input>
      <input
        className="MobileModal__email"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="MobileModal__input-button"
        type="submit"
        value="Send request"
      />
      <p className="MobileModal__text-under-button">
        The user profiles are being shown to the user <br /> based on the
        preference that
      </p>
    </form>
  );
};

export default MobileModal;
