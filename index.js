var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/timer.html")
});
app.listen(5000);