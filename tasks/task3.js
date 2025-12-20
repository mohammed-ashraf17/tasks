// /*              ***               Part(1)              ***               */
//  const path = require("node:path")
//  const abslutPath = path.resolve("./big.txt")
//  const dest = path.resolve("./dest.txt")
//  const source = path.resolve("./source.txt")
//  const zlib = require("node:zlib")
//  const data = path.resolve("./data.txt")
//  const dataGz = path.resolve("./data.txt.gz")
//  const { pipeline } = require("stream");
//  const fs = require("node:fs")


// /* ---------------------------------(1)--------------------------------- */

// const readFileStream = fs.createReadStream(abslutPath , {encoding:"utf-8", highWaterMark:100} )

// readFileStream.on("data", (chunk)=>{
//     console.log({chunk});
    
// })

// readFileStream.on("end" , ()=>{
//      console.log("Finished reading file");
// })

// readFileStream.on("error", (err) => {
//   console.error("Stream Error:", err.message);
// });

// /* ---------------------------------(2)--------------------------------- */

//  let readStream = fs.createReadStream(dest)
//  let writeStream = fs.createWriteStream(source)

//  readStream.pipe(writeStream)

//  writeStream.on("finish" , ()=>{
//     console.log("finish write file");
    
//  })


// /* ---------------------------------(3)--------------------------------- */


// pipeline(
//     fs.createReadStream(data),       
//     zlib.createGzip(),        
//     fs.createWriteStream(dataGz),   
//     (err) => {
//         if (err) {
//             console.error("Pipeline failed:", err.message);
//         } else {
//             console.log("File successfully compressed");
//         }
//     }
// );

// /*              ***               Part(2)              ***               */

// /* ---------------------------------(1->1)--------------------------------- */


//  const http = require("node:http")

// const port = 5000;

// let users =
// [

// ]

// const server = http.createServer((req , res)=>{
//     const {method , url} = req
//       if(method == "GET" && url == "/")
//     {
//         res.writeHead(200 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"wellcome"}))
//         res.end()
//     }
//     else if(method == "GET" && url == "/users")
//     {
//         res.writeHead(200 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"don", users}))
//         res.end()

//     }
//     else if(method == "POST" && url == "/users")
//     {
//         let data = "";

//         req.on("data" , (chunk)=>{
//             data += chunk
//         })

//         req.on("end" , ()=>{
//           let dataParse = JSON.parse(data)
//           let userExit = users.find((user)=>{
//             return user.emali == dataParse.emali
//           })

//           if(userExit){
//              res.writeHead(409, {"content-type":"application/json"})
//             res.write(JSON.stringify({message:"emali already exists" }))
//             return res.end()
//           }
//            users.push(dataParse)
//         res.writeHead(202 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"user added succesfuly" , users}))
//         res.end()
//         })
//     }
//     else
//     {
//         res.writeHead(404 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"NOT FOUND"}))
//         res.end()

//     }
    



// })
// server.listen(port , ()=>{
//     console.log(`server is running on port ${port}`);
// })

// /* ---------------------------------(1->2)--------------------------------- */

// const http = require("node:http")

// const port = 5000;

// let users =
// [
//    {
//     "name": "user1",
//     "age": 27,
//     "emali": "user@emali.com"
//   }
// ]

// const server = http.createServer((req , res)=>{
//     const {method , url} = req
//       if(method == "GET" && url == "/")
//     {
//         res.writeHead(200 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"wellcome"}))
//         res.end()
//     }
//     else if(method == "GET" && url == "/users")
//     {
//         res.writeHead(200 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"don", users}))
//         res.end()

//     }
// /* ---------------------------------(Important)--------------------------------- */   
//     else if(method == "POST" && url == "/users")
//     {
//         let data = "";

//         req.on("data" , (chunk)=>{
//             data += chunk
//         })

//         req.on("end" , ()=>{
//           let dataParse = JSON.parse(data)
//           let userExit = users.find((user)=>{
//             return user.emali == dataParse.emali
//           })
// /* ---------------------------------(Important)--------------------------------- */   
//           if(userExit){
//              res.writeHead(409, {"content-type":"application/json"})
//             res.write(JSON.stringify({message:"emali already exists" }))
//             return res.end()
//           }
//            users.push(dataParse)
//         res.writeHead(202 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"user added succesfuly" , users}))
//         res.end()
//         })
//     }
//     else
//     {
//         res.writeHead(404 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"NOT FOUND"}))
//         res.end()

//     }
    



// })
// server.listen(port , ()=>{
//     console.log(`server is running on port ${port}`);
// })

// /* ---------------------------------(2->1 , 2->2)--------------------------------- */

// const http = require("node:http")

// const port = 5000;

// let users =
// [
//    {
//     "name": "user1",
//     "age": 27,
//     "emali": "user@emali.com"
//   }
// ]

// const server = http.createServer((req , res)=>{
//     const {method , url} = req
//       if(method == "GET" && url == "/")
//     {
//         res.writeHead(200 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"wellcome"}))
//         res.end()
//     }
//     else if(method == "GET" && url == "/users")
//     {
//         res.writeHead(200 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"don", users}))
//         res.end()

//     }
 // /* ---------------------------------(Important)--------------------------------- */   
//     else if(method == "PATCH" && url == "/user/id"){

//         let data = "";

//         req.on("data" , (chunk)=>{
//             data += chunk
//         })

//          req.on("end" , ()=>{
//             let {emali , age} = JSON.parse(data)
//             const user = users.find((user)=>{
//                 if(user.emali === emali){
//                     user.age = age
//                     return user
//                 }
//                  if(!user){
//             res.writeHead(404, {"content-type":"application/json"})
//             res.write(JSON.stringify({message:"user no exit" }))
//             return res.end()
//             }
//             })
    
//         })

// /* ---------------------------------(Important)--------------------------------- */   
//     }
//     else if(method == "GET" && url == "/user/99")
//     {
//        res.writeHead(404 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"USER ID NOT FOUND"}))
//         res.end()

//     }
   
    
       
//     else
//     {
//         res.writeHead(404 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"NOT FOUND"}))
//         res.end()

//     }
    



// })
// server.listen(port , ()=>{
//     console.log(`server is running on port ${port}`);
// })

// /* ---------------------------------(3->1 , 3->2)--------------------------------- */

// const http = require("node:http")

// const port = 5000;

// let users =
// [
//    {
//     "name": "user1",
//     "age": 27,
//     "emali": "user@emali.com"
//   }
// ]

// const server = http.createServer((req , res)=>{
//     const {method , url} = req
//       if(method == "GET" && url == "/")
//     {
//         res.writeHead(200 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"wellcome"}))
//         res.end()
//     }
//     else if(method == "GET" && url == "/users")
//     {
//         res.writeHead(200 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"don", users}))
//         res.end()

//     }
        
//     else if(method == "PATCH" && url == "/user/id"){

//         let data = "";

//         req.on("data" , (chunk)=>{
//             data += chunk
//         })

//          req.on("end" , ()=>{
//             let {emali , age} = JSON.parse(data)
//             const user = users.find((user)=>{
//                 if(user.emali === emali){
//                     user.age = age
//                     return user
//                 }
//                  if(!user){
//             res.writeHead(404, {"content-type":"application/json"})
//             res.write(JSON.stringify({message:"user no exit" }))
//             return res.end()
//             }
//             })
    
//         })


//     }
//  // /* ---------------------------------(Important)--------------------------------- */  

//        else if(method == "DELETE" && url == "/user/1"){

//         let data = "";

//         req.on("data" , (chunk)=>{
//             data += chunk
//         })

//         req.on("end" , ()=>{
//             const {emali} = res
//             const userIndex = users.findIndex((user)=>{
//                 return user.emali === emali
//             })
//                 if(userIndex == -1){
//             res.writeHead(404, {"content-type":"application/json"})
//             res.write(JSON.stringify({message:"user delete succesfuly" }))
//             return res.end()
//             }
//             profiles.splice(userIndex , 1)
//              res.writeHead(200, {"content-type":"application/json"})
//             res.write(JSON.stringify({message:"done" }))
//            return res.end()

//         })

         


//     }    
//     // /* ---------------------------------(Important)--------------------------------- */  

//        else if(method == "GET" && url == "/user/99")
//     {
//        res.writeHead(404 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"USER ID NOT FOUND"}))
//         res.end()

//     }
    
//     else
//     {
//         res.writeHead(404 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"NOT FOUND"}))
//         res.end()

//     }
    

// })
// server.listen(port , ()=>{
//     console.log(`server is running on port ${port}`);
// })

// /* ---------------------------------(4)--------------------------------- */


// const http = require("node:http")

// const port = 5000;

// let users =
// [
//    {
//     id:1,
//     name: "user1",
//     age: 27,
//     emali: "user@emali.com"
//   }
// ]

// const server = http.createServer((req , res)=>{
//     const {method , url} = req
//       if(method == "GET" && url == "/")
//     {
//         res.writeHead(200 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"don" , users}))
//         res.end()
//     }
    
//     else
//     {
//         res.writeHead(404 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"NOT FOUND"}))
//         res.end()

//     }
    

// })
// server.listen(port , ()=>{
//     console.log(`server is running on port ${port}`);
// })


// /* ---------------------------------(5)--------------------------------- */


// const http = require("node:http")

// const port = 5000;

// let users =
// [
//    {
//     id:1,
//     name: "user1",
//     age: 27,
//     emali: "user@emali.com"
//   }
// ]

// const server = http.createServer((req , res)=>{
//     const {method , url} = req
//       if(method == "GET" && url == "/user/1")
//     {
//         res.writeHead(200 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"don" , users}))
//         res.end()
//     }
//     else if(method == "GET" && url == "/user/99"){
//         res.writeHead(404 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"user not found" }))
//         res.end()
//     }
    
//     else
//     {
//         res.writeHead(404 , {"content-type":"application/json"})
//         res.write(JSON.stringify({message:"NOT FOUND"}))
//         res.end()

//     }
    

// })
// server.listen(port , ()=>{
//     console.log(`server is running on port ${port}`);
// })


// /*              ***               Part(3)              ***               */

// /* ---------------------------------(1)--------------------------------- */

// The Event Loop is the core mechanism in Node.js that allows it to perform non-blocking I/O operations. Node.js is single-threaded, so the event loop continuously checks the call stack and the event queue to see if there are functions to execute.

// How it works:

// Node executes code in the call stack.

// If it encounters asynchronous operations (like setTimeout, I/O, or database queries), it offloads them to the system or thread pool.

// When these operations complete, their callbacks are added to the event queue.

// The event loop picks callbacks from the event queue and pushes them to the call stack for execution.

// This mechanism allows Node.js to handle thousands of concurrent connections without blocking.

// /* ---------------------------------(2)--------------------------------- */

// Libuv is a C library that Node.js uses to handle asynchronous operations. Its main responsibilities:

// Provides the event loop implementation.

// Handles asynchronous I/O operations (file system, network, timers).

// Manages the thread pool for CPU-intensive or blocking tasks.

// Role in Node.js:
// Libuv abstracts the operating system’s asynchronous capabilities and allows Node.js to execute non-blocking operations efficiently across different platforms (Linux, Windows, macOS).

// /* ---------------------------------(3)--------------------------------- */

// Node.js handles asynchronous operations using Libuv, the thread pool, and the event loop:

// When an async operation is invoked, Node.js checks if it can be handled non-blocking via OS APIs (like network or file I/O).

// If yes, it offloads the operation to Libuv or the thread pool.

// Once the operation completes, Libuv queues the callback in the event queue.

// The event loop executes the callback when the call stack is empty.

// This ensures Node.js never blocks the main thread while waiting for I/O.

// /* ---------------------------------(4)--------------------------------- */

// Concept  Purpose
// Call Stack  Stores functions currently being executed. LIFO (Last In, First Out).
// Event Queue  Holds callbacks of completed asynchronous operations waiting to be executed.
// Event Loop  Continuously checks the call stack and event queue, pushing callbacks to the stack when it’s empty.

// Summary:

// Call Stack → running functions

// Event Queue → waiting functions

// Event Loop → orchestrates execution

// /* ---------------------------------(5)--------------------------------- */

// The Thread Pool is a set of threads managed by Libuv to handle blocking operations (like file system access, crypto operations, DNS lookup, or compression).

// By default, Node.js uses 4 threads in the thread pool.

// You can change the size using the environment variable:

// UV_THREADPOOL_SIZE=8 node app.js


// The maximum allowed size is 128 threads.

// Role: Prevents the main thread from being blocked by heavy operations, maintaining non-blocking behavior.

// /* ---------------------------------(5)--------------------------------- */

// Blocking Code: Executes synchronously on the main thread. It stops other code from running until it finishes. Example: fs.readFileSync().

// Non-Blocking Code: Executes asynchronously, either via Libuv, OS APIs, or the thread pool, allowing other code to run while waiting for the operation to finish. Example: fs.readFile().

// Mechanism:

// Non-blocking operations are offloaded to thread pool/OS, and their callbacks are queued.

// The event loop ensures callbacks execute once the main thread is free.

// /* ---------------------------------(ennnnnnnnnnnnnnnnnnnnnnd)--------------------------------- */



