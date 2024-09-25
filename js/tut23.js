console.log("welcome to tutorial 23 of javascript");
let x=6;
let y=34;
let z;
z=x+y;
z=x*y;
z=x/y;  
z=x-y;

// Exploring Math Object

z = Math;
z = Math.PI;
z = Math.E;
z = Math.ceil(-5.3);
z = Math.floor(-5.4);   
// it will always increase the value whether the decimal point is greater than or less than 0.5; (Math.ceil();)
z = Math.round(5.2);
z = Math.abs(-9);
z = Math.sqrt(81);
z = Math.pow(2,8);
z = Math.max(2,9);
z = Math.random();

// random() function generates the value between (0,1)
// to get random number between a set of values 
// for e.g-: (0,100);
z = 100*(Math.random());

// for e.h-: (50,100);

z = 50+(100-50)*Math.random();

console.log(z);
