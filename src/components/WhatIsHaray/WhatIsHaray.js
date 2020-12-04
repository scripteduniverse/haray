import "./_styles.scss";

import React from "react";

export default function WhatIsHaray() {
  return (
    <React.Fragment>
      <div id="whatisharay" className="WhatIsHaray">
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
          <div className="WhatIsHaray__animation-container"></div>
        </section>
      </div>
    </React.Fragment>
  );
}
