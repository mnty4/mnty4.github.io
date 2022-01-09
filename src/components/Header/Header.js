import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import NavBar from "../NavBar/NavBar";

const Header = () => (
  <div className={styles.Header}>
    <div
      style={{ backgroundColor: "purple", width: "100px", height: "100px" }}
    ></div>
    <NavBar />
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
