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
// Get targeted contact with ID
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

// Post a contact
const QueryPostContact = async (data) => {
  try {
    const result = getCollection("contacts").insertOne(data);
    return result;
  } catch (error) {
    return error;
  }
};
// Post multiple
const QueryPostManyContact = async (data) => {
  try {
    const result = getCollection("contacts").insertMany(data);
    let ids = result.insertedIds;
    console.log(ids);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  QueryListOfContacts,
  QueryTargetContact,
  QueryPostContact,
  QueryPostManyContact,
};
