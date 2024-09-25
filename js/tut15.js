console.log("Welcome to tutorial 15 of javascript");
let element = document.querySelector('.no');
 element = document.querySelector('.container');
 let nodename = element.childNodes[1].nodeName;
 let nodetype = element.childNodes[1].nodeType;
//  console.log(nodename);
//  console.log(nodetype);
// console.log(element.childNodes); includes text , comments etc.
// console.log(element.children);  // does not include text , comments and others.

// nodetype

/* 1. element
   2. attributes
   3. Text Node
   8. Comment
   9. document 
   10. doctype
    
*/


let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children          

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children)
// console.log(container.childElementCount);   // Count the number of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);