const express = require("express");
const router = express.Router();

const { GetAllContacts, GetTargetContact } = require("../Controllers/contacts");

router.get("/all", GetAllContacts);
router.get("/:id", GetTargetContact);

// return router
module.exports = router;
