import app from "src/app";
import request from "supertest";
import UserModel from "src/models/user.model";
import prisma from "src/config/prisma";
import { seedUser } from "../fixtures/user";

const api = request(app);

const ROUTE = "/api/v1/auth";

beforeAll(async () => {
  await prisma.user.deleteMany();
  await UserModel.create(seedUser);
});
describe("Test Authentication Features", () => {
  describe("Login", () => {
    test("schema validation", async () => {
      const response = await api.post(`${ROUTE}/login`);
      expect(response.status).toBe(400);
      expect(response.body.message).toBeDefined();
    });
    test("should pass given valid credentials", async () => {
      const { email } = seedUser;
      const response = await api
        .post(`${ROUTE}/login`)
        .send({ email, password: "password" });
      expect(response.status).toBe(200);
      expect(response.body.data.token).toBeDefined();
    });
  });
});
