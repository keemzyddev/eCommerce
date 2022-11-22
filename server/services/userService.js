import User from "../models/User.js";

export const fetchUsers = async () => {
	try {
		const user = User.find();
		return user;
	} catch (error) {
		console.log(error);
	}
};
