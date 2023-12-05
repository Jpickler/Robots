
const express = require("express");


const client = require ('./db/client.cjs');

const app = express();
const PORT = 1235;


app.get(`/hello`, (req, res) => {res.send(`hello world!`);});



app.listen(PORT, ()=> {console.log(`server is running on port: ${PORT}`)});