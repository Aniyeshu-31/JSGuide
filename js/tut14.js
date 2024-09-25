console.log("Welcome to tutorial 14");
/*
Element Selectors:
1. Single Element Selectors
2. Multi Element Selectors
*/
let element=document.getElementById('first');
element=element.className;
// element=element.childNodes;
// element=element.parentNode;
// element.style.backgroundColor='red';
// element.innerText='Harry is a good boy';
// element.innerHTML= '<b>Harry is a good boy</b>';
// console.log(element);

let sel= document.querySelector('#first');
sel=document.querySelector('.child');
sel=document.querySelector('div');

// 2. Multi Element Selectors

// let elems= document.getElementsByClassName('child');
//  elems = document.getElementsByClassName('container');
 elems= document.getElementsByTagName('div');
 console.log(elems);
// console.log(elems[0].getElementsByClassName('child'));

  Array.from(elems).forEach(function(element){
  console.log(element);
  element.style.color='blue';
});