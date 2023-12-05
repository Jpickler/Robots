

const express = require('express');
const router = express.Router();


// these next 2 lines connect to the database
const client = require('../db/client.cjs');
// client.connect();

//the next line connects to the robots file and the functions inside
const {getRobots} = require('../db/robots.cjs');


//this section handles get requests for robots
router.get('/robots', async (req, res) => {
  const robots = await getRobots();
  console.log(`this is robots`, robots);
  res.send(robots); 
});

module.exports = router;
