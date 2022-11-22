// import UserService from "../services/authService.js";
import { createUser } from "../services/authService.js";

export const addUser = async (req, res) => {
	const { username, email, password } = req.body;
	try {
		let user = await createUser(username, email, password);
		return res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};
