const express = require("express");
const router = express.Router();

const { GetAllContacts } = require("../Controllers/contacts");

router.get("/all", GetAllContacts);

// return router
module.exports = router;
