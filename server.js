const express = require('express');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./sequelize-connection');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})


app.listen(3000);
