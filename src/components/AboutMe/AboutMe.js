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
      <div className={"bio animate__animated animate__shakeX"}>
        <h2 className="bio-title">About Me</h2>
        <p className="bio-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed
          dolorem fugit sapiente porro veniam pariatur dolore nostrum delectus
          inventore tempore minus nemo, iste ullam illo laboriosam maiores
          repudiandae quos!
        </p>
      </div>
    </section>
  </div>
);

AboutMe.propTypes = {};

AboutMe.defaultProps = {};

export default AboutMe;
