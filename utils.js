function isEven(number) {
    return number % 2 === 0;
}

function logger(message) {
    const timestamp = new Date().toISOString();
    console.log(`[\x1b[36m${timestamp}\x1b[0m] ${message}`);
}

module.exports = { isEven, logger };