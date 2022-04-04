import { Response, NextFunction, Request } from "express";
import ApiError from "@utils/errors/api.error";
import constants from "@utils/constants";
import { User } from "@prisma/client";
import UserModel from "../models/user.model";
const { RESOURCE_EXISTS, INVALID_AUTH_CREDENTIALS } = constants;

/**
 * Checks if user exists
 * @param {boolean} isFound - specify whether error is thrown if user is found or not
 */
const checkUserExists =
  (isFound = true) =>
  async (
    req: Request<{ user: User | null }>,
    _res: Response,
    next: NextFunction
  ) => {
    const { email } = req.body;
    const user = await UserModel.findFirst({ where: { email } });

    if (isFound && !user) {
      throw new ApiError({
        message: INVALID_AUTH_CREDENTIALS
      });
    }
    if (!isFound && user) {
      throw new ApiError({
        message: RESOURCE_EXISTS("User")
      });
    }
    req.params.user = user;
    next();
  };

export default { checkUserExists };
