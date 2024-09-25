// promises
// resolve
// reject
// pending 

console.log("This is tutorial 39 of JS");
function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error=true;
            if(!error){
                console.log("Your promise has been resolved");
                resolve();
            }
            else{
                console.log("Your promise has not been resolved");
                reject("Sorry not resolved");
            }
        },2000);
    })
}
func1().then(function(){
    console.log("Harry: Thanks for resolving");
}).catch(function(error){
    console.log("Harry: Very bad Bro " + error);
})