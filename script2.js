
//  TOPIC TO BE COVERED IN THIS FILE:

// 1.) what is sync and sync
// -> sync mtlb ek ke bahd dusra hoga, jab tk ek command complete naa ho, dusra shuru nahi hoga
// -> async mtlb bina rukhe chalta rahega, dono ek sath chalenge jo jaldi complete hoga wo pehla complete hoga

// task a = 1sec
// task b = 5sec
// task c = 15sec
// task d = 2sec3

//sync mtlb: a -> b -> c -> d (total 23 sec)
// async mtlb: a,b,c,d (total 15 sec) max time = 15sec


// console.logg("hey");
// console.log("hello");
// console.log("hi");


// 2.) what is async js   -> mtlb 2 kam ek sath chl rhe hai bina rukhe

// console.log("hey");
// setTimeout(function(){}, 2000);
// console.log("hello");           // yahan hey , hello ke bich me koi time intervel nhi hai dono ek time pr hi chlte hai 


// console.log("hi");
// setTimeout(function(){
//     console.log("hello");       // yahan pr 2 sec ka time intervel hai to pehla hi print hoga  phir 2 sec bad hello print hoga
// }, 2000);
// console.log("hey");

a
// ## Calback functions 
Timeout(function(){}, 12000);  // 12 sec bhd kya chlega -> jo function likha hai vo 

// console.log("hey");
// comsole.log("hey2");
// setTimeout(function() {
//     console.log("hey3");
// }, 0);
// console.log("hey4");

// output -> hey , hey2 , hey4, hey3

// 3.) js is not asynchronous   -> mtlb js me async nhi hai, vo single threaded hai not mutlithreadingv , ek time pr ek hi kam kr skta hai

// 4.) Full story of async
// 5.) Single threading and multi threading

// main stack -> jahan pr humara sara code hota hai (execution context)
// side stack -> jahan pr async code hota hai
//   event loop -> jo check krta hai ki main stack empty hai ya nhi, agar empty hai to callback queue se function uthakr main stack me dal deta hai


// 6) callbacks ->  yeh ek function hai jo hmesha async hote hai tab chlta hai jab async kam complete ho jata hai

// fetch
// axious
// promises
// settimeout
// setinterval

// then
// catch
// async await
// callbacks


// 7.) Promisses  = “abhi kaam shuru, result baad me milega (success ya fail)”

// Pending → kaam chal raha hai
// Resolved (then) → kaam successful
// Rejected (catch) → error aa gaya


// 1.) example 
// var ans = new Promise ((res, rej) => {
//     if (true){
//         return res();
//     }
//     else {
//         return rej();
//     }
// })
     
// ans 
// .then(function () {
//     console.log("resolved");     //  resolved if (true)
// })
// .catch(function () {
//     console.log("rejected");    //  rejected if (false)
// })


// 2.) example 

// let orderFood = new Promise((resolve, reject) => {
//   let foodReady = true;

//   if (foodReady) {
//     resolve("Food delivered 🍕");
//   } else {
//     reject("Order cancelled ❌");
//   }
// });

// orderFood
//   .then(msg => console.log(msg))
//   .catch(err => console.log(err));


// var → change + redeclare ✅

// let → change ✅, redeclare ❌

// const → change ❌, redeclare ❌


// 3.) example user will ask for a num bw 0 to 9 if the user is below 5 resolve if not reject

var ans =  new Promise ((res, rej) => {    // new likhna jruri hai 
    var num  = Math.floor(Math.random() * 10);

    if (num < 5){
        return    res();
    }
    else {
        return rej();
    }
})

ans.then(function(){
    console.log("resolved");
})
ans.catch(function(){
    console.log("rejected");
})


// 8.) Then and catch
// 9.) Try and catch
// 10.) async await
// 11.) 5 use cases real world

// 12.) [concept aside];
// 13.) concurrency and parallelism
// 14.) throttling


// web api -> jahan pr async kam krte hai, jaise settimeout, api calls, file reading etc
// callback queue -> jahan pr async kam ke callback functions wait krte hai
