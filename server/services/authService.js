import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (username, email, password) => {
	try {
		const salt = await bcrypt.genSalt(16);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = new User({
			username,
			email,
			password: hashedPassword,
		});
		await user.save();
		return user;
	} catch (error) {
		console.log(error);
	}
};
