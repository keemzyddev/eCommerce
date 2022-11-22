import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		products: [
			{
				productId: { type: string },
				quantity: { type: Number, default: 1 },
			},
		],
		amount: {
			type: Number,
			required: true,
		},
		address: {
			type: Object,
		},
		status: {
			type: String,
			default: "pending",
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;