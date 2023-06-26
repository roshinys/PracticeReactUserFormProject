import React from "react";
import styles from "./Modal.module.css";

function Modal(props) {
  const cancelHandler = (e) => {
    if (props.id === "userValid") {
      props.onUserInputValidation(true);
    } else {
      props.onAgeValidation(true);
    }
  };
  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles["modal-content"]}>
        <h1 className={styles.heading}>Check</h1>
        <div className={styles["modal-message"]}>{props.message}</div>
        <button
          id={props.id}
          onClick={cancelHandler}
          className={styles["modal-button"]}
        >
          Okay
        </button>
      </div>
    </div>
  );
}

export default Modal;
