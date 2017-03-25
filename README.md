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

Try running the example in `test/example.js`:

```
node test/example.js --colors
node test/example.js --colors --pure
```

#### Credits

Nyan Cat ASCII frames lifted from [https://github.com/vtsvang/nyancat-telnet-node](https://github.com/vtsvang/nyancat-telnet-node)

Music from [https://archive.org/details/nyannyannyan](https://archive.org/details/nyannyannyan)
