console.log('This is tutorial 57');

// Maps in Javascript
// We can use any type of key and value

const myMap=new Map();
// console.log(myMap);

const key1="MyStr",key2="myStr2",key3={},key4=function(){};

// Setting map values

myMap.set(key1,'This is a String');
myMap.set(key2,'This is also a String');
myMap.set(key3,'This is a blank object');
myMap.set(key4,'This is a blank function');


// Getting the values from the Map
let val1= myMap.get(key1);
// console.log(val1);

// Get the size from the map

// console.log(myMap.size);

for(let [key,value] of myMap){
    // console.log(key,value);
    
}

// Get only keys

for(let key of myMap.keys()){
    // console.log(key);
    
}

// Get only value

for(let value of myMap.values()){
    // console.log(value);
    
}

myMap.forEach((value,key)=> {
    // console.log('values is',value);
    // console.log('key is',key);
    
});



// Converting map to array

let myArray= Array.from(myMap);
// console.log(myArray);

let mykeysArray=Array.from(myMap.keys());
console.log(mykeysArray);

let myvaluesArray=Array.from(myMap.values());
console.log(myvaluesArray);

