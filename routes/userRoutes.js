const userController = require("../controllers/userController");

const userRoutes = (app) => {
  app.get("/welcome", userController.welcome);
};

module.exports = userRoutes;
