import express from "express";
import {
	createCart,
	fetchCarts,
	updateCart,
	deleteCart,
	getUserCart,
} from "../controllers/cartController.js";
import {
	auth,
	verifyTokenAndAdmin,
	verifyTokenAndAuth,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyTokenAndAdmin, fetchCarts);
router.post("/", auth, createCart);
router.put("/:id", verifyTokenAndAuth, updateCart);
router.delete("/:id", verifyTokenAndAuth, deleteCart);
router.get("/find/:userId", verifyTokenAndAuth, getUserCart);
export default router;
