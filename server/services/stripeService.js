import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_KEY);

const getClientSecret = async () => {
  try {
    return { publishableKey: process.env.STRIPE_PUBLISHABLE_KEY };
  } catch (error) {
    console.log(error);
  }
};

const stripePayment = async () => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    console.log(error);
  }
};

export default {
  getClientSecret,
  stripePayment,
};
