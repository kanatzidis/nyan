var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');
var path = require('path');

var frames = require('./frames');
var characters = require('./characters');

var invoked = false;

function nyan(options) {
  invoked = true;
  var { colors, pure } = options;

  frames.forEach(function(e, i) {
    frames[i] = e.slice(17, 50);
    if(colors) {
      frames[i] = frames[i].map(function(row) {
        return row.split('').map(function(c) {
          // I don't think any characters are unaccounted for but you never know
          if(characters.draw[c]) {
            return characters.draw[c] + (pure ? ' ' : c) + characters.end;
          } else {
            return c;
          }
        }).join('');
      });
    }
    frames[i] = frames[i].join('\n');
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
}

module.exports = nyan;

setTimeout(function() {
  // If not invoked with options, do it
  if(!invoked) nyan({});
}, 100);
