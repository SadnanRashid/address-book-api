const express = require("express");
const router = express.Router();
const { validateID } = require("../Validation/validations");

const { GetAllContacts, GetTargetContact } = require("../Controllers/contacts");

router.get("/all", GetAllContacts);
router.get("/:id", validateID, GetTargetContact);

// return router
module.exports = router;
