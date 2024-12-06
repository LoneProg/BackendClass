const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get('/', (req,res) => {
  res.send('Hi, welcome');
});

app.listen(3000, () => {
  console.log('Listening on localhost:3000');
})

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.4";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
