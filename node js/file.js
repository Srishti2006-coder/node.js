



const fs = require("fs");

//1.) Synchronous way to read and write files
// fs.writeFileSync("./hello.txt", "Hello i am using vs");   // if i change this content then it overwrites the previous content of the file


// 2.) Asynchronous way to read and write files
// fs.writeFile("./text.txt", "Hello hyiee i am using Async", (err) => {});   // this is the asynchronous way to write files, it takes a callback function as the third argument which will be called when the file is written


// 3.) Reading files with Synchronous way

// const result = fs.readFileSync("./contacts.txt", "utf-8"); 

// // this is the synchronous way to read files
// // utf-8 is used to read the file in a human-readable format
// // file video ho skti h, binary ho skti h, txt to usko decode krne k liye utf-8 use krte h

// console.log(result);



// 4.) Reading files with Asynchronous way

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err){
//         console.log(err);
//     }
//     else {
//         console.log(result);
//     }
// });   // it return nothing , as it si Asynchronous  
// It takes a callback function with arguments err and result, if there is an error it will be passed to the err argument, 
// otherwise the result will be passed to the result argument. 
// type is void because it does not return anything, it just calls the callback function when the file is read.



// 5.) Appending data to a file

fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString());  // this will append the current date to the file test.txt, if the file does not exist it will create a new file and write the date in it


// 6.) Deleting a file

// fs.unlinkSync("./text.txt");  // this will delete the file text.txt


// 7.) Finding file stats

console.log(fs.statSync("./hello.txt"));  // this will give the stats of the file hello.txt like size, created time, modified time etc.


// 8.) Creating a directory or folder by mkdir

fs.mkdirSync("my-docs");  // this will create a new directory called my-docs in the current directory