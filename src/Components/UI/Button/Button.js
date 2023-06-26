import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button type={props.type} className={styles.button}>
      {props.value}
    </button>
  );
}

export default Button;
