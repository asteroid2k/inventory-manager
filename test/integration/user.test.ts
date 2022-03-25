import app from "../../src/app";
import request from "supertest";

const ROUTE = "/api/v1/users";
describe("Test User features", () => {
  describe("Create user", () => {
    test("schema validation", async () => {
      const response = await request(app).post(ROUTE);
      expect(response.status).toBe(400);
      expect(response.body.message).toBeDefined();
    });
  });
});
