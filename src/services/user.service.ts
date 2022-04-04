import UserModel from "../models/user.model";
const { findBy } = UserModel;

/**
 * Provides services for User resource
 */
class UserServices {
  /**
   *
   * @param {string} email - email value
   * @returns {Promise<User|null>}
   */
  static findByEmail(email: string) {
    return findBy("email", email);
  }
}
export default UserServices;
