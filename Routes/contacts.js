const express = require("express");
const router = express.Router();
const {
  validateID,
  validatePost,
  isArray,
} = require("../Validation/validations");
const {
  GetAllContacts,
  GetTargetContact,
  UpdateContact,
} = require("../Controllers/contacts");
const {
  PostOneContact,
  PostManyContact,
} = require("../Controllers/contacts_post");

router.get("/all", GetAllContacts);
router.get("/:id", validateID, GetTargetContact);
router.post("/add", validatePost, PostOneContact);
router.post("/addmany", PostManyContact);
router.put("/update/:id", validateID, UpdateContact);
// return router
module.exports = router;
