// /*              ***               Part(1)              ***               */

// /* ---------------------------------(1)--------------------------------- */
//  let sNumber = "123";
//  let sum = Number(sNumber) +7 ;
//  console.log(sum);
// /* ---------------------------------(2)--------------------------------- */
//  let y =false ;
// var ruslt = !y ? 'invalid' : y;
// console.log(ruslt);
//                                   /* || */
//                                            let x = '';
//                                            var ruslt = x? x : "invalid";
//                                            console.log(ruslt);
// /* ---------------------------------(3)--------------------------------- */
// for(let i=0 ; i <=10 ; i++)
// {
//     if(i % 2 ==1){
//         console.log(`odd number = ${i}`);

//     }
// }
// /* ---------------------------------(4)--------------------------------- */
// let arr = [1 , 2 , 3  , 4 , 5];
// let ruslt = arr.filter((ele)=>{
//    return ele % 2 ==0
// })
// console.log(ruslt);
// /* ---------------------------------(5)--------------------------------- */
// let arr1 = [1 , 2 , 3]; let arr2 = [4 , 5 , 6];
// let arr3 =arr1.concat(arr2)
// console.log(arr3);
// /* ---------------------------------(6)--------------------------------- */
// let day = 2;
// switch (day) {
//     case 1:
//         console.log('Sunday');
//         break;
//          case 2:
//         console.log('Monday');
//         break;
//          case 3:
//         console.log('Tuesday');
//         break;
//          case 4:
//         console.log('Wednesday');
//         break;
//          case 5:
//         console.log('Thursday');
//         break;
//          case 6:
//         console.log('Friday');
//         break;


//     default:
//         console.log('Saturday');
//         break;
// }
// /* ---------------------------------(7)--------------------------------- */
// let arr = ["a", "ab", "abc"]
// let ruslt = arr.map((ele )=>{
//    return ele.length

// })
// console.log(ruslt);
// /* ---------------------------------(8)--------------------------------- */
// function check( num1) {
//     if( num1 % 3 ==0 && num1 % 5 ==0)
//     {
//         console.log('Divisible by both');

//     }
//     else
//     {
//         console.log(`num1 = ${num1}`);

//     }

// }
// check(15)
// /* ---------------------------------(9)--------------------------------- */
// let numberOfSquare = (num1)=>
// {
// return num1 * num1;
// }
// console.log( numberOfSquare(5));
// /* ---------------------------------(10)--------------------------------- */
//     let person ={
//     name:'joln',
//     age: 25
// }
// function formatPerson(person) {
//     let {name , age} = person;

//     return `${name} is ${age} years old`;

// }
// console.log(formatPerson(person));
// /* ---------------------------------(11)--------------------------------- */
// function sumation( num1 , num2 , num3 , num4 , num5) {
//    return num1 + num2 + num3 + num4 +num5

// }
// console.log(sumation(1 , 2, 3 ,4 ,5));
// /* ---------------------------------(12)--------------------------------- */
// m4 3arf el sraha
// /* ---------------------------------(13)--------------------------------- */
// function findLargest(arr) {
//     return Math.max(...arr);
// }

// console.log(findLargest([1, 3, 7, 2, 4]));
// /* ---------------------------------(14)--------------------------------- */

// let person= {
//     name:'mohammed',
//     age:21,
// };
// let porprety =[];

// for (const key in person) {
//     porprety.push(key)

// }
// console.log(porprety);
// /* ---------------------------------(15)--------------------------------- */
// let pushWords = [];
// function splitIntoWords(x){
//     let words = x.split(" ")
//    pushWords.push(...words)

//    return pushWords

// }
// console.log(splitIntoWords("The quick brown fox"));

//                    /* ---------------------------------------------------------------------- */
//                    /* ---------------------------------------------------------------------- */
//                    /* ---------------------------------------------------------------------- */
//                    /* ---------------------------------------------------------------------- */
//                    /* ---------------------------------------------------------------------- */
//                    /* ---------------------------------------------------------------------- */




// /*              ***               Part(2)              ***               */

// /* ---------------------------------(1)--------------------------------- */

/*الفرق ان forof دي ممكن تستخدم مع array بس و بتعبر عن value و ينفع نستخدم فيها await  , async

لاكن forin  ممكن نستخدمها مع array و object و بتعبر عن index و بردو ينفع نستخدم معاها await , async*/

// /* ---------------------------------(2)--------------------------------- */

/* hoisting هو سلوك بيرفع تعريف المتغيرات و الدوال الي اعلي نقطه في الكود يعني لما الكود بيدا يعمل run بيشوفهم اول حاجه و مثال علي كدا
 console.log(x);
 var x = 99 ;
*/

/*لاكن Temporal Dead Zone هي الفترة بين دخول نطاق المتغير وبين تعيين قيمته لأول مرة عند استخدام let , const
لو حاولت تستخدم المتغير قبل التعيين، هتلاقيReferenceError
مثال علي كدا
console.log(y);
let y = 100;

*/

// /* ---------------------------------(3)--------------------------------- */
/* دي بتسمح بالمقارنه من ناحيه اي حاجه يعني مش لازم يكون من نفس type مثال (==)
 let x = 88 ;
 let y = "88"
 if(x == y){
 console.log("true");
 }
  else{
    console.log("false");

 }
*/

/*بتقارن من حيث type يعني مينفعش تدخل string من number يعمل errorو مثال علي كدا(===)
 let x = 88 ;
 let y = "88"
 if(x === y){
 console.log("true");
}
 else{
    console.log("false");

 }

*/

// /* ---------------------------------(4)--------------------------------- */
// try: يحتوي على الكود اللي ممكن يحصل فيه خطأ.
// catch: يتم تنفيذه لو حصل خطأ، عشان البرنامج ما ينهارش.

// أهميته في async operations:
// العمليات الغير متزامنة ممكن تفشل (مثل fetch أو أي Promise).
// استخدام try-catch مع async/await يمنع توقف البرنامج ويسمح لنا بالتعامل مع الخطأ
// /* ---------------------------------(5)--------------------------------- */

/*Type Conversion دا انا اللي بتحكم في قيم التحويلات Number() , String() 1 مثال
//  let sNumber = "123";
//  let sum = Number(sNumber) +7 ;
//  console.log(sum);
*/

/*Type Coercion هنا بيقوم js تلقائي بيحوله من نفسه بدون تدخل من المبرمج مثال

console.log( '123' + 7);//1237
console.log('100' -7); //93
*/
//                    /* ---------------------------------------------------------------------- */
//                    /* ---------------------------------------------------------------------- */
//                    /* ---------------------------------------------------------------------- */
//                    /* ---------------------------------------------------------------------- */
//                    /* ---------------------------------------------------------------------- */
//                    /* ---------------------------------------------------------------------- */

// /*              ***               Part(3) Bonus              ***               */

// /* ---------------------------------(1)--------------------------------- */

//  function createCounter(init) {
//   let current = init;
//   return {
//     increment() {
//       current++;
//       return current;
//     },
//     decrement() {
//       current--;
//       return current;
//     },
//     reset() {
//       current = init;
//       return current;
//     }
//   };
// }


// let counter = createCounter(5);

// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

// /* ---------------------------------(2)--------------------------------- */

// function createCounter(init) {
//   let current = init;

//   return {
//     increment() {
//       current++;
//       return current;
//     },
//     decrement() {
//       current--;
//       return current;
//     },
//     reset() {
//       current = init;
//       return current;
//     }
//   };
// }

// let counter = createCounter(0);

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.reset());

// /* ---------------------------------(final)--------------------------------- */










// let u = [1,2]
// let r =u
// console.log(r);
// console.log({name:'dd'}=={name:'dd'});
// console.log([]==[]);



