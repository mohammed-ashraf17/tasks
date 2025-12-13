
// /*              ***               Part(1)              ***               */

// const path = require('node:path');
// const fs = require('node:fs');
// const EventEmitter = require('events');
// const even = new EventEmitter();
// const os = require('os');
// console.log(os);


// /* ---------------------------------(1)--------------------------------- */

// function tast() {
//     console.log(__dirname);
//     console.log(__filename);
// }

// tast()

// /* ---------------------------------(2)--------------------------------- */

// function tast() {
// const abslutPath = path.resolve('./user/files/reprt.pdf')
//  console.log(path.basename(abslutPath));
 
    
// }
// tast()

// /* ---------------------------------(3)--------------------------------- */

// function buildPath(obj) {
//   return path.format({
//     dir: obj.dir,
//     name: obj.name,
//     ext: obj.ext
//   });
// }

// console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));

// /* ---------------------------------(4)--------------------------------- */

// function tast() {
//     const abslutPath = path.resolve('./docs/read.md')
//     console.log(path.extname(abslutPath));
    
// }
// tast()

// /* ---------------------------------(5)--------------------------------- */

// function tast() {
//     const abslutPath = path.resolve('./Home/app/main.js')
//     const parsed = path.parse(abslutPath);
//     console.log({
//     Name: parsed.name,
//     Ext: parsed.ext
//   });
    
// }
// tast()

// /* ---------------------------------(6)--------------------------------- */

// function tastt() {
//      console.log(path.isAbsolute("/home/user/file.txt"));
// }
// tastt()

// // /* ---------------------------------(or)--------------------------------- */
// function tast(abslutPath) {
//     console.log(path.isAbsolute(abslutPath));
// }
// tast("/home/user/file.txt")

// /* ---------------------------------(7)--------------------------------- */

// function tast() {
//     console.log(path.join('src' , 'components', 'App.js'));
    
// }
// tast()

// /* ---------------------------------(8)--------------------------------- */

// function tast(abslutPath) {
//     console.log(path.resolve(abslutPath));
    
    
// }
// tast("task2.js")

// /* ---------------------------------(9)--------------------------------- */

// function tast() {
    
//     console.log(path.join('/folder1' , 'folder2/file.txt'));
    
    
// }
// tast()

// /* ---------------------------------(10)--------------------------------- */

// function tast(params) {
// const abslutPath = path.resolve('./path/to/file.txt')
// fs.unlink(abslutPath , (err)=>{
//     if(err){
//         console.log(err);
//     }
// })
    
// }
// tast()

// /* ---------------------------------(11)--------------------------------- */

// function tast() {
//     fs.mkdir("success", (err)=>{
//         if(err){
//             console.log({err});
            
//         }
// })
// }
// tast()

// /* ---------------------------------(12)--------------------------------- */

// even.on('start', () => {
//   console.log('Welcome event triggered!')
// });

// even.emit('start')

// /* ---------------------------------(13)--------------------------------- */

// even.on('login', (username) => {
//   console.log(`User logged in: ${username}`)
// });
// even.emit('login', 'Ahmed')

// /* ---------------------------------(14)--------------------------------- */

// function tast() {
//     let data =fs.readFileSync('./notes.txt' , {encoding:"utf-8"})
//      console.log(data);
// }
// tast()

// /* ---------------------------------(15)--------------------------------- */

// function tast() {
//     fs.writeFile('./async.txt' , '"Async Save"' , (err)=>{
//     if(err){
//         console.log(err);
        
//     }
// })
// }
// tast()

// /* ---------------------------------(16)--------------------------------- */

// function tast(params) {
//     let ex =fs.existsSync('./notess.txt')
//     console.log(ex);

// }
// tast()

// /* ---------------------------------(17)--------------------------------- */

// function tast() {
//   return {
//     Platform: os.platform(),
//     Arch: os.arch()
//   }
// }
// console.log(tast())

// /* ---------------------------------(final)--------------------------------- */


