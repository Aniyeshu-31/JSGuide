console.log('This is tutorial 59');
// Symbols :-  They are Primitives

const sym1= Symbol('My Indentifier');
const sym2= Symbol('My Indentifier');
// console.log('Symbol is ',sym1);
// console.log('Type of Symbol is', typeof sym1);

console.log(sym1===sym2);
const a ="This is";
const b ="This is";
// console.log(a===b);
// console.log(null===null);
// console.log(undefined===undefined);

/* Why was Symbol introduced- If Symbol was introduced in ES6
  then it was very difficult to make unique keys using primitives
   thus Symbol was introduced.
  */

const k1= Symbol('Indentifer of k1');
const k2=Symbol('Indentifier of k2');
myobj={};

myobj[k1]="Harry";
myobj[k2]="Rohan";
myobj["Name"]="GoodBoy"; 
myobj[5]="GoodInt"; 
console.log(myobj); 
/* console.log(myobj.k2);   Cannot be done this because it is equivalent to mobj["k2"] 
*/

// Using For in Loop

for(key in myobj){
    console.log(key,myobj[key]); // Symbols are ignored in for in Loop
}

// Converting Javascript Object to JSON String

console.log(JSON.stringify(myobj));




// let myObj={
//     name:"Aniyeshu",
//     Channel:"CodeWithHarry"
// }
// console.log(myObj.Channel);






