console.log('This is tutorial 56 on for in and for of Loop');

let people=['Rohit Sharma','KL Rahul','Virat Kohli','SuryaKumar Yadav'];


// For Each Loop
// people.forEach(element => {
//     console.log(element);
// });

// For of Loop

obj={
   name:"Harry",
   language:"Javascript",
   hobbies: "programming"
}

// Iterating into an objct using traditional for loop

// for (let index = 0; index < Object.keys(obj).length; index++) {
    
//      console.log(obj[Object.keys(obj)[index]]);
     
// }
// console.log(obj);

// Using For in Loop

for(let key in obj){
    console.log(obj[key]);      
}
let my="This is my string";
for(let char in my){
 console.log(my[char]);
}

// ***********For of Loop************

people=['Rohit Sharma','KL Rahul','Virat Kohli','SuryaKumar Yadav'];

for(let elem of people){
    console.log(elem);
}