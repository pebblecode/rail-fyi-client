var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res, next) {
  console.log('HEY');
  var schema = req.headers['x-forwarded-proto'];
  console.log(schema);

  if (schema === 'https') {
    console.log('ALREADY SECURE');
  } else {
    console.log(req.headers, req.url);
    var https = 'https://' + req.headers.host + req.url;
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
