import prisma from "@config/prisma";
import { PrismaClient, User } from "@prisma/client";
import { createUserData } from "src/types";

type findKey = "email" | "id";
const excludeFields = ["password", "salt"];

function Users() {
  return Object.assign(new PrismaClient().user, {
    /**
     * Creates a user in database
     * @param {createUserData} data - data for creating user
     * @returns {Promise<User|Error>} - resolves to created user object or error
     */
    create(data: createUserData) {
      return prisma.user.create({ data });
    },
    /**
     * Finds user by given key and value
     * @param {string} key - field/attribute of user to query by
     * @param {any} value - expected value of specified field
     * @returns
     */
    findBy(key: findKey, value: string) {
      const queryParam: Record<string, unknown> = {};
      queryParam[key] = value;
      return prisma.user.findFirst({ where: queryParam });
    }
  });
}

/**
 * Removes fields from user object
 * @param {User} user - user object
 * @param {string[]} keys - array of fields to remove from user object
 * @returns
 */
export function exclude(user: Record<string, unknown>, keys = excludeFields) {
  for (const key of keys) {
    delete user[key];
  }
  return user;
}

const UserModel = Users();

export default UserModel;
