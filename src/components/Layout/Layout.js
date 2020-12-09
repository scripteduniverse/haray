import ReactPageScroller from "react-page-scroller";
import { Pagination } from "react-bootstrap";
import React, { useState } from "react";

import Nav from "../Nav/Nav";
import MainPage from "../MainPage/MainPage";
import WhatIsHaray from "../WhatIsHaray/WhatIsHaray";
import HowDoesItWork from "../HowDoesItWork/HowDoesItWork";
import Contact from "../Contact/Contact";

import "./Layout.css";
export default function Layout() {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (number) => {
    setCurrentPage({ currentPage: number });
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };

  // const getPagesNumbers = () => {
  //   const pageNumbers = [];

  //   for (let i = 1; i <= 4; i++) {
  //     pageNumbers.push(
  //       <Pagination.Item key={i} eventKey={i - 1} onSelect={handlePageChange}>
  //         {i}
  //       </Pagination.Item>
  //     );
  //   }

  //   return [...pageNumbers];
  // };

  const color = ["#c5d8ff", "white", "#f6d7b9"];

  var randomItem = color[Math.floor(Math.random() * color.length)];
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
    
      <MainPage/>
      <WhatIsHaray/>
      <HowDoesItWork/>
      <Contact/>
    </React.Fragment>
  );
}
