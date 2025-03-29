import { Request, NextFunction,Response,RequestHandler} from "express";
import jwt from "jsonwebtoken"
import { AuthRequest } from "./types";
import {env} from "../config/env"

export const authMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).json({ msg: "UNAUTHORIZED: NO TOKEN PROVIDED" });
      return next(); // Explicitly end the middleware
    }
    try {
      const decoded = jwt.verify(token, env.JWT_SECRET) as { id: number };
      req.user = decoded;
      next(); // Proceed to the next handler
    } catch (error) {
      console.error("JWT VERIFICATION FAILED", error);
      res.status(401).json({ msg: "INVALID TOKEN" });
    }
  };