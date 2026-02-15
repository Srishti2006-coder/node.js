
// This is a simple Node.js server that listens on port 3000 and responds to incoming requests with a message.
//  It also logs the request headers to the console.

// const http = require('http');
// //   is http ka name hum kuch bhi likh skte hai , ('http') is builtin 

// const myServer = http.createServer((req, res) => {

//   //  console.log("New request received");   // this will show in the terminal when we type npm start

//   console.log(req.headers);     // headers ki info , client ki and all

//     res.end("Hello from Server again ");   // this shows in the browser when we hit localhost:3000
// // yeh referesh krne pr and dubara se npm start hone pr hi update hoga 
// });

// myServer.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


// Log bnaya jiske help se time aa rha hai jb bhi new entries hoyegi 
// switch case bnaya jisme /, /aboutus and ek defualt case bnaya
// url = protocol, https , domain and , path


// const http = require("http");
// const fs = require("fs");

// const myServer = http.createServer((req, res) => {

//     const log = `${Date.now()} : ${req.method} ${req.url} New req received \n`;

//     fs.appendFile("log.txt", log, (err) => {

//         switch(req.url) {
//             case '/': 
//                 res.end("Homepage");
//                 break;

//             case '/about': 
//                 res.end("hello i am srishti");
//                 break;

//             default: 
//                 res.end("404 not found");
//         }
//     });
// });

// myServer.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


// req.url

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {

    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url);

    console.log(myUrl);

    fs.appendFile("log.txt", log, (err, data) => {

        switch (req.url) {
            case "/":
                res.end("HomePage");
                break;

            case "/about":
                res.end("I am Piyush Garg");
                break;

            default:
                res.end("404 Not Found");
        }
    });
});

myServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});
