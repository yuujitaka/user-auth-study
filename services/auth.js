import axios from "axios";

const API_KEY = "AIzaSyAsps1ToZdnXo75CRCx-kKLV9jl5m65hZ0";

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};

export const createUser = async (email, password) => {
  await authenticate("signUp", email, password);
};
