var fs = require('fs');
var browserify = require('browserify');
var b = browserify();
var dest = fs.createWriteStream('bundle.js');
b.add('./main.js');
b.bundle().pipe(dest);