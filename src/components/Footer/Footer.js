import React from "react";
import styles from "./Footer.module.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

const Footer = () => (
  <div className={styles.Footer}>
    <Container>
      <Row className="py-2">
        <Col>
          <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
            <li>0407 658 001</li>
            <li>zenikyn@gmail.com</li>
            <div className={styles.icons}>facebook linkedin github</div>
          </ul>
        </Col>
        <Col>Logo</Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
