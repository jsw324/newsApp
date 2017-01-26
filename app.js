
console.log('Starting app.js');

const express = require('express');
var routes = require('./routes/index');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(app.get('port'), function() {
  console.log('Node running on port', app.get('port'));
});

module.exports = app;
