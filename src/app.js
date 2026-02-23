const express = require("express");
const morgan = require("morgan");

const authRouter = require("./modules/auth/auth.routes");
const jobRouter = require("./modules/jobs/job.routes");

const app = express();

// middlerware
app.use(express.json());
app.use(morgan("dev"));

// import routes

app.use("/auth/", authRouter);
app.use("/job/", jobRouter);

const errorMiddleware = require("./middlewares/error.middleware");
const notfound = require("./middlewares/notFound.middleware");

app.use(errorMiddleware);
app.use(notfound);

module.exports = app;
