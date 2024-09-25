console.log("This is tutorial 41");
// creating a regualar function 

// function hello(){
//     console.log("This is the best person ever");
// }
// hello();
 
// Converting to an arrow function
// const h= ()=>{
//     console.log("This is the best person ever");
// }
// h();



// const greet= function(){
//     return "Good Morning";
// }



// const greet= ()=>{
//     return "Good Morning";
// }


// One line can return without writing return statement 
// const greet= ()=> "Good Morning";
// console.log(greet());

// If you want to return the object 

// const g = ()=> ({name:"Virat"});
// console.log(g());


// Multiple parameters in the function requires a parenthesis , if there is a single parameter then it is no need to put parenthesis

const greet= (name,ending)=> "Good Morning " + name+" It's time to say "+ending;
console.log(greet("Aniyeshu","bye"));
