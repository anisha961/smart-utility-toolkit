const fs = require('fs');
const filePath = './sample.txt';

console.log("--- Starting Async File Operations ---");

// 1. Create / Write File
fs.writeFile(filePath, 'Initial Log Entry.\n', (err) => {
    if (err) return console.error('Write Error:', err);
    console.log('File created successfully.');

    // 2. Append / Update File
    fs.appendFile(filePath, 'Updated Log Entry.\n', (err) => {
        if (err) return console.error('Append Error:', err);
        console.log('File updated successfully.');

        // 3. Read File
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) return console.error('Read Error:', err);
            console.log('\n--- File Content ---');
            console.log(data);

            // 4. Delete File
            fs.unlink(filePath, (err) => {
                if (err) return console.error('Delete Error:', err);
                console.log('File deleted successfully.');
            });
        });
    });
});