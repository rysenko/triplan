var express = require('express');
var app = express();

var fs = require('fs');
var bundleStream = fs.createWriteStream('./public/js/bundle.js');

var browserify = require('browserify');
var b = browserify();
b.add('./public/js/index.js');
b.bundle().pipe(bundleStream);

app.set('port', (process.env.PORT || 5000));
app.use('/', express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
    console.log("triplan is running at localhost:" + app.get('port'));
});