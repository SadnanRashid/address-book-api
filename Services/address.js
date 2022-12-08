const { getCollection } = require("../Services/database");

const QueryListOfContacts = async () => {
  try {
    const query = {};
    const cursor = getCollection("contacts").find(query);
    const contacts = await cursor.toArray();
    return contacts;
  } catch (error) {
    return error;
  }
};

module.exports = { QueryListOfContacts };
