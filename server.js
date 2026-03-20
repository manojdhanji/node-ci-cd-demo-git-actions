const httpInstance = require('http');
const portNumber = 9091;

// Create a server instance
const httpServer = httpInstance.createServer((req, res) => {

    // Write a response to the client
    res.write('Response from server');
    res.statusCode = 200;
    console.log('Sending response...');
    // End the response
    res.end();
});

// Setup the server to listen on port 8080
httpServer.listen(portNumber, () => {
    console.log('Server is listening on port ' + portNumber);
});