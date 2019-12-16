const server = require("./server.js");
const request = require("supertest");

describe("server.js", () => {
  describe("GET /", () => {
    it("Should return 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
  });
});
