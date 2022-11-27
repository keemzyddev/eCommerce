import CartService from "../services/cartService.js";

export const fetchCarts = async (req, res) => {
	try {
		const carts = await CartService.fetchCarts();
		res.status(200).json(carts);
	} catch (error) {
		console.log(error);
	}
};

export const createCart = async (req, res) => {
	const { body } = req;
	const newCart = {
		userId: body.userId,
		products: body.products,
	};
	try {
		const cart = await CartService.createCart(newCart);
		res.status(201).json(cart);
	} catch (error) {
		console.log(error);
	}
};

export const updateCart = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	const newUpdatedCart = {
		userId: body.userId,
		products: body.products,
	};
	try {
		const updatedCart = await CartService.updateCart(id, newUpdatedCart);
		res.status(200).json(updatedCart);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

export const deleteCart = async (req, res) => {
	const { id } = req.params;
	try {
		await CartService.deleteCart(id);
		res.status(200).json("Cart deleted!");
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

export const getUserCart = async (req, res) => {
	const { userId } = req.params;
	try {
		const cart = await CartService.getUserCart(userId);
		res.status(200).json(cart);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};
