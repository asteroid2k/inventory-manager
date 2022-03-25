import prisma from "@config/prisma";
import { createUserInput } from "@schema/user.schema";

class UserServices {
  static create(userData: createUserInput) {
    return prisma.user.create({ data: userData });
  }
}
export default UserServices;
