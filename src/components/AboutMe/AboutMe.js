import React from "react";
import PropTypes from "prop-types";
import styles from "./AboutMe.module.css";

const AboutMe = () => (
  <div className={styles.AboutMe}>
    <section className="hero" id="about">
      <img
        src="assets/images/wfh_1.svg"
        alt="Lukas-Gaspar"
        loading="lazy"
        className="hero-img"
      />
      {/* <img
        src="assets/images/coderImg.PNG"
        alt="Lukas-Gaspar"
        loading="lazy"
        className="hero-img"
      /> */}
      <div className={"bio animate__animated animate__shakeX"}>
        <h2 className="bio-title">About Me</h2>
        <p className="bio-text">
          I am a hard working and motivated individual who enjoys all aspects of
          software development. I have experience developing several apps using
          React, Node.js, MongoDB, Express.js, Socket.io, as well as HTML5, CSS,
          Bootstrap and vanilla JavaScript.
        </p>
      </div>
    </section>
  </div>
);

AboutMe.propTypes = {};

AboutMe.defaultProps = {};

export default AboutMe;
