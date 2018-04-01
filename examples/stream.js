var nyan = require('../')();

setTimeout(function() {
  nyan.pipe(process.stdout);
}, 200);
