import { Request, Response } from "express";
import helpers from "@utils/helpers";
import AuthServices from "src/services/auth.service";
import { User } from "@prisma/client";

const {
  ResponseHelper: { sendSuccessResponse }
} = helpers;
const { authenticate } = AuthServices;
/**
 * Controller for handling authentication
 */
class AuthController {
  /**
   * authenticates user and generates jwt token
   * @static
   * @param req - request object with user
   * @param res - response object
   * @returns {JSON} - returns JSON response with success message and jwt token
   */
  static async login(req: Request<{ user: User }>, res: Response) {
    const { user } = req.params;
    const { password } = req.body;
    const token = await authenticate(user, password);
    return sendSuccessResponse(res, {
      message: "Authenticated",
      data: { token }
    });
  }
}
export default AuthController;
