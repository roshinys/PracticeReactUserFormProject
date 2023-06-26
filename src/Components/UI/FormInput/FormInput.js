import React from "react";
import styles from "./FormInput.module.css";

function FormInput(props) {
  const valueChangeHadler = (e) => {
    if (props.name === "age") {
      props.onAgeChange(e.target.value);
    } else {
      props.onUsernameChange(e.target.value);
    }
  };

  return (
    <>
      <label htmlFor={props.name} className={styles.label}>
        {props.label}:
      </label>
      <input
        className={styles.input}
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={valueChangeHadler}
      />
    </>
  );
}

export default FormInput;
