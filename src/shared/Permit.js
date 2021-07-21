import React from "react";
import { useSelector } from "react-redux";
import { getCookie, setCookie, deleteCookie } from "./Cookie";
import jwtDecode from "jwt-decode";

const Permit = (props) => {
  const is_login = useSelector((store) => store.user.is_login);
  const username = useSelector((store) => store.user.username);

  const token = getCookie("refresh_token");
  const decodeId = jwtDecode(token).sub;

  if (is_login && username === decodeId) {
    return <>{props.children}</>;
  }

  return null;
}

export default Permit;