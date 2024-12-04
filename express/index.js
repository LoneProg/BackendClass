const express = require("express");

const app = express();

app.get('/', (req,res) => {
  res.send('Hi, welcome');
});

app.listen(3000, () => {
  console.log('Listening on localhost:3000');
})
