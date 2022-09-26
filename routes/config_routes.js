const indexR = require("./index");
const usersR = require("./users");
const animalR = require("./animals");

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/animals",animalR)
}