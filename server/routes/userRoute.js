import express from "express";
import {
	fetchUsers,
	updateUser,
	deleteUser,
	getUser,
	getUserStat,
} from "../controllers/UserController.js";
import {
	verifyTokenAndAdmin,
	verifyTokenAndAuth,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyTokenAndAdmin, fetchUsers);
router.put("/:id", verifyTokenAndAuth, updateUser);
router.delete("/:id", verifyTokenAndAuth, deleteUser);
router.get("/:id", verifyTokenAndAdmin, getUser);
router.get("/stats", verifyTokenAndAdmin, getUserStat);

export default router;
