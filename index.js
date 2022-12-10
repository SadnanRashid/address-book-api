const express = require("express");
const port = process.env.PORT || 5000;
require("dotenv").config();

const app = express();
//
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

// get router
const contactsRouter = require("./Routes/contacts");
app.use("/api/contacts", contactsRouter);
// Get user router
const userRouter = require("./Routes/users");
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send({ message: "Working..." });
});
