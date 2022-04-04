import app from "src/app";
import prisma from "src/config/prisma";
import request from "supertest";
import { invalidUser, validUser } from "test/fixtures/user";

const ROUTE = "/api/v1/users";
const testUser = validUser;
beforeAll(async () => {
  await prisma.user.deleteMany();
});
describe("Test User features", () => {
  describe("Create user", () => {
    test("schema validation", async () => {
      const response = await request(app).post(ROUTE).send(invalidUser);
      expect(response.status).toBe(400);
      expect(response.body.message).toBeDefined();
    });
    test("should create new user", async () => {
      const response = await request(app).post(ROUTE).send(testUser);
      expect(response.status).toBe(201);
      expect(response.body.data.id).toBeDefined();
    });
    test("should fail for existing user", async () => {
      const response = await request(app).post(ROUTE).send(testUser);
      expect(response.status).toBe(400);
    });
  });
});
