// primitive datatypes-: memory allocation in stacks
// Strings , numbers , Boolean , Null , Undefined , Symbol
// reference datatyped-: memory allocation in Heap
   // Arrays , Object literals , functions , dates.
   
// String
 let  name="Aniyeshu";
 console.log("My String name:"+ name);
 console.log("Datatype name is:" + (typeof name));

 // Numbers

 let marks=34;
 console.log("Datatype name is:"+ (typeof marks));
 console.log(marks);

 // boolean

 let isdriver= true;
 console.log("datatype name is:"+ (typeof isdriver));
 console.log(isdriver);

 // Null

 let nullvar= null;
 console.log("datatype name is:"+ (typeof nullvar));
 console.log(nullvar);

 //undefined

let undef= undefined;
console.log("datatype name is:"+ (typeof undef));
console.log(undef);

// reference datatypes

// Array

myarr= [1 , 2 , 3 , 4];
console.log("datatype name is:"+ (typeof myarr));

// Object literals

let stMarks= {
    Aniyeshu: 99,
    Harry: 98,
    Rohan:23
}
console.log("datatype name is:"+ (typeof stMarks));
console.log(stMarks);

function  findname() {
    
}
console.log("datatype name is:"+ (typeof findname));

let date = new Date();
console.log("datatype name is:"+ (typeof date));
