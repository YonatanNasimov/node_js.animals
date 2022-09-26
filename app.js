const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");

const {routesInit} = require("./routes/config_routes")
require("./db/mongoconnect");

const app = express();

// Gives access to all domains to access our server
app.use(cors());
// to get body
app.use(express.json());
// Public folder to main folder
app.use(express.static(path.join(__dirname,"public")))

routesInit(app);

const server = http.createServer(app);

console.log("env",process.env.TEST)

let port = process.env.PORT || 3000
server.listen(port);