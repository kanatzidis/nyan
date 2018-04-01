var colors = process.argv.includes('--colors');
var pure = process.argv.includes('--pure');

// demonstrate both forms of invocation
if(colors || pure) {
  require('../')({ colors, pure });
} else {
  require('../');
}
