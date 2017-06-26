var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var app = express(); 
var PORT = process.env.PORT || 3000;



// app.use(favicon(path.join( __dirname, 'dist/img', 'favicon.ico')));


app.use(express.static('dist'));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});


app.listen(PORT, '0.0.0.0', function(){
  console.log('server is up on port ' + PORT);
});


