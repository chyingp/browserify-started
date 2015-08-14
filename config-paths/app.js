var fs = require('fs');
var browserify = require('browserify');
var b = browserify({
	basedir: __dirname,
	paths: ['./modules', './components/']
});
var dest = fs.createWriteStream('bundle.js');

b.add('main.js');
b.bundle().pipe(dest);