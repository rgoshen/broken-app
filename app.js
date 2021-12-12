require('dotenv').config();
const express = require('express');
const appRouter = require('./routes');

const PORT = process.env.PORT || 3000;
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', appRouter);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Serving is now running on http://localhost:3000...`);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
