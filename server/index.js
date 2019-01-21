
// const ctrl = require('../database/controllers/rsvp.js');
const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../database/index.js');
const app = express();
const PORT = 3006;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
