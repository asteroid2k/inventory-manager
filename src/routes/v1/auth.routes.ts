import { Router } from "express";
import AuthController from "@controllers/auth.controller";
import middlewares from "../../middleware";
import { loginSchema } from "src/schema/auth.schema";

const { login } = AuthController;
const {
  verifyUser: { checkUserExists },
  validateResource: { validateResourceSchema },
} = middlewares;

const router: Router = Router();

router.post(
  "/login",
  validateResourceSchema(loginSchema),
  checkUserExists(true),
  login
);

export default router;
