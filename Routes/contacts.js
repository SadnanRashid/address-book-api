const express = require("express");
const router = express.Router();
const {
  validateID,
  validatePost,
  isArray,
  validatePagenation,
} = require("../Validation/validations");
const {
  GetAllContacts,
  GetPaginateContacts,
  GetTargetContact,
  UpdateContact,
  DeleteContact,
} = require("../Controllers/contacts");
const {
  PostOneContact,
  PostManyContact,
} = require("../Controllers/contacts_post");

router.get("/all", GetAllContacts);
router.get("/get", validatePagenation, GetPaginateContacts);
router.get("/:id", validateID, GetTargetContact);
router.post("/add", validatePost, PostOneContact);
router.post("/addmany", PostManyContact);
router.put("/update/:id", validateID, UpdateContact);
router.delete("/delete/:id", validateID, DeleteContact);
// return router
module.exports = router;
