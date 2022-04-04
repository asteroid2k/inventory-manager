import { Request, Response } from "express";
import Helpers from "@utils/helpers";
import constants from "@utils/constants";
import UserModel from "../models/user.model";

const { create } = UserModel;

const {
  AuthHelper: { hashPassword },
  ResponseHelper: { sendSuccessResponse },
} = Helpers;
const { RESOURCE_CREATED } = constants;

/**
 * Controller for handling user requests
 */
class UserController {
  /**
   * Creates a new user
   * @static
   * @param req - request object
   * @param res - response object
   * @returns {JSON} - JSON response with success message and user id
   */
  static async createUser(req: Request, res: Response) {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const { hash, salt } = await hashPassword(password);
    const userData = {
      firstName,
      lastName,
      email,
      salt,
      phoneNumber,
      password: hash,
    };
    const user = await create(userData);
    sendSuccessResponse(res, {
      message: RESOURCE_CREATED("User"),
      status: 201,
      data: { id: user.id },
    });
  }
}
export default UserController;
