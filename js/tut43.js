console.log("this is tutorial 43");
// const harry=async function(){
//     return "Harry";
// }

// async returns promise 


async function harry(){
    console.log("Inside harry Function");
    const response= await fetch('https://api.github.com/users');
    console.log('before response');
    const users= await response.json();
    console.log('users resolved');
    return users;
}
console.log('before calling harry function');
let a=harry();
console.log('after calling harry function');
console.log(a);
a.then(d => console.log(d));
console.log(a);