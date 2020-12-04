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

  const getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 4; i++) {
      pageNumbers.push(
        <Pagination.Item key={i} eventKey={i - 1} onSelect={handlePageChange}>
          {i}
        </Pagination.Item>
      );
    }

    return [...pageNumbers];
  };
  return (
    <React.Fragment>
      <Nav />
      {/* <ReactPageScroller
        pageOnChange={() => handlePageChange()}
        onBeforePageScroll={() => handleBeforePageChange()}
        customPageNumber={setCurrentPage}> */}

      <MainPage />
      <WhatIsHaray />
      <HowDoesItWork />
      <Contact />
      {/* </ReactPageScroller> */}
    </React.Fragment>
  );
}
