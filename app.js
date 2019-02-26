var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/src/html'));

app.use('/static', express.static(path.join(__dirname, 'src')));

app.listen('3000');
console.log('working on 3000');