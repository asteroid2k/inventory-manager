import AuthHelper from "../../../src/utils/helpers/auth";
import { password } from "../../fixtures/user";

const { hashPassword, comparePassword } = AuthHelper;

describe("Test Utilities", () => {
  describe("Auth Helper", () => {
    let saltVal = "",
      hashVal = "";
    test("hash password method", async () => {
      const { salt, hash } = await hashPassword(password);
      expect(salt).toBeDefined();
      expect(hash).toBeDefined();
      saltVal = salt;
      hashVal = hash;
    });
    test("compare password method", async () => {
      const match = await comparePassword(password, saltVal, hashVal);
      expect(match).toBe(true);
    });

    test("compare password method [FAIL with wrong password]", async () => {
      const match = await comparePassword(password + "p", saltVal, hashVal);
      expect(match).toBe(false);
    });
  });
});
