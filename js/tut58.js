console.log('This is Tutorial 58');

const mySet=new Set();
// Set is used to store unique values;

console.log('The set looks like',mySet);
// Adding values to the set;

mySet.add('this');
mySet.add('MyName');
mySet.add('that');  
mySet.add('true');  
mySet.add('2324');  
mySet.add('false');  
// let num= prompt('Input a number');
// console.log(num);

// Adding values to the set using constructor;

// let newSet=new Set(['2323','true']);
// console.log(newSet);

// has() method
// console.log(mySet.has('this'));

console.log(mySet.size);

console.log('Before removal',mySet);

mySet.delete('MyName');

console.log('After removal',mySet);

// Iterating a Set

// Using For of Loop

for(let item of mySet){
    // console.log(item);
    
}

// Using For each Loop
mySet.forEach((element)=> {
    // console.log(element);    
});
let n=new Set();
let newArray=['this','this','at'];
newArray.forEach((element) => {
    n.add(element);
});

console.log(n);



