import React from "react";

import "./_styles.scss";

// const Logo = require("../../assets/images/rectangle.png");

export default function WhatIsHaray(props) {
  return (
    <React.Fragment>
      <div
        id="whatisharay"
        className="WhatIsHaray"
        // style={{ backgroundColor: props.backgroundColor }}
      >
        <section className="WhatIsHaray__container">
          <div className="WhatIsHaray__content-container">
            <h2 className="WhatIsHaray__main-text animate__animated animate__fadeIn ">
              Your keywords <br /> from media
              <br /> sources
            </h2>
            <p className="WhatIsHaray__additional-text">
              Lorem ipsum is simply dummy text of the
              <br />
              printing and typesetting industry
            </p>
          </div>
          {/* <div className="WhatIsHaray__animation-container-main">
            <div className="WhatIsHaray__animation-container"></div>
            <div className="WhatIsHaray__animation-additional-box-2"></div>
          </div> */}
        </section>
      </div>
    </React.Fragment>
  );
}
