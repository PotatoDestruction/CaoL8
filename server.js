const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require("mongodb")
require("dotenv").config();


const app = express();
const port = process.env.PORT;
const client = new MongoClient(process.env.MONGO_DB_URI)


app.use(cors());
app.use(express.json());


app.get('/pets', async (req, res) => {
 
    try {
      let pets
    const con = await client.connect();
    const order = req.query.order;
    const orderD = req.query.orderD  === "asc" ? 1 : -1;
    let types = req.query.showType
    console.log(types)

    pets = await con.db("Pets").collection("PetCollection")
    .find({type: {$in: req.query.showType?.split(",")}})
    .sort({[order]: orderD}).toArray();
    //   if(req.query.showUnread === "true") {
    //     books = await booksCollection.find({completed: false}).sort({[orderBy]: orderDirection}).toArray();
    //   } else {
    //     books = await booksCollection.find().sort({[orderBy]: orderDirection}).toArray();
    //   }
      con.close();
      res.send(JSON.stringify(pets));
    } catch (error) {
      res.status(500).send(error);
    }
    });

    app.post('/pets', async (req, res)=>{
        try {
        const con = await client.connect();
        const dbRes = await con.db("Pets").collection("PetCollection").insertOne(req.body);
      
          con.close();
      
          // console.log(req.body)
          res.send(dbRes);
        } catch (error) {
          res.status(500).send(error);
        }
      });

    app.listen(port, () => console.log(`port: ${port}`));