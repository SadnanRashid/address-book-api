const {
  QueryListOfContacts,
  QueryTargetContact,
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

module.exports = { GetAllContacts, GetTargetContact };
