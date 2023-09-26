const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
require('dotenv').config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

describe("GET", () => {
    it("should return all blogs", async () => {
      const res = await request(app).get("/blogs");
      expect(res.status).toBe(200);
      expect(res.text.length).toBeGreaterThan(0);
    });
  });

describe("DELETE /blogs/:id", () => {
  it("should delete a blog post", async () => {
    const res = await request(app).delete(
      "/blogs/6512b957f08d8d87c788d5c2"
    );
    expect(res.statusCode).toBe(200);
  });
});