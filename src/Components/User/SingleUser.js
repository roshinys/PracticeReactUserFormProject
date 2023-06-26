import React from "react";
import "./SingleUser.css";

function SingleUser(props) {
  return <li>{`${props.user.username} (${props.user.age})`}</li>;
}

export default SingleUser;
