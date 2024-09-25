console.log("Welcome to tut12.js");
let a=document; 
a = document.all;
// a=document.body;
// a=document.forms;
Array.from(a).forEach(function(element){       // This is another method to print the elements of Document.all
 console.log(element)
});
a=document.links[0].href;
console.log(a);