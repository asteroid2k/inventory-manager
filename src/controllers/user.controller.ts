import { Request, Response } from "express";
import UserServices from "@services/user.service";

const { create } = UserServices;

class UserController {
  static async createUser(req: Request, res: Response) {
    const user = await create(req.body);
    res.json({ user });
  }
}
export default UserController;
