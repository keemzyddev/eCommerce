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
router.put("/user/:id", verifyTokenAndAuth, updateUser);
router.delete("/user/:id", verifyTokenAndAuth, deleteUser);
router.get("/user/:id", verifyTokenAndAdmin, getUser);
router.get("/stats", verifyTokenAndAdmin, getUserStat);

export default router;
