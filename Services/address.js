const { getCollection } = require("../Services/database");
const { ObjectId } = require("mongodb");

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

const QueryTargetContact = async (id) => {
  try {
    const query = { _id: ObjectId(id) };
    const cursor = await getCollection("contacts").findOne(query);
    // const specificService = await servicesCol.findOne(query);
    // const contact = await cursor;
    return cursor;
  } catch (error) {
    return error;
  }
};

module.exports = { QueryListOfContacts, QueryTargetContact };
