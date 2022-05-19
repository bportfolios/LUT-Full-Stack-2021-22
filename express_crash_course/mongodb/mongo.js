const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://mongo:mongo@cluster0.ohywa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect(async (err) => {
  const collection = client.db("blog").collection("posts");
  const pipeline = [
    {
      $match: {
        category: 'News',
      },
    },
    {
      $limit: 3,
    },
  ];

  const agg = await collection.aggregate(pipeline).toArray();
  console.log(agg)
  client.close();
});
