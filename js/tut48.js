console.log("This is tutorial 48");

// Basic Function.
// Meta Characters Symbols.
// const regex=/^h/;
// CharacterSets [];



let regex=/h[ayu]rry/;   // can be a a,y or u;
regex=/h[a-z]rry/;       // can be any character from a-z;
regex=/h[^aty]]rry/;       // cannot be a , t ,y ;
regex=/h[^aty]]rr[yu]/
regex=/h[a-zA-Z]rr[yu0-9]/
const str = "harry bhai";
let result = regex.exec(str); 
// console.log("The result from exec is ",result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches with the ${regex.source} expression`);
// }
// else{
//     console.log(`The string ${str} does not  matches with the ${regex.source} expression`);
// }



// Quantifiers.

regex=/har{2}y/;  // r can occurs exactly 2 times.
regex=/har{0,2}y/;  // r can occurs exactly 2 times.
let str1 = "harry bhai";
str1="hay bhai";    
result = regex.exec(str1); 
// console.log("The result from exec is ",result);

// if(regex.test(str1)){
//     console.log(`The string ${str1} matches with the ${regex.source} expression`);
// }
// else{
//     console.log(`The string ${str1} does not  matches with the ${regex.source} expression`);
// }

// groupings
 regex= /(har){2}/;
 regex= /(har){2}([0-9]r){3}/;
 let str2 = "harhar1r3r5ry bhai";
 result= regex.exec(str2);
 console.log("The result from exec is ",result);
 if(regex.test(str2)){
        console.log(`The string ${str2} matches with the ${regex.source} expression`);
    }
    else{
        console.log(`The string ${str2} does not  matches with the ${regex.source} expression`);
    }