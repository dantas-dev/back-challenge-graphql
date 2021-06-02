require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
  debug: process.env.DEBUG
});

console.log("port", process.env.SRV_PORT);