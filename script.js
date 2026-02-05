

// 1.) Array with forEach

// var arr1 = [10, 20, 30, 40, 50];

// arr1.forEach(function(val) {
//     console.log(val  + " Hello");
// })


// 2.) Array with map

// var arr2 = [100, 200, 300,];
// console.log(arr2);

// var newArr = arr2.map(function(val) {  // map diye gye arr ke elements ko modify krke new array bnata hai of same size 
//    //  return val + 10 + " World";
//     return val * 3;

// })

// console.log(newArr); 


// 3.) Array with filter

// var arr3 = [25, 35, 45, 55, 65];
// var filteredArr = arr3.filter(function(val) {  // filter diye gye arr ke elements me se kuch elements ko filter krke new array bnata hai of smaller size
//     return val > 40;   // return arr[45, 55, 65]
//     // return val > 300;   // return blankarr[]
// })

// console.log(filteredArr);


//4.) Array with find

// var arr4 = [1,2,3,4];
// var ans = arr4.find(function(val) {  // find diye gye arr ke elements me se pehla element ko return krta hai jo condition ko satisfy krta hai
//     // if(val == 2) return val;
//     // if (val > 20) return val;  // undefined
//     if (val > 2) return val;  // undefined
// });

// console.log(ans);  // 2


// // 5.) arr.indexOf(12) agar vo el ni hai to -1 


// 6.) OBJECTS

//var obj = {
//     name: "Srishti",
//     rollNo: 21,
//     ag: 20,
//     isAdmin: true
// }

// //Object.seal(obj);  // seal krne ke baad hum existing keys ki values change kr skte hai but new key-value pair add ni kr skte
// Object.freeze(obj); // freeze krne ke baad hum existing keys ki values bhi change ni kr skte and new key-value pair bhi add ni kr skte

// obj.name = "Srishti harman";  // changing existing key's value
// obj.salary = 21;  // adding new key-value pair to object

// // ek object me hum ek hi info le skte hai mutilple info ke liye diff objects bnege 

// // abh yah to mene changes kr diye age ke sath what if mujhe original object chahiye
// // i use Object.freeze(obj);


// 7.) we can find arr length by = arr.length
// 8.) How to find object length
// var objLength = Object.keys(obj).length;  // Object.keys(obj) returns an array of keys of the object
// console.log(objLength);  // 4

// 9.) How to find length of function

// function sample(a, b, c, d, e) {   // no. of parameters = length (5) 
// }

// function sample(){           // function is an object in javascript
//     console.log("Hello");
// }   


// 11.) 
// function abcd(){
//    // console.log("Hello");
//     return 120;
//   // return "Hello";
// }

// var ans  = abcd();  // call krdiya to jb m ans ko print krugi to hello return ho je g a


// 12.) Asynchronous JavaScript coding

// var add = function(a, b) {
//     return a + b;
// }
// varAdd = add(10, 20);  // 30

// console.log("Addition: " + varAdd);

// var sub = function(a, b) {
//     return a - b;
// }
