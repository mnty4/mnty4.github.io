import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactMe.module.css";
import { useForm, ValidationError } from "@formspree/react";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("mjvlknap");

  return (
    <div className={styles.ContactMe}>
      <section className="contact" id="contact">
        <h2>Get In Touch With Me</h2>
        <div className="contact-form-container">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder="Enter Your Name"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="sender-email"
                  placeholder="Enter Your Email"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  cols="60"
                  rows="10"
                  placeholder="Enter Your Message"
                  name="message"
                  className="input-field"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                disabled={state.submitting}
                id="submit-btn"
                className="submit-btn"
              />
            </form>
            {state.succeeded && <div>Thanks for contacting me!</div>}
          </div>
        </div>
      </section>
    </div>
  );
};

ContactMe.propTypes = {};

ContactMe.defaultProps = {};

export default ContactMe;
