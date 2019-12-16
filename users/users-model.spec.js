const Users = require("./users-model");
const db = require("../database/dbConfig");

describe("users model", () => {
  describe("add", () => {
    it("should add a new user to the database", async () => {
      const randomUsername = generateRandomString();
      const randomPassword = generateRandomString();

      await Users.add({
        username: randomUsername,
        password: randomPassword
      });
    });

    it("should return the user inserted", async () => {
      const randomUsername = generateRandomString();
      const randomPassword = generateRandomString();

      let user = await Users.add({
        username: randomUsername,
        password: randomPassword
      });

      expect(user.username).toBe(randomUsername);
    });
  });
});

function generateRandomString() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}
