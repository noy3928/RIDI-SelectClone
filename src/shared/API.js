import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const api = axios.create({
  baseURL: `http://3.36.103.48/`
});

const USER_TOKEN = cookies.get("refresh_token");
console.log("------토큰을 저장합니다",USER_TOKEN)
api.defaults.headers.common['Authorization'] = USER_TOKEN;

export default api;
