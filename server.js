const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
let app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})


app.listen(3000);
