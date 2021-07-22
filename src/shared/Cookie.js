const getCookie = (name) => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

const setCookie = (name, value) => {
  let date = new Date();
  date.setTime(date.getTime() + 60 * 60 * 1000 * 6);

  document.cookie = `${name}=${value}; expires=${date.toUTCString()};path=/`;
}


const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  console.log("쿠키삭제", date);
  document.cookie = name + "=; expires=" + date;
}

export { getCookie, setCookie, deleteCookie };