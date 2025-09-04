import { Router } from "express";
import { Request, Response } from "express";

//Routes 
import authRoutes from "./auth"

// Root route
const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello, world!",
    status: "success",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

router.use('/auth', authRoutes);

export default router;
