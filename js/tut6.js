console.log('we are tut 6 js');
const name="Aniyeshu";
const greet="Good Morning";
console.log(greet+" "+name);
let html;
html = "<h1> THIS is a heading</h1>" + "<p> this is my graph </p>";
// concat() method of String.
// html=html.concat("this");
// console.log(html);
// length method of String.
//  let l= html.length;
//  console.log(l);
 // toLowerCase() method of String
 // toUpperCase() method of String
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html[0]);
// console.log(html[1]);
// console.log(html.indexOf("this"));
// if the String is not present in the the original String then its index will be -1
// console.log(html.lastIndexOf(">"));
// charAt() method.
// console.log(html.charAt(1));

// endswith() method.

// console.log(html.endsWith(">"));
// console.log(html.includes("djfnif"));
// console.log(html.substring(0,3));
// console.log(html.slice(-4));
// console.log(html.slice(0,4));
// console.log(html.split(' '));
// console.log(html.replace('this','it')); 
let fruit1='Orange\'';
let fruit2='Apple';
let myhtml= `hello ${name}
             <h1>this is heading</h1>
             <p> you like ${fruit1} and ${fruit2}
             `;
             document.body.innerHTML= myhtml;
let color='red';
let color1='blue';
let h1=` <h1> RED VS BLUE WHICH COLOR WILL WIN!!
          HELLO ${name}
         <p> Which color you will choose ${color} or ${color1}</p>`;
         document.body.innerHTML=h1;