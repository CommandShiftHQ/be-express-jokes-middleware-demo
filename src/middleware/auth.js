const auth = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }
  if (token !== "supersecret") {
    return res.status(401).send("Access denied. Invalid token.");
  }
  next();
};

module.exports = auth;
