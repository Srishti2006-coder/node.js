

const http = require('http');
//   is http ka name hum kuch bhi likh skte hai , ('http') is builtin 

const myServer = http.createServer((req, res) => {
    console.log("New request received");
    res.end("Hello from Server");
});

myServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});