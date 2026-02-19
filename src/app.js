const express = require("express");
const morgan = require("morgan");

const app = express();

// middlerware
app.use(express.json());
app.use(morgan("dev"));

const errorMiddleware = require("./middlewares/error.middleware");
const notfound = require("./middlewares/notFound.middleware");

app.use(errorMiddleware);
app.use(notfound);

module.exports = app;
