import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_KEY);
import {
  getClientSecret,
  stripePayment,
} from "../controllers/stripeController.js";

const router = express.Router();

router.get("/publishablekey", getClientSecret);
router.post("/payment", stripePayment);
const app = express();

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
  });

  res.redirect(303, session.url);
});

export default router;
