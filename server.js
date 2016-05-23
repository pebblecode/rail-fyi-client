var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use('*', function(req, res) {
  var schema = req.headers['x-forwarded-proto'];
  console.log(schema);

  if (schema === 'https') {
    res.sendFile('./build/index.html', {root: __dirname});
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port 3000');
});
