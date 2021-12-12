const express = require('express');
let axios = require('axios');
const morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', async function (req, res, next) {
  const names = req.body.developers;
  try {
    let results = await axios.all(
      names.map((name) => axios.get(`https://api.github.com/users/${name}`))
    );
    let out = results.map((r) => {
      return { name: r.data.name, bio: r.data.bio };
    });

    return res.json(out);
  } catch (err) {
    next(err);
  }
});

app.listen(3000, (error) => {
  if (!error) {
    console.log(`Serving is now running on http://localhost:3000...`);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
