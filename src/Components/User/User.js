import React from "react";
import SingleUser from "./SingleUser";
import "./User.css";

function User(props) {
  if (props.users.length === 0) {
    return;
  }
  return (
    <ul>
      <h1 id={Math.random().toString()}>All Users</h1>
      {props.users.map((user) => {
        return <SingleUser key={user.id} user={user} />;
      })}
    </ul>
  );
}

export default User;
