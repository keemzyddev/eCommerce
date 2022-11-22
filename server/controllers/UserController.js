import UserService from "../services/index.js";
// import { fetchUsers } from "../services/userService.js";

export const getUsers = async (req, res) => {
	try {
		const users = await UserService.fetchUsers();
		res.status(200).json(users);
	} catch (error) {}
};
