

const http = require('http');
//   is http ka name hum kuch bhi likh skte hai , ('http') is builtin 

const myServer = http.createServer((req, res) => {
  //  console.log("New request received");   // this will show in the terminal when we type npm start

  console.log(req.headers);     // headers ki info , client ki and all

    res.end("Hello from Server again ");   // this shows in the browser when we hit localhost:3000
});

myServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});