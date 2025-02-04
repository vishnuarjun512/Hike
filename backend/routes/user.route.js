import express from "express";
import { getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authenticateUser, getAllUsers);
router.get("/:id", authenticateUser, getUserById);
router.put("/:id", authenticateUser, updateUser);
router.delete("/:id", authenticateUser, deleteUser);

export default router;
