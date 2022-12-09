const {
  QueryPostContact,
  QueryPostManyContact,
} = require("../Services/address");

const PostOneContact = async (req, res) => {
  const data = req.body;
  // {first_name, last_name, email, phone, address, country}
  const postResult = await QueryPostContact(data);
  return res.json(postResult);
};

// Add many to database
const PostManyContact = async (req, res) => {
  const data = req.body;
  const postResult = await QueryPostManyContact(data);
  res.json(postResult);
};

module.exports = { PostOneContact, PostManyContact };
