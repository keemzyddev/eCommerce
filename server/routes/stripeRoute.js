import express from "express";
import { stripePayment } from "../controllers/stripeController.js";

const router = express.Router();

router.post("/payment", stripePayment);

export default router;
