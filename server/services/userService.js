import User from "../models/User.js";
import bcrypt from "bcrypt";

const fetchUsers = async (query) => {
	try {
		const user = query
			? await User.find().sort({ _id: -1 }).limit(1)
			: await User.find();
		return user;
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error };
	}
};

const updateUser = async (id, username, email, password) => {
	try {
		const hashedPassword = await bcrypt.hash(password, 16);

		const updatedUser = await User.findByIdAndUpdate(
			id,
			{ username, email, password: hashedPassword },
			{ new: true }
		);
		return updatedUser;
	} catch (error) {
		// throw { status: error?.status || 500, message: error?.message || error };
		console.log(error);
	}
};

const deleteUser = async (id) => {
	try {
		await User.findByIdAndDelete(id);
		return "User deleted!";
	} catch (error) {
		// throw { status: error?.status || 500, message: error?.message || error };
		console.log(error);
	}
};

const getUser = async (id) => {
	try {
		const user = await User.findById(id);
		const { password, ...others } = user._doc;
		return others;
	} catch (error) {
		// throw { status: error?.status || 500, message: error?.message || error };
		console.log(error);
	}
};

const getUserStat = async (id) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear - 1));
	try {
		const data = await User.aggregate([
			{ $match: { createdAt: { $gte: lastYear } } },
			{
				$project: {
					month: { $month: "$createdAt" },
				},
			},
			{
				$group: {
					_id: "$month",
					total: { $sum: 1 },
				},
			},
		]);
		return data;
	} catch (error) {
		// throw { status: error?.status || 500, message: error?.message || error };
		console.log(error);
	}
};

export default {
	fetchUsers,
	updateUser,
	deleteUser,
	getUser,
	getUserStat,
};
