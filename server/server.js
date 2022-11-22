import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { db } from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
// import productRoute from "./routes/productRoute.js";
// import cartRoute from "./routes/cartRoute.js";
// import orderRoute from "./routes/orderRoute.js";

dotenv.config();

db();

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", authRoute);
app.use("/api", userRoute);
// app.use("/api", productRoute);
// app.use("/api", cartRoute);
// app.use("/api", orderRoute);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
