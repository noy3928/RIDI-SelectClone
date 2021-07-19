import axios from "axios";

const api = axios.create({
  baseURL: `http://3.36.103.48/`
});

const userAPI = {

}

export { userAPI, api };
