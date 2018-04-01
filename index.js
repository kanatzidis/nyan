var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');
var path = require('path');
var nyanjs = require('nyan-js');

var invoked = false;

function nyan(options) {
  invoked = true;
  if(!options) return nyan;

  if(!options.stream) options.stream = process.stdout;
    
  nyanjs(options);

  var speaker = new Speaker({
    channels: 2,
    bitDepth: 16,
    sampleRate: 44100
  });
  
  fs.createReadStream(path.resolve(__dirname, './NyanCatoriginal.mp3')).pipe(new lame.Decoder).pipe(speaker);
}

nyan.pipe = function(stream) {
  invoked = true;
  return nyanjs.pipe(stream);
}

module.exports = nyan;

setTimeout(function() {
  // If not invoked with options, do it
  if(!invoked) nyan({});
}, 100);
