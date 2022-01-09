import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log(scrolled);
    if (scrolled > 300) setVisible(true);
    else setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("hi");
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={styles.ScrollToTop} onClick={scrollToTop}>
      {visible && (
        <i className="scroll-up" id="scroll-up">
          <img
            src="assets/icons/icons8-upward-arrow.gif"
            className="socicon up-arrow"
            alt="scroll-up"
          />
        </i>
      )}
    </div>
  );
};

ScrollToTop.propTypes = {};

ScrollToTop.defaultProps = {};

export default ScrollToTop;
