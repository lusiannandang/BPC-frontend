import axios from "axios";

const API_URL = "http://localhost:3000/api/user";

const getAllUser = () => {
  return axios.get(API_URL);
};

const getUserbyId = () => {
  return axios.get(API_URL + `/${id}`);
};

const createUser = () => {
  return axios.post(API_URL);
};

const updateUser = () => {
  return axios.put(API_URL);
};

const deleteUser = () => {
  return axios.delete(API_URL);
};

const userService = {
  getAllUser,
  getUserbyId,
  createUser,
  updateUser,
  deleteUser,
};

export default userService;
