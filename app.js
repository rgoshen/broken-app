require('dotenv').config();
const express = require('express');
let axios = require('axios');
const getUserData = require('./helpers');

const PORT = process.env.PORT || 3000;
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', async function (req, res, next) {
  const names = req.body.developers;
  try {
    devInfo = await getUserData(names);
    return res.status(200).json(devInfo);
  } catch (err) {
    next(err);
  }
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Serving is now running on http://localhost:3000...`);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
