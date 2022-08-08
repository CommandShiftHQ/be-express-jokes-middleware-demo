const express = require("express");
const jokesRouter = require("./routes/jokes");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/jokes", jokesRouter);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

module.exports = app;
