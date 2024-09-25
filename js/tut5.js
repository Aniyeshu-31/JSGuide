// Type conversion 
console.log("Welcome to tut5.js");
myVar=34;
// console.log(myVar , (typeof myVar));
V= String(myVar);
// console.log(V , (typeof V));
// let booleanVar= true;
// console.log(booleanVar, (typeof booleanVar));
let booleanVar= String(true);
// console.log(booleanVar, (typeof booleanVar));
// let date= new Date();
// console.log(date , (typeof date));
let date= String(new Date());
// console.log(date , (typeof date));
let ar=[1,2,3,4,5,6];
// console.log(ar.length, (typeof ar));
 let arr= String([1,2,3,4,5,6]);
//  console.log(arr.length, (typeof arr));9
let i=8;
// console.log(i.toString());
let stri= "2332";
stri ="233d2";
stri =Number(true); //default behaviour same for false we get 0.
stri= Number([1,2,3,4,5,6,7,8,]);
// console.log(stri , (typeof stri));
// To convert it to Number.
// console.log(Number(stri));
// console.log(Number(stri));
// console.log(stri);
// let number = '34';
// console.log(number , (typeof number));
// // number= parseInt(number);
// console.log(number , (typeof number));
let deci= '2324.4423';
deci= parseFloat(deci);
console.log(deci , (typeof deci));
// .toFixed() function gives the number of digit after the decimal point.

console.log(deci.toFixed(3),(typeof deci));

// Type coercion
 let mystr= "234";
 let num= 23;
 console.log(mystr + num);
 

