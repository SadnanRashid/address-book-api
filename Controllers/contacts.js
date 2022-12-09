const {
  QueryListOfContacts,
  QueryTargetContact,
  QueryUpdateContact,
} = require("../Services/address");

const GetAllContacts = async (req, res) => {
  // Get all contacts in the collection
  const contactList = await QueryListOfContacts();
  return res.json(contactList);
};
// Get one contact with ID
const GetTargetContact = async (req, res) => {
  const targetContact = await QueryTargetContact(req.params.id);
  if (!targetContact) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.send(targetContact);
};
// Update Contact
const UpdateContact = async (req, res) => {
  const updateResult = await QueryUpdateContact(
    req.body.element_id,
    req.body.element_to_update,
    req.body.update_data
  );
  res.json(updateResult);
};

module.exports = { GetAllContacts, GetTargetContact };
