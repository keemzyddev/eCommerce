import Cart from "../models/cart.js";

const fetchCarts = async () => {
	try {
		const carts = await Cart.find();
		return carts;
	} catch (error) {
		console.log(error);
	}
};

const createCart = async (newCart) => {
	try {
		const cart = await new Cart(newCart);
		await cart.save();
		return cart;
	} catch (error) {
		console.log(error);
	}
};

const updateCart = async (id, newUpdatedCart) => {
	try {
		const updatedCart = await Cart.findByIdAndUpdate(id, newUpdatedCart);
		return updatedCart;
	} catch (error) {
		console.log(error);
	}
};

const deleteCart = async (id) => {
	try {
		await Cart.findByIdAndDelete(id);
		return;
	} catch (error) {
		console.log(error);
	}
};

const getUserCart = async (userId) => {
	try {
		const cart = await Cart.findOne(userId);
		return cart;
	} catch (error) {
		console.log(error);
	}
};

export default {
	fetchCarts,
	createCart,
	updateCart,
	deleteCart,
	getUserCart,
};
