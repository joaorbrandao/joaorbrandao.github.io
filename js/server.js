var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("OLA!");
  response.end();
});

server.listen(9000);
console.log("Server is listening at port 9000\n");
