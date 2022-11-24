import express from "express";
import {
	createProduct,
	fetchProducts,
	updateProduct,
	deleteProduct,
	getProduct,
} from "../controllers/productController.js";
import {
	verifyTokenAndAdmin,
	verifyTokenAndAuth,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", fetchProducts);
router.post("/", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/find/:id", getProduct);
export default router;
