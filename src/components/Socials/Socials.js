import React from "react";
import PropTypes from "prop-types";
import styles from "./Socials.module.css";

const Socials = () => (
  <div className={styles.Socials}>
    <div className="socials">
      <a href="https://www.facebook.com/lukas.gaspar.31/" target="_blank">
        <img
          src="assets/icons/icons8-facebook-circled2.gif"
          alt="Facebook"
          loading="lazy"
          className="socicon"
        />
      </a>
      <a href="https://github.com/mnty4" target="_blank">
        <img
          src="assets/icons/icons8-github.gif"
          alt="Github"
          className="socicon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/lukas-gaspar-152535201/"
        target="_blank"
      >
        <img
          src="assets/icons/icons8-linkedin-circled.gif"
          alt="Linkedin"
          loading="lazy"
          className="socicon"
        />
      </a>
    </div>
  </div>
);

Socials.propTypes = {};

Socials.defaultProps = {};

export default Socials;
