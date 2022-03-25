import config from "../config";
import { Request, Response, NextFunction } from "express";
import ApiError from "@utils/errors/api.error";
import constants from "@utils/constants";

const { RESOURCE_EXISTS, RESOURCE_NOT_FOUND } = constants;
const { prisma } = config;

const checkUserExists =
  (isFound = true) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    const exists = await prisma.user
      .findFirst({ where: { email } })
      .then((r) => Boolean(r));
    if (isFound && !exists) {
      throw new ApiError({
        message: RESOURCE_NOT_FOUND("User"),
      });
    }
    if (!isFound && exists) {
      throw new ApiError({
        message: RESOURCE_EXISTS("User"),
      });
    }
    next();
  };

export default { checkUserExists };
