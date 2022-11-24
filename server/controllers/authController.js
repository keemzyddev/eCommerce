import AuthService from "../services/authService.js";

export const createUser = async (req, res) => {
	const { username, email, password } = req.body;
	try {
		let user = await AuthService.createUser(username, email, password);
		return res.status(201).json(user);
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

export const loginUser = async (req, res) => {
	const { username, password } = req.body;
	try {
		let user = await AuthService.loginUser(username, password);

		return res.status(200).json(user);
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};
