console.log('This is tutorial 60');

// Destructuring in JAVASCRIPT

let a,b;
[a,b]=[34,564];
// console.log(a,b);


[a,b,c,...d]=[1,2,3,4,5,6,7,8,9,10,11,12];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// Array Destructing
({a,b,c,...d}={a:34,b:45,c:23,d:56,e:22});
// console.log(a,b,c,d);

const fruits=['Apple','Mangoes','Oranges','Bananes'];
[a,b,c,d]=fruits;
// console.log(a,b,c,d);

// ********Another Method***********
let res=function(){
    return [a,b,c,d]=fruits;
}
// console.log(res());

// Object Destructing

const laptop={
    model:"HP-Pavilion",
    age:"23-days",
    Gender:"Male",
    net:"$121",
    start: function(){console.log('started');}
    }

const {model,age,Gender,net,start}=laptop;
console.log(model,age,Gender,net,start);
start();

