var express = require('express');
var fs = require('fs');
var index_html;

var app = express.createServer(express.logger());

fs.readFile('index.html', function (err, data) { 
if (err) throw err;
  index_html = data.toString('utf-8'); 
});

app.get('/', function(request, response) {
  response.send(index_html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
