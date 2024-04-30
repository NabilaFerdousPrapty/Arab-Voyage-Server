const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: 'https://arabvoyage-4a1a4.web.app', // Allow requests from this origin
  origin: 'http://localhost:5173', 
};
app.use(cors(corsOptions));


// Middleware
app.use(express.json());






const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pflyccd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    app.post('/addSpot', async (req, res) => {
      const spot = req.body;
      const result = await client.db("ArabVoyage").collection("users").insertOne(spot);
      console.log(result);
      res.send(result);
    });
    const spotCollection = client.db("ArabVoyage").collection("users");
    const countryCollection = client.db("ArabVoyage").collection("Countries");
    app.get('/spots', async (req, res) => {
      const cursor = spotCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    
    //My List
    app.get('/myList/:email', async (req, res) => {
      console.log(req.params.id);
      const result = await spotCollection.find({ email: req.params.email }).toArray();
      res.send(result);

    })
    app.get('/touristSpots/:country_Name',async (req, res) => {
      console.log(req.params.country_Name);
      const result = await spotCollection.find({ countryName: req.params.country_Name }).toArray();
      res.send(result);
    })
    app.get('/singleSpot/:id', async (req, res) => {
      console.log(req.params.id);
      const result = await spotCollection.findOne({ _id: new ObjectId(req.params.id) });
      res.send(result);

    })
    app.put('/updateSpot/:id', async (req, res) => {
      console.log(req.params.id);
      const query = { _id: new ObjectId(req.params.id) };
      const updateDoc = {
        $set: {
          image: req.body.image,
          spotName: req.body.spotName,
          countryName: req.body.countryName,
          locationName: req.body.locationName,
          shortDescription: req.body.shortDescription,
          average_cost: req.body.average_cost, 
          season: req.body.season,
          travelTime: req.body.travelTime,
          totalVisitorsPerYear: req.body.totalVisitorsPerYear,

        },
      
      };
      const result = await spotCollection.updateOne(query, updateDoc)
      console.log(result);
      res.send(result)

    })
    app.get('/countries', async (req, res) => {
      const cursor = countryCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
app.delete('/deleteSpot/:id', async (req, res) => {
  console.log(req.params.id);
  const result = await spotCollection.deleteOne({ _id: new ObjectId(req.params.id) });
  res.send(result);
})
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('ArabVoyage is running');

});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
