const { isEven, logger } = require('./utils');

logger("Testing custom module...");
console.log(`Is 4 even? ${isEven(4)}`);
console.log(`Is 7 even? ${isEven(7)}`);
