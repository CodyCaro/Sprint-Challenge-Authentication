const Users = require("./users-model");
const db = require("../database/dbConfig");

describe("users model", () => {
  describe("add", () => {
    it("should add a new user to the database", async () => {
      await Users.add({
        username: "CodyC",
        password: "password"
      });
    });

    it("should return the user inserted", async () => {
      let user = await Users.add({
        username: "CodyC",
        password: "password"
      });

      expect(user.username).toBe("CodyC");
    });

    beforeEach(async () => {
      await db("users").truncate();
    });
  });
});
