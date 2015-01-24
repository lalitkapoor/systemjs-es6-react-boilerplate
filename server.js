var http = require('http')
var serveStatic = require('serve-static')
var finalhandler = require('finalhandler')

var port = process.env.PORT || 3000

var serve = serveStatic('public', {'index': ['index.html']})

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res)
  serve(req, res, done)
})

server.listen(port, function(error) {
  if (error) return console.error(error)
  console.log('Listening at localhost:'+port);
})
