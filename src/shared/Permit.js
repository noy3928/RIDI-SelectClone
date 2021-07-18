import React from "react";
import { useSelector } from "react-redux";

const TOKEN_NAME = "TOKEN_NAME"

const Permit = (props) => {
  const is_login = useSelector((store) => store.user.is_login);

  const token = (token) => {
    localStorage.getItem(TOKEN_NAME, token);
  }

  const is_token = localStorage.getItem(token) ? true : false;

  if (is_login && is_token) {
    return <>{props.children}</>;
  }

  return null;
}

export default Permit;