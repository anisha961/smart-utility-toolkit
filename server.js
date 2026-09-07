const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    console.log(`Incoming request: ${req.method} ${req.url}`);

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Welcome to Smart Utility Toolkit Server!');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('About Page: Node.js Core Modules Lab.');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('Contact Page: reach out via student portal.');
    } else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
