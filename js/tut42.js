console.log('This is tutorial 42');


// Button with id mybtn
let mybtn = document.getElementById("mybtn");

// div with id content 
let content = document.getElementById("content");

// function getdata(){
//     console.log("Started getdata");
//     url="harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside First Then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then");
//         console.log(data);
//     })
// }


function getdata(){
    console.log("Started getdata");
    url="https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside First Then");
        return response.json();
    }).then((data)=>{
        console.log("Inside second then");
        console.log(data);
    })
}

function postData(){
    // console.log("Started getdata");
    url="https://api.instantwebtools.net/v1/passenger";
    data= '{"name": "Aniyeshu","trips": 2,"airline": 4}';
    params={
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=>response.json())
    .then(data=> console.log(data)
    )
        // console.log("Inside First Then");
        // console.log("Inside second then");
}
// console.log("Before running getdata");
// getdata();
// console.log("After running getdata");
postData();





// *Inside an object semicolon does not appear;