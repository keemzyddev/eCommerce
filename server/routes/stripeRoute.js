import express from "express";
import {
  getClientSecret,
  stripePayment,
} from "../controllers/stripeController.js";

const router = express.Router();

router.get("/publishablekey", getClientSecret);
router.post("/payment", stripePayment);

export default router;
