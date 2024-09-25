console.log("We are in Tutorial 16");
let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text);
element.className= 'childul';
element.id='createdLi';
element.setAttribute('title' ,'mytitle');
// element.innerText = 'hello this is created by harry'; 
// // query selector helps in selecting the first element
// element.innerHTML= '<b>hello this is created by harry</b>';
let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);


// how to replace an element

let elem2 = document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode= document.createTextNode('hello I am tnode');
elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul= document.getElementById('myul');
myul.replaceChild(element , document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));

let pr = elem2.getAttribute('id');
// pr = elem2.hasAttribute('href');
//  pr = elem2.hasAttribute('id');
elem2.removeAttribute('id');
elem2.setAttribute('title','mytitle');
// console.log(pr);
// console.log(elem2);

// quick quiz -Create a heading element with text as "go to Codewithharry"
// and create an a tag outside it with href="https://www.codewithharry.com";
let heading = document.createElement('h2');
let t1 = document.createTextNode('go to CodeWithHarry');
heading.appendChild(t1);
console.log(heading);
// element.replaceWith(heading);
let container=document.querySelector('div.container');
let tag = document.createElement('a');
container.appendChild(tag);
tag.href='https://www.codewithharry.com';
console.log(tag);

