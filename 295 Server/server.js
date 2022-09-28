const http = require('http');

const server = http.createServer((request, response) => {
    // console.log('headers', request.headers);
    console.log('method', request.method);
    console.log('url', request.url);

    const user = {
        nama : 'Rikza Fatiyamulya',
        hobby : 'coding',
    }

    // response.setHeader('Content-Type', 'text/html');
    // response.end('<h1>Helllloooooo</h1>')

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

server.listen(3000);