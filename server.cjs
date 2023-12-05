
const express = require("express");
// const router= express.Router();
const app = express();

const PORT = 1235;

app.use(express.json());

const client = require ('./db/client.cjs');
client.connect();

app.use(`/assets`,express.static(__dirname +`/dist/assets`));

app.get(`/`,(req, res) => {
  res.sendFile(__dirname+ `/dist/index.html`);

});

app.get(`/hello`, (req, res) => {res.send(`hello world!`);});

app.use('/api/v1', require('./api/index.cjs'));



app.listen(PORT, ()=> {console.log(`server is running on port: ${PORT}`)});