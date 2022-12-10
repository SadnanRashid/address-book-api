const jwt = require("jsonwebtoken");

const verifyJWT = async (req, res, next) => {
  // token retrive
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send("unauthorized access");
  }
  // format of token = "bearer JWtoken"
  // Only read token and split bearer
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
    if (err) {
      return res.status(403).send({ message: "forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
};
