import { Router } from "express";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";

const router: Router = Router();
router.get("/", (req, res) => {
  res.send("Hello");
});
router.use("/auth", authRouter);
router.use("/users", userRouter);

export default router;
