import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY);

// const stripePayment = async (tokenId, amount, quantity) => {
const stripePayment = async () => {
	try {
		// stripe.charges.create(
		// 	{
		// 		source: tokenId,
		// 		amount: amount,
		// 		currency: "usd",
		// 	},
		// 	(stripeError, stripeResponse) => {
		// 		if (stripeError) {
		// 			throw {
		// 				status: 500,
		// 				message: stripeError,
		// 			};
		// 		} else {
		// 			return stripeResponse;
		// 		}
		// 	}
		// );

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price_data: {
						currency: "usd",
						product_data: {
							name: "T-shirt",
						},
						unit_amount: 2000,
					},
					quantity: 1,
				},
			],
			mode: "payment",
			success_url: `http://localhost:3000/success`,
			cancel_url: `http://localhost:3000/pay`,
		});

		res.json({ url: session.url });

		// const paymentIntent = await stripe.paymentIntents.create({
		// 	amount: 2000,
		// 	currency: "usd",
		// 	automatic_payment_methods: {
		// 		enabled: true,
		// 	},
		// });
		// res.status(200).json({ clientSecret: paymentIntent.clientSecret });
	} catch (error) {
		console.log(error);
		throw { status: error?.status || 500, message: error?.message || error };
	}
};

export default {
	stripePayment,
};
