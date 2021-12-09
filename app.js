const express = require('express');
// let axios = require( 'axios' );

var app = express();

// app.post('/', function (req, res, next) {
//   try {
//     let results = req.body.developers.map(async (d) => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });
//     let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));

//     return res.send(JSON.stringify(out));
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// });

// middleware to parse req.body
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.get('/:name', (req, res, next) => {
  return res.send(`Welcome to node express ${req.params.name}`);
});

app.get('/dev', (req, res, next) => {
  return res.send('sent');
});

app.listen(3000, () => {
  console.log('Server is running...');
});
