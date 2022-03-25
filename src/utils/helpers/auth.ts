import argon2 from "argon2";
import bcrypt from "bcryptjs";

class AuthHelper {
  static async hashPassword(
    password: string
  ): Promise<{ hash: string; salt: string }> {
    const salt = await bcrypt.genSalt();
    const hash = await argon2.hash(password + salt);
    return { hash, salt };
  }

  static async comparePassword(
    plainPassword: string,
    salt: string,
    hashedPassword: string
  ): Promise<boolean> {
    return argon2.verify(hashedPassword, plainPassword + salt);
  }
}
export default AuthHelper;
