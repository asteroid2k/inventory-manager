import helpers from "src/utils/helpers";
import ApiError from "src/utils/errors/api.error";
import { User } from "@prisma/client";
const {
  AuthHelper: { comparePassword, generateJwt }
} = helpers;

/**
 * Provides Authentication services
 */
class AuthServices {
  /**
   * Verifies user password and generates jwt token
   * @param user - user object containing password and salt
   * @param {string} password - plain password input
   * @returns {string} - jwt token
   */
  static async authenticate(user: User, password: string) {
    const match = await comparePassword(password, user.salt, user.password);
    if (!match) {
      throw new ApiError({ message: "Invalid credentials" });
    }
    return generateJwt(user, "accessTokenKey", { expiresIn: "1h" });
  }
}
export default AuthServices;
