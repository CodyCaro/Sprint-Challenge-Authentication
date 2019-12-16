const server = require("../api/server");
const db = require("../database/dbConfig");
const request = require("supertest");

let testToken = "";

describe("Get all jokes", () => {
  it("should return jokes", async () => {
    const res = await request(server)
      .get("/api/jokes")
      .set("authorization", `${testToken}`);

    console.log(testToken);

    expect(res.status).toBe(200);
  });

  beforeEach(async () => {
    await db("users").truncate();
    await request(server)
      .post("/api/auth/register")
      .send({ username: "CodyCaro", password: "password" });

    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "CodyCaro", password: "password" });

    testToken = res.body.token;
  });
});

describe("Wrong Token", () => {
  it("should not return jokes", async () => {
    const res = await request(server)
      .get("/api/jokes")
      .set("authorization", "kfjdlsajflkdsajlkfsdaj");

    console.log(res.status.message);

    expect(res.status).toBe(401);
  });

  beforeEach(async () => {
    await db("users").truncate();
    await request(server)
      .post("/api/auth/register")
      .send({ username: "CodyCaro", password: "password" });

    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "CodyCaro", password: "password" });

    testToken = res.body.token;
  });
});
