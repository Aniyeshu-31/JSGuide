console.log("This is tutorial 46");

let Reg= /harry/; // This is regualar expression literal in javascript 
// Reg= /harry/g; // g means global;
// Reg= /harry/i; // i means case insensitivity;
// console.log(Reg);
// console.log(Reg.source);
// console.log(Reg);
// console.log(Reg.source);

// Functions used to match the Expressions

let s="This is great code with harry and also harry bhai";

/*
    1. exec() - This function will return an array for match or null for no match;
                we can use exec() multiple times using g flag
    2. test() - Returns true or false; 
    
    3. match() - returns  an array of results;

    4. search() - returns index of first match else -1;

    5. replace() - returns the replaced string with all replacements
*/
// let result= Reg.exec(s);
// let result2= Reg.test(s);
// if(result){
//   console.log(Reg.exec(s));
//   console.log(Reg.exec(s).index);
//   console.log(Reg.exec(s).input);
//}

//   console.log(result2); // ---> This will return true if regex is present in the string and false if it is not present.

//   let result3= reg.match(s); ---> this is wrong , opposite is true;

//  let result3= s.match(Reg);
//  console.log(result3);

//  let result4= Reg.search(s); ---> This is wrong;

// let result4= s.search(Reg);
// console.log(result4);


let result5 = s.replace(Reg,"Virat");
console.log(result5); // if no global flag is given then first match will get replaced only.