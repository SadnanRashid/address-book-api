const { QueryPostContact } = require("../Services/address");

const PostOneContact = async (req, res) => {
  const data = req.body;
  // {first_name, last_name, email, phone, address, country}
  const postResult = await QueryPostContact(data);
  return res.json(postResult);
};

module.exports = { PostOneContact };
