import React from "react";
import PropTypes from "prop-types";
import styles from "./Skills.module.css";

const Skills = () => (
  <div className={styles.Skills}>
    <section className="skills" id="skills">
      <h2 className="skill-header">My Top Skills</h2>

      <div className="skills-wrapper">
        <div className="first-set animate__animated animate__pulse">
          <img
            src="assets/icons/icons8-html-5.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/icons8-css3.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/icons8-javascript.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>

        <div className="second-set animate__animated animate__pulse">
          <img
            src="assets/icons/icons8-bootstrap.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/icons8-react-native.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/icons8-git.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>
      </div>
    </section>
  </div>
);

Skills.propTypes = {};

Skills.defaultProps = {};

export default Skills;
