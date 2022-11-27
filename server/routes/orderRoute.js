import express from "express";
import {
	createOrder,
	fetchOrders,
	updateOrder,
	deleteOrder,
	getUserOrder,
	getOrderIncome,
} from "../controllers/orderController.js";
import {
	auth,
	verifyTokenAndAdmin,
	verifyTokenAndAuth,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyTokenAndAdmin, fetchOrders);
router.post("/", auth, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/find/:userId", verifyTokenAndAuth, getUserOrder);
router.get("/income", verifyTokenAndAdmin, getOrderIncome);

export default router;
