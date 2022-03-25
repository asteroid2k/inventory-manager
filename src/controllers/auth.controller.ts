import { Request, Response } from "express";
/**
 *
 */
class AuthController {
  static async login(req: Request, res: Response) {
    res.send("Login");
  }
}
export default AuthController;
