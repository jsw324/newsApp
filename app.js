
console.log('Starting app.js');

const express = require('express');
var routes = require('./routes/index');

var app = express();

//app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(process.env.PORT || 3000, function() {
  console.log('Node running on port');
});

module.exports = app;
