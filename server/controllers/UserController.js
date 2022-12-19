import User from "../models/User.js";
import UserService from "../services/userService.js";
// import { fetchUsers } from "../services/userService.js";

export const fetchUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await UserService.fetchUsers(query)
      : await UserService.fetchUsers();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const updateUser = async (req, res) => {
  const { username, email, password } = req.body;
  const { id } = req.params;
  try {
    const updatedUser = await UserService.updateUser(
      id,
      username,
      email,
      password,
      img
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UserService.deleteUser(id);
    res.status(200).json("User deleted");
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserService.getUser(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    // res
    // 	.status(error?.status || 500)
    // 	.json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const getUserStat = async (req, res) => {
  try {
    const data = await UserService.getUserStat();
    res.status(200).json({ UserStat: data });
  } catch (error) {
    console.log(error);
    // res
    // 	.status(error?.status || 500)
    // 	.json({ status: "FAILED", data: { error: error?.message || error } });
  }
};
