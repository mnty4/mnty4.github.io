import React from "react";
import PropTypes from "prop-types";
import styles from "./Socials.module.css";

const Socials = () => (
  <div className={styles.Socials}>
    <div className="socials">
      <a href="#" target="_blank">
        <img
          src="assets/icons/icons8-twitter-circled.gif"
          alt="Twitter"
          loading="lazy"
          className="socicon"
        />
      </a>
      <a href="#" target="_blank">
        <img
          src="assets/icons/icons8-instagram.gif"
          alt="Instagram"
          loading="lazy"
          className="socicon"
        />
      </a>
      <a href="#" target="_blank">
        <img
          src="assets/icons/icons8-linkedin-circled.gif"
          alt="Linkedin"
          loading="lazy"
          className="socicon"
        />
      </a>
      <a href="#" target="_blank">
        <img
          src="assets/icons/icons8-github.gif"
          alt="Github"
          className="socicon"
        />
      </a>
    </div>
  </div>
);

Socials.propTypes = {};

Socials.defaultProps = {};

export default Socials;
