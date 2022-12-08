const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// client.db('address-book').collection('contacts');

const connectDatabase = () => {
  const uri =
    "mongodb+srv://admin:12345sad@cluster0.tvyjzb3.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  //   return? dlt
};

const getCollection = (collection) => {
  client.db("address-book").collection(collection);
};

module.exports = {
  getCollection,
};
