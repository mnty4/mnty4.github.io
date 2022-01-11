import React from "react";
import PropTypes from "prop-types";
import styles from "./Projects.module.css";
import { Card } from "react-bootstrap";

const Projects = () => (
  <div className={styles.Projects}>
    <section className="projects" id="projects">
      <h2 className="projects-title">Some of my Recent Projects</h2>
      <div className="projects-container">
        <div className="project-container project-card">
          <img
            src="assets/images/ballTalkApp.png"
            alt="Messaging app"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Messaging App</h3>
          <p className="project-details">
            A messaging app built using React and Node.js with Socket.io where
            user's can join chat rooms and message eachother.
          </p>
          <a
            href="https://ball-talk-1.herokuapp.com/"
            target="_blank"
            className="project-link"
          >
            Check it Out
          </a>
        </div>
        <div className="project-container project-card">
          <img
            src="assets/images/loginFlow.png"
            alt="Login and signup flow"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Login and Signup Flow</h3>
          <p className="project-details">
            An end-to-end MERN stack application that allows user's to create an
            account having their information encrypted and stored in a Mongodb
            database. The user's client is then provided a JWT so the user can
            access the rest of the site. The user is also able to use this email
            and password to login after their session has ended.
            {/* An end-to-end MERN stack application that allows user's to create
            accounts as well as login to them. Logged in user's are provided a
            JWT so they can access the rest of the site. An end-to-end MERN */}
            {/* MERN stack app where user's can signup and login to accounts. There
            info encrypted, stored in db and their client given a JWT. */}
          </p>
          <a
            href="http://signupflow-env.eba-knzq3jkc.ap-southeast-2.elasticbeanstalk.com/login"
            target="_blank"
            className="project-link"
          >
            Check it Out
          </a>
        </div>
        <div className="project-container project-card">
          <img
            src="assets/images/naughtsAndCrossesApp.png"
            alt="Naughts and crosses app"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Naughts and Crosses Game</h3>
          <p className="project-details">
            A Naughts and Crosses game built using React. It keeps track of wins
            for each side and is able to also detect draws.
          </p>
          <a
            href="https://naughts-and-crosses-123.herokuapp.com/"
            target="_blank"
            className="project-link"
          >
            Check it Out
          </a>
        </div>
        <div className="project-container project-card">
          <img
            src="assets/images/todoApp.png"
            alt="Todo app"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Todo App</h3>
          <p className="project-details">
            Todo app built using React where user's are able to create todo's as
            well as delete and edit them.
          </p>
          <a
            href="https://todo-app-18475.herokuapp.com/"
            target="_blank"
            className="project-link"
          >
            Check it Out
          </a>
        </div>
      </div>
    </section>
  </div>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
