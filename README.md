## Nyan

Like getting rickrolled, but with Nyancat

#### Usage

Just `require('nyan')`, then wonder about yourself.

You can optionally call the module with an `options` object as an argument, taking the form:

```
var opts = {
  colors: true, // use colors instead of just raw ascii
  pure: true // use solid colors only
};

require('nyan')(opts);
```

Call the module with no arguments to prevent it from auto-running:

```
var nyan = require('nyan')(); // returns itself

// some time later
nyan({}); // call with options as above
```

You can also "pipe" it to a stream (pipe is pretend, nyan isn't a real stream). The frames will be written to the given stream:

```
var nyan = require('nyan')();

// it returns an interval rather than the stream you pass it
var interval = nyan.pipe(process.stdout);
clearInterval(interval);
```

Try running the examples in `./examples`:

```
node examples/basic.js --colors
node examples/basic.js --colors --pure
node examples/stream.js
```

#### Credits

Nyan Cat ASCII frames lifted from [https://github.com/vtsvang/nyancat-telnet-node](https://github.com/vtsvang/nyancat-telnet-node)

Music from [https://archive.org/details/nyannyannyan](https://archive.org/details/nyannyannyan)
