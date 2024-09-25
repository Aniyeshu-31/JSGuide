console.log("We are in tutorial 20");
let imparr=['adrak','pyaz','bhindi'];
// Add a key value pair to the local Storage
localStorage.setItem('Name','Ayesha');
localStorage.setItem('Name2','Rohan');
localStorage.setItem('Vegetables',JSON.stringify(imparr));  //converts into a String
// localStorage.clear(); clears the entire local Storage

// clear a particular key value pair

// JSON.stringify() takes object as an input and returns a string as an output.

// JSON.parse() takes a String as an input and returns an object as an output


localStorage.removeItem('Name2');

// Retrieve an item from the local Storage 
// let name= localStorage.getItem('Name');
// let name1= localStorage.getItem('Name2');
// let sabzi= JSON.parse(localStorage.getItem('Vegetables'));  converts String into an array
// console.log(name);
// console.log(name1);
// console.log(sabzi);

sessionStorage.setItem('SessionName','Ayeshu');
sessionStorage.setItem('SessionName2','Rohan1');
sessionStorage.setItem('SessionVegetables',JSON.stringify(imparr));  

// on restarting the browser after the session is expired then session storage gets cleared.