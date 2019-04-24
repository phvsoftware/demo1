var express = require('express');
var app = express();
var server = require('http').createServer(app);

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.use(express.urlencoded());

app.get("/", function(req, res) {
    res.sendFile("index.html");
});

app.post('/bonjour', function(req, res) {
    var phrase = "Bonjour " + req.body.prenom + " !";
    res.send(phrase);
    res.end();
});

server.listen(PORT);