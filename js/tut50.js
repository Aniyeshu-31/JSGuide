console.log("This is tutorial 50");

// Character classes
let regex=/\war/;      // word character -_ word or alphabet or numbers. 
regex=/\w+d1r/;  // \w+ means 1 or more characters.
regex=/\Wbhai/;  // non word character.
regex=/\W+bhai/;    // W+ more than one non word characters.
regex=/number \d999/;   // \d means digits;
regex=/number \d+/;   // \d+ means more than one digit;
regex=/\D999/;   // \D means non digit;
regex=/\D+999/;   // \D means more than one  non digit;
regex=/\ska number/;   // matches whites space character
regex=/\s+ka number/;   // matches more than one whites space character
regex=/\Ska number/;   // matches non white space character.
regex=/\S+ka number/;   // matches non white space character.
regex=/3r5ry\b/;   // Word boundary.
// let str2 = "*ar7r3r5ry @$^&#bhai";

// Assertions.

regex=/h(?=y)/;
regex=/h(?!y)/;
let str2 = "*ar7r3r5ry bhai harry ika number 8989898harry99999";

let result= regex.exec(str2);

console.log("The result from exec is ",result);
if(regex.test(str2)){
       console.log(`The string ${str2} matches with the ${regex.source} expression`);
   }
   else{
       console.log(`The string ${str2} does not  matches with the ${regex.source} expression`);
   }