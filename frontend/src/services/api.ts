import axios from "axios";

const url: string =
  process.env.REACT_APP_ENVIROMENT! === "dev"
    ? process.env.REACT_APP_DEV_URL!
    : process.env.REACT_APP_PROD_URL!;

export const api = axios.create({
  baseURL: url,
  timeout: 10000,
});
