const [,, operation, num1Str, num2Str] = process.argv;
const a = parseFloat(num1Str);
const b = parseFloat(num2Str);

if (!operation || isNaN(a) || isNaN(b)) {
    console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
    process.exit(1);
}

switch (operation.toLowerCase()) {
    case 'add': console.log(`Result: ${a + b}`); break;
    case 'sub': console.log(`Result: ${a - b}`); break;
    case 'mul': console.log(`Result: ${a * b}`); break;
    case 'div': 
        b === 0 ? console.log("Error: Division by zero") : console.log(`Result: ${a / b}`); 
        break;
    default: console.log("Invalid operation. Use add, sub, mul, or div.");
}