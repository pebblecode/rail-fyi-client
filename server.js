var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
  var schema = req.headers['x-forwarded-proto'];

  if (schema === 'https') {
    next();
  }
  else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});

app.use('*', function(req, res) {
  res.sendFile('./build/index.html', {root: __dirname})
  // res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port 3000');
});
