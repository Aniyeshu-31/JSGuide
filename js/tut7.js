console.log('We are in tut7.js and lets dicuss about arrays');
let marks=[23,56,99,98,94];
const fruits=['orange','Apple','pineapple'];
const mixed=['str',67,[89,56]];
const array=new Array(23,123,12,'Orange');
console.log(marks);
// console.log(fruits);
// console.log(mixed);
// console.log(array);
// console.log(array.length);
// console.log(Array.isArray('hdffsjd'));
// array[0]='harry';
// console.log(array);
let element=array[0];
// console.log('element:'+element);
let value=marks.indexOf(56);
// console.log(value);

//mutating the Array

// marks.push(33);     pushes the element at the end of the Array
// marks.unshift(66);  pushes the element at the start if the Array
// marks.pop(33);      eliminates the element from the end of the Array
// marks.shift(66);    eliminated the element from the start of the Array
// marks.splice(1,2);
// marks.reverse();
marks2=[1,3,3,4,2];           // If "const" is used then we cannot change the original variable value
 marks=marks.concat(marks2);
// console.log(marks);
let myobj={
    'first name':'harry',
    channel:'',
    isActive:'true',
    marks:[1,2,3,4]
}
console.log(myobj);
console.log(myobj.channel="codewithHarry");
console.log(myobj['channel']="codewithHarry");
console.log(myobj);
console.log(isActive);
console.log(myobj.channel);
console.log(muobj['channel']);
