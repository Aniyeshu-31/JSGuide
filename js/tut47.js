console.log("This is tutorial 47");

let regex=/harry/;
// Lets look some metcharacters symbols;
regex=/^har/; // ^ means expression will match if the string starts with.
regex=/ry$/; // $ means expressionn will match if the string ends with.
regex= /h.rry/ // . means matches any one character
regex= /h*rry/ // * means matches any 0 or more character
regex= /ha?rryi?t/ // ? optional character;
regex= /h\*rry/ // 

let str="harry";

let result = regex.exec(str); 
console.log("The result from exec is ",result);

if(regex.test(str)){
    console.log(`The string ${str} matches with the ${regex.source} expression`);
}
else{
    console.log(`The string ${str} does not  matches with the ${regex.source} expression`);
}