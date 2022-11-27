import { useState, useEffect } from "react";
// import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import {
	useStripe,
	useElements,
	PaymentElement,
} from "@stripe/react-stripe-js";

const Pay = () => {
	const stripe = useStripe();
	const elements = useElements();

	useEffect(() => {
		makeRequest();
	}, []);

	const makeRequest = async () => {
		try {
			const res = await axios.post(
				"http://localhost:5000/api/checkout/payment",
				{
					amount: 2000,
				},
				{
					headers: {
						Authorization:
							"Bearer sk_test_51M85IuFNzqFAzYPtEm0zr6v2qxVShA4hVwXernlKPJ8wWsIFLZRonudxtZyjPMMIwbOFqGKGAB8RY1IhBT6hIzcq00hCrELGIh",
					},
				}
			);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (event) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		// event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		const result = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			elements,
			confirmParams: {
				return_url: "https://localhost:3000/success",
			},
		});

		if (result.error) {
			// Show error to your customer (for example, payment details incomplete)
			console.log(result.error.message);
		} else {
			// Your customer will be redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer will be redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}
	};

	return (
		<div>
			<form id="secret" onSubmit={handleSubmit}>
				<PaymentElement />
				<button>Pay Now</button>
			</form>
		</div>
	);
};

export default Pay;
