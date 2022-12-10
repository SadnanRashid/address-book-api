const express = require("express");
const userRouter = express.Router();
const { GetJWT } = require("../Controllers/jwt");

userRouter.get("/jwt/:email", GetJWT);
// return router
module.exports = userRouter;
