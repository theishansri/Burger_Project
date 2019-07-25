import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-35b4f.firebaseio.com/"
});

export default instance;
