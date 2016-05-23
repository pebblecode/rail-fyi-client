var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
  console.log('HEY');
  if (req.secure) {
    console.log('ALREADY SECURE');
    next();
  } else {
    var https = 'https://' + res.headers.host + req.url;
    console.log('REDIRECTING TO HTTPS', https);
    res.redirect(https);
  }
});

app.use('*', function(req, res) {
  res.sendFile('./build/index.html', {root: __dirname});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port 3000');
});
