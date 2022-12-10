const { getCollection } = require("../Services/database");
const { ObjectId } = require("mongodb");

const QueryGetUser = async (email) => {
  try {
    const query = { email };
    const cursor = getCollection("users").findOne(query);
    const userData = await cursor;
    return cursor;
  } catch (error) {
    return error;
  }
};

module.exports = {
  QueryGetUser,
};
