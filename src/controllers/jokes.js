const db = require("../db");

exports.get = async (_, res) => {
  const response = await db.query("SELECT * FROM jokes");
  res.json(response.rows);
};

exports.create = async (req, res) => {
  const { rows: [joke] } = await db.query('INSERT INTO jokes (name, content) VALUES ($1, $2) RETURNING *',
    [req.body.name, req.body.content])

  res.status(201).json(joke);
};

exports.getRandom = async (_, res) => {
  const response = await db.query("SELECT * FROM jokes");
  var jokes = response.rows;
  var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
};