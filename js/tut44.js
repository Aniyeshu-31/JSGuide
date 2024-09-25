console.log("This is tutorial 44");


// Pretens this is coming from a server as response;

let a=undefined;
if(a!=undefined){
    // console.log("This is not undefined");
    throw new Error("This is not undefined");
}
else
{
    console.log("This is undefined");
}

try {
    // srggsgf;
    console.log("We are inside try block");
    functionHarry();
} catch (error) {
    console.log("Are You Okay?");
    console.log(error.name);
}
finally{
      console.log("finally we run it all");
}