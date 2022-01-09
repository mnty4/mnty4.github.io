import React from "react";
import PropTypes from "prop-types";
import styles from "./Projects.module.css";
import { Card } from "react-bootstrap";

const Projects = ({ name, src, desc }) => (
  <div className={styles.Projects}>
    <Card>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  </div>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
