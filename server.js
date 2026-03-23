const httpInstance = require('node:http');
const portNumber = 9091;

function handle(req, res) {
    // Write a response to the client
    res.write('Response from server');
    res.statusCode = 200;
    console.log('Sending response...');
    // End the response
    res.end();
}

// Create a server instance
const httpServer = httpInstance.createServer(handle);
if (require.main === module) {
    // Setup the server to listen on port 9091
    httpServer.listen(portNumber, () => {
        console.log('Server is listening on port ' + portNumber);
    });
}
module.exports = httpServer;
