import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { db } from "./config/db.js";
import { loginValidation } from "./middleware/errorHandler.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";
import stripeRoute from "./routes/stripeRoute.js";
dotenv.config();

db();

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
// app.use(loginValidation);

app.get("/secret", async (req, res) => {
  try {
    const intent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "usd",
    });
    res.json({ client_secret: intent.client_secret });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
