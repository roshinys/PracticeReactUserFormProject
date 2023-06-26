import React, { useState } from "react";
import "./App.css";
import User from "./Components/User/User";
import AddUser from "./Components/AddUser/AddUser";
import Modal from "./Components/UI/Modal/Modal";

const DUMMY_USERS = [
  {
    id: 1,
    username: "user1",
    age: 22,
  },
  {
    id: 2,
    username: "user2",
    age: 21,
  },
  {
    id: 3,
    username: "user3",
    age: 20,
  },
];

function App() {
  const userAlert = "Please Enter Username And Age (Non Empty Values)";
  const ageAlert = "Age Cannot Be Negative";

  const [users, SetUsers] = useState(DUMMY_USERS);
  const [userValid, setUserValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);

  const addNewUserHandler = (userDetail) => {
    SetUsers((prevState) => {
      return [...prevState, userDetail];
    });
  };

  const ageValidationHandler = (validAge) => {
    setAgeValid(validAge);
  };
  const userInputHanlder = (validUser) => {
    setUserValid(validUser);
  };

  return (
    <div>
      {!userValid && (
        <Modal
          id="userValid"
          message={userAlert}
          onUserInputValidation={userInputHanlder}
        />
      )}
      {!ageValid && (
        <Modal
          id="ageValid"
          message={ageAlert}
          onAgeValidation={ageValidationHandler}
        />
      )}
      <AddUser
        onNewUser={addNewUserHandler}
        onUserInputValidation={userInputHanlder}
        onAgeValidation={ageValidationHandler}
      />
      <User users={users} />
    </div>
  );
}

export default App;
