import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config.js";

export function userAuth(req: Request, res: Response, next: NextFunction) {
  // console.log(req.headers);
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({
      message: "Invalid authorization header",
    });
  }

  const token = authHeader.split(" ")[1]!;

  if (!token) {
    return res.status(401).json({
      message: "Token missing",
    });
  }

  try {
    const decode = jwt.verify(token, config.jwt_secret_user!);
    (req as any).user = decode;
    next();
  } catch (err) {
    // console.error(err);
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
}
