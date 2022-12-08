// MongoDB ID must be 24 in length
const validateID = (req, res, next) => {
  if (req.params.id.length !== 24) {
    return res.status(403).json({ message: "invalid format" });
  }
  next();
};

module.exports = { validateID };
