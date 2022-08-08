const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const jokesRouter = require("./routes/jokes");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(helmet());

app.use("/jokes", jokesRouter);

app.get("/", cors(), (_, res) => {
  res.send("Hello World!");
});

module.exports = app;
