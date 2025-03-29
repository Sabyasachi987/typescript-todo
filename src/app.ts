import express from "express";
import cors from "cors";
import { json } from "body-parser";
import userRoutes from "./routes/userRoutes";
import todoRoutes from "./routes/todoRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/todo", todoRoutes);

export default app;
