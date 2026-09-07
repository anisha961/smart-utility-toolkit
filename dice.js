const crypto = require('crypto');
const fs = require('fs');

function rollDice() {
    const randomByte = crypto.randomBytes(1)[0];
    return (randomByte % 6) + 1;
}

console.log("--- Rolling Dice 5 Times ---");
let history = "";

for (let i = 1; i <= 5; i++) {
    const roll = rollDice();
    const output = `Roll ${i}: Dice Rolled: ${roll}`;
    console.log(`\x1b[32m${output}\x1b[0m`);
    history += output + "\n";
}

fs.writeFileSync('dice_history.txt', history);
console.log("Dice history saved to dice_history.txt");
