const {
  QueryListOfContacts,
  QueryTargetContact,
  QueryUpdateContact,
  QueryDeleteContact,
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
  const id = req.params.id;
  console.log(id);
  const updateResult = await QueryUpdateContact(
    id,
    req.body.element_to_update,
    req.body.update_data
  );
  res.json(updateResult);
};
// Delete contact
const DeleteContact = async (req, res) => {
  const deleteResult = await QueryDeleteContact(req.params.id);
  console.log(deleteResult);
  res.send(deleteResult);
};

module.exports = {
  GetAllContacts,
  GetTargetContact,
  UpdateContact,
  DeleteContact,
};
