import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./notification.module.css";

const Notification = ({ alert, delay }) => {

  return (
    <CSSTransition
      in={alert}
      classNames={styles}
      timeout={700}
      onEntered={delay}
      unmountOnExit
    >
      <div className={styles.alert}>
        <h3>Contact already exist!</h3>
      </div>
    </CSSTransition>
  );
};

export default Notification;

