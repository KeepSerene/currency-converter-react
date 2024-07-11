import Axios from "axios";

export const axiosAPI = Axios.create({
  baseURL: "https://api.apilayer.com/fixer",
});
