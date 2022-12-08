import StripeService from "../services/stripeService.js";

export const getClientSecret = async (req, res) => {
  try {
    const publishableKey = await StripeService.getClientSecret();
    res.json({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
  } catch (error) {
    res.send(error);
  }
};

export const stripePayment = async (req, res) => {
  const { price } = req.body;
  try {
    const paymentIntent = await StripeService.stripePayment(price);
    res.json(paymentIntent);
  } catch (error) {
    console.log(error);
    res
      .status(error?.status || 500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};
