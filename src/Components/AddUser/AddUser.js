import React, { useState } from "react";
import FormInput from "../UI/FormInput/FormInput";
import Button from "../UI/Button/Button";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");

  const addUserHanlder = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.toString().trim().length === 0) {
      props.onUserInputValidation(false);
      return;
    }
    if (age < 0) {
      props.onAgeValidation(false);
      return;
    }
    const userDetail = {
      username: username,
      age: age,
      id: Math.random().toString(),
    };
    props.onNewUser(userDetail);
    setAge("");
    setUsername("");
  };

  const ageChangeHandler = (enteredAge) => {
    setAge(enteredAge);
  };

  const usernameChangeHandler = (enteredUsername) => {
    setUsername(enteredUsername);
  };

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={addUserHanlder}>
        <FormInput
          type="text"
          name="username"
          label="Username"
          value={username}
          onUsernameChange={usernameChangeHandler}
        />
        <FormInput
          type="number"
          name="age"
          label="Age"
          value={age}
          onAgeChange={ageChangeHandler}
        />
        <Button type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddUser;
