import React from "react";

import "./Layout.css";

import MainPage from "../MainPage/MainPage";
import WhatIsHaray from "../WhatIsHaray/WhatIsHaray";
import HowDoesItWork from "../HowDoesItWork/HowDoesItWork";
import Contact from "../Contact/Contact";

export default function Layout() {
  // const color = ["#c5d8ff", "white", "#f6d7b9"];

  // var randomItem = color[Math.floor(Math.random() * color.length)];
  return (
    <React.Fragment>
      {/* <Nav backgroundColor={randomItem} /> */}
      {/* <ReactPageScroller
        pageOnChange={() => handlePageChange()}
        onBeforePageScroll={() => handleBeforePageChange()}
        customPageNumber={setCurrentPage}> */}

      {/* <MainPage backgroundColor={randomItem} />
      <WhatIsHaray backgroundColor={randomItem} />
      <HowDoesItWork backgroundColor={randomItem} />
      <Contact backgroundColor={randomItem} /> */}
      {/* </ReactPageScroller> */}

      <MainPage />
      <WhatIsHaray />
      <HowDoesItWork />
      <Contact />
    </React.Fragment>
  );
}
