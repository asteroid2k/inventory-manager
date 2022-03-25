import { Router } from "express";
import AuthController from "@controllers/auth.controller";
const { login } = AuthController;

const router: Router = Router();

router.post("/login", login);

export default router;
