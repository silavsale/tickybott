var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/src'));

app.use('/static', express.static(path.join(__dirname, 'src')));

app.listen(port);
console.log('working on 3000');
