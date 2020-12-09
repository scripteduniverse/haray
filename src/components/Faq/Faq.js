import React from "react";
import Faq from "react-faq-component";
import { Link } from "react-router-dom";

import "./_styles.scss";

import Logo1 from "../../assets/images/logo-footer.png";

const data = {
  rows: [
    {
      title: "What is Photo Verification?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "How do I request a copy of my personal data?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Can I use Milda anywhere in the world?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "How do I request?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What is Haray?",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "black",
  rowTitleTextSize: "34px",
  rowTitleColor: "black",
  rowContentColor: "#777777",
  arrowColor: "#B3B3B3",
  rowContentTextSize: "26px",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default function FaqMain() {
  return (
    <>
      <div className="faq-container">
        <h1 className="faq-container__header-text">faq</h1>
        <Faq data={data} styles={styles} config={config} className="box-23" />
      </div>
      <footer
        className="footer"
        style={{ backgroundColor: "white", width: "80%" }}
      >
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
        <Link to="/faq">
          <div className="faq-block">
            <p className="faq-itself">Suallar </p>
            <div className="question-mark-circle">
              <p className="question-mark-itself">?</p>
            </div>
          </div>
        </Link>
      </footer>
    </>
  );
}
