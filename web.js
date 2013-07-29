var express = require('express');
var app = express();
app.use(express.logger());
app.engine('.html', require('jade'));

app.get('/', function(request, response) {
  response.render('Hello World!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
