import { Router } from "express";
import UserController from "@controllers/user.controller";
import { createUserSchema } from "@schema/user.schema";
import middleware from "../../middleware";
const {
  validateResource: { validateResourceSchema },
  verifyUser: { checkUserExists },
} = middleware;

const { createUser } = UserController;

const router: Router = Router();

router.get("/", (req, res) => {
  res.send("Users");
});
router.post(
  "/",
  validateResourceSchema(createUserSchema),
  checkUserExists(false),
  createUser
);

export default router;
