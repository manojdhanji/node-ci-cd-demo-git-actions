const httpServer = require('../server.js');
const http = require('node:http');

describe('HTTP Server Tests', () => {

    let server;
    beforeAll((done) => {
        console.log(`Callback parameter done:` + done);
        server = httpServer.listen(0, done); // 0 = random available port
    });

    afterAll((done) => {
        server.close(done);
    });

    test('should return expected response', (done) => {
        const port = server.address().port;
        console.log(`port: ${port}`);
        http.get(`http://localhost:${port}`, (res) => {
            let data = '';

            expect(res.statusCode).toBe(200);

            res.on('data', (chunk) => {
                data += chunk
            });

            res.on('end', () => {
                expect(data).toBe('Response from server');
                done();
            });
        });
    });
});