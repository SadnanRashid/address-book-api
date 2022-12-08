const { QueryListOfContacts } = require("../Services/address");

const GetAllContacts = async (req, res) => {
  // Get all contacts in the collection
  const contactList = await QueryListOfContacts();
  console.log(contactList);
  console.log(" ok ");
  return res.json(contactList);
};

module.exports = { GetAllContacts };
