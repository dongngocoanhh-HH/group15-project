import axios from "axios";

const API_URL = "http://localhost:3001";  // server json-server

// Lấy danh sách users
export const getUsers = async () => {
  const res = await axios.get(`${API_URL}/users`);
  return res.data;
};

// Thêm user mới
export const addUser = async (user) => {
  const res = await axios.post(`${API_URL}/users`, user);
  return res.data;
};

// Xóa user
export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/users/${id}`);
};
