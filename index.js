var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');
var path = require('path');

var frames = require('./frames');
var characters = require('./characters');

var invoked = false;

function nyan(options) {
  invoked = true;
  if(!options) return nyan;
  var {
    colors,
    pure,
    sound = true,
    stream = process.stdout } = options;

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
  
  if(sound) {
    var speaker = new Speaker({
      channels: 2,
      bitDepth: 16,
      sampleRate: 44100
    });
    
    fs.createReadStream(path.resolve(__dirname, './NyanCatoriginal.mp3')).pipe(new lame.Decoder).pipe(speaker);
  }

  var i = 0;
  return setInterval(function() {
    stream.write('\033[0f');
    //process.stdout.write('\033[2J');
    stream.write(frames[i]);
    i = (i+1)%frames.length;
  }, 29);
}

nyan.pipe = function(stream) {
  return nyan({ colors: true, pure: true, stream, sound: false });
};

module.exports = nyan;

setTimeout(function() {
  // If not invoked with options, do it
  if(!invoked) nyan({});
}, 100);
