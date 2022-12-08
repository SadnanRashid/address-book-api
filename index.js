const express = require("express");
const port = process.env.PORT || 5000;

const app = express();
//
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

app.get("/", (req, res) => {
  res.send({ msg: "Working..." });
});
