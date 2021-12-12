const express = require('express');
const getUserData = require('./helpers');

const router = express.Router();

router.post('/', async function (req, res, next) {
  const names = req.body.developers;
  try {
    devInfo = await getUserData(names);
    return res.status(200).json(devInfo);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
