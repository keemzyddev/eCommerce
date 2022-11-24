import Product from "../models/Product.js";

const fetchProducts = async (qNew, qCategory) => {
	let products;
	try {
		if (qNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(1);
		} else if (qCategory) {
			products = await Product.find({
				categories: {
					$in: [qCategory],
				},
			});
		} else {
			products = await Product.find();
		}
		return products;
	} catch (error) {
		console.log(error);
	}
};

const createProduct = async (newProduct) => {
	try {
		const product = await new Product(newProduct);
		await product.save();
		return product;
	} catch (error) {
		console.log(error);
	}
};

const updateProduct = async (id, newUpdatedProduct) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			id,
			newUpdatedProduct
		);
		return updatedProduct;
	} catch (error) {
		console.log(error);
	}
};

const deleteProduct = async (id) => {
	try {
		await Product.findByIdAndDelete(id);
		return;
	} catch (error) {
		console.log(error);
	}
};

const getProduct = async (id) => {
	try {
		const product = await Product.findById(id);
		return product;
	} catch (error) {
		console.log(error);
	}
};

export default {
	fetchProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	getProduct,
};
