const express = require("express");
const morgan = require("morgan");
const jokesRouter = require("./routes/jokes");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(morgan("tiny"));

app.use("/jokes", jokesRouter);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

module.exports = app;
