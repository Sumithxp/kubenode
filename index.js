var http = require('http');

var server = http.createServer(function(req, res){
    res.end(new Date().toISOString());
});

server.listen(process.env.PORT || 5000);
