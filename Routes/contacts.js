const express = require("express");
const router = express.Router();
const { validateID } = require("../Validation/validations");
const { GetAllContacts, GetTargetContact } = require("../Controllers/contacts");
const { PostOneContact } = require("../Controllers/contacts_post");

router.get("/all", GetAllContacts);
router.get("/:id", validateID, GetTargetContact);
router.post("/add", PostOneContact);

// return router
module.exports = router;
