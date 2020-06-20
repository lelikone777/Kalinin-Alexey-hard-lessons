// let num = 266219;
// let res = 1;
// num.toString().split('').forEach(function (el) {
//   res *= el;
// });
// console.log(res);

// res **= 3;

// console.log(res);

// res = String(res).slice(0, 2)

// console.log(res);
// alert(res);

//свое решение
let num = 226219;
let one = 1;
let numStringArr = num.toString().split('');
console.log(numStringArr); 
console.log(numStringArr.length);
for (let i = 0; i < numStringArr.length; i++){
  one *= numStringArr[i]
  }
console.log(one);
one **= 3;
console.log(one);
let oneString = String(one).split('').slice(0, 2);
console.log(typeof oneString);
console.log(oneString);




// //Другое решение 
// let mum = 266219;
// let res = 1;
// num.toString().split('').forEach(function (el) {
//   res *= el;
// });
// console.log(res);













