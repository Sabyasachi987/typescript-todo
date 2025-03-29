import express from "express";
import { authMiddleware } from "../middleware/authmiddleware";
import { createTodo,getTodo, updateTodo } from "../controllers/todocontroller";


const router = express.Router();

// ✅ Correct way to use middleware
router.post("/create", authMiddleware, createTodo);
router.get("/get",authMiddleware,getTodo)
router.put("/:id",authMiddleware,updateTodo)

export default router;

