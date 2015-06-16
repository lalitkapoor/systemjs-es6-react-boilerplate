var http = require('http')
var express = require('express')
var serveStatic = require('serve-static')
var finalhandler = require('finalhandler')

var port = process.env.PORT || 3000

var static = serveStatic('public', {'index': ['index.html']})

var app = express()
app.use(static)

var server = http.createServer(app)

server.listen(port, function(error) {
  if (error) return console.error(error)
  console.log('Listening at localhost:'+port);
})
