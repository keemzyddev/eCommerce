import StripeService from "../services/stripeService.js";

export const stripePayment = async (req, res) => {
	const { unit_amount, quantity } = req.body;
	try {
		const stripeResponse = StripeService.stripePayment(unit_amount, quantity);
		res.status(200).json(stripeResponse);
	} catch (error) {
		console.log(error);
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};
