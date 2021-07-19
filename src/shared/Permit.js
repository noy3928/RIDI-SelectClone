import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) => {
  const is_login = useSelector((store) => store.user.is_login);
  const token = localStorage.getItem("is_token");
  const is_token = localStorage.getItem(token) ? true : false;

  if (is_login && is_token) {
    return <>{props.children}</>;
  }

  return null;
}

export default Permit;