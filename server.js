var express = require('express');
var path = require('path');

var app = express();

app.use('*', function(req, res) {
  console.log('HEY');
  console.log(req.secure);
  if (req.secure) {
    console.log('ALREADY SECURE');
    res.sendFile('./build/index.html', {root: __dirname});
  } else {
    console.log(req.headers, req.url);
    var https = 'https://' + req.headers.host + req.url;
    console.log('REDIRECTING TO HTTPS', https);
    res.redirect(https);
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port 3000');
});
