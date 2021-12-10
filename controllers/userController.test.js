const { welcome } = require("./userController");
const express = require("express");
const User = require("../models/user");
const request = require("supertest");
const app = require("../app");

describe("welcome", () => {
  test("responds with correct welcome message", async () => {
    const user = User.create({
      phoneNumber: "+10000000000",
      firstName: "John",
      lastName: "Doe",
    });

    return request(app)
      .get("/welcome")
      .send({ phoneNumber: user.phoneNumber })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
