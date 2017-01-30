var path = require('path');
var express = require('express');
var config = require('./config')
var proxyMiddleware = require('http-proxy-middleware')
//var favicon = require('serve-favicon');

var proxyTable = config.build.proxyTable

var app = new express();
var port = process.env.PORT || 3002;

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

app.use(express.static(path.join(__dirname, 'dist')));
//app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));

app.get("/*", function(req, res) {
  return res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port, function(err) {
  if (err) {
    console.error(err)
  } else {
    console.info("==>   Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
