var express = require('express');
var path = require('path');
var fs = require('fs');
var forceSSL = require('express-force-ssl');
var http = require('http');
var https = require('https');

var ssl_options = {
  key: fs.readFileSync('./keys/certificate.key'),
  cert: fs.readFileSync('./keys/certificate.pem'),
};

var app = express();
var server = http.createServer(app);
var secureServer = https.createServer(ssl_options, app);


app.set('forceSSLOptions', {
  enable301Redirects: true,
  trustXFPHeader: false,
  httpsPort: 443,
  sslRequiredMessage: 'SSL Required.'
});

app.use(forceSSL);
app.use(express.static(path.join(__dirname, 'build')));

// app.get('*', function(req, res, next) {
//   console.log('HEY');
//   var schema = req.headers['x-forwarded-proto'];
//   console.log(schema);
//
//   if (schema === 'https') {
//     console.log('ALREADY SECURE');
//   } else {
//     console.log(req.headers, req.url);
//     var https = 'https://' + req.headers.host + req.url;
//     console.log('REDIRECTING TO HTTPS', https);
//     res.redirect(https);
//   }
// });

app.use('*', function(req, res) {
  console.log('dirname is' + __dirname);
  res.sendFile('./build/index.html', {root: __dirname});
});

secureServer.listen(4432);
server.listen(process.env.PORT || 3000);
