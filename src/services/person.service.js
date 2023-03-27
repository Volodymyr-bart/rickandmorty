import axios from "../utils/axios";

export const getPersons = () => {
  return axios.get("/");
};
export const getPersonById = (id) => {
  return axios.get(`/${id}`);
};
