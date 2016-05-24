var express = require('express');
var path = require('path');

// var ssl_options = {
//   key: fs.readFileSync('./keys/certificate.key'),
//   cert: fs.readFileSync('./keys/certificate.pem'),
// };

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use('*', function(req, res) {
  res.sendFile('./build/index.html', {root: __dirname});
});

// secureServer.listen(process.env.PORT || 3000);
app.listen(process.env.PORT || 3000, function () {
  console.log('server is listening.');
});
