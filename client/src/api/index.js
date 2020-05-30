import axios from "axios";

function addUser(userData) {
  console.log({ userData });
  return axios.post("/api/user", userData);
}

function signIn(credentials) {
  console.log({ credentials });
  return axios.post("/api/user/login", credentials);
}

export default { addUser, signIn };
