var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');
var path = require('path');

var frames = require('./frames');

frames.forEach(function(e, i) {
  frames[i] = e.slice(17, 50).join('\n');
});

var i = 0;
setInterval(function() {
  process.stdout.write('\033[0f');
  //process.stdout.write('\033[2J');
  process.stdout.write(frames[i]);
  i = (i+1)%frames.length;
}, 29);

var speaker = new Speaker({
  channels: 2,
  bitDepth: 16,
  sampleRate: 44100
});

fs.createReadStream(path.resolve(__dirname, './NyanCatoriginal.mp3')).pipe(new lame.Decoder).pipe(speaker);
