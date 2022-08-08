const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const jokesRouter = require("./routes/jokes");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(morgan("tiny"));

app.use("/jokes", jokesRouter);

app.get("/", cors(), (_, res) => {
  res.send("Hello World!");
});

module.exports = app;
