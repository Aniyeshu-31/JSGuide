// AJAX uses XMLHttpRequestObject (also known as xhr Object) to achieve this
// Modern websites uses JSON instead of XML for data transfer.
// Data can be transfered in any format or protocol(Not always https necessarily).
// pure Javascript is also known as Vanilla Javascript.
console.log("Ajax tutorial in one video");
// https://dummy.restapiexample.com/api/v1/employee/1
let fetchbtn=document.getElementById('Fetchbtn');
fetchbtn.addEventListener('click',buttonClickhandler)

function buttonClickhandler(){
    console.log("XML http Request instantiated");
    // Instantiate an xhr object
    const xhr= new XMLHttpRequest();

    // open the object.
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type','application/json')
    // we are sending form data into the url
    // What to do on progress(Optional)

    xhr.onprogress= function(){
        console.log("in Progress");
    }
    // what to do when response is ready
    // xhr.onreadystatechange = function(){
    //     console.log('ready state is', xhr.readyState);
    // }
    // Ready state values
    // 0- UNSENT
    // 1- OPENED
    // 2- HEADERS_RECIEVED
    // 3- LOADING
    // 4- DONE
    xhr.onload= function(){
        if(this.status===200){
        console.log(this.responseText);
    }
    else{
        console.log("Some error occured");
    }
}
    // send the request 
     params= `{"name":"test323","salary":"120","age":"23"}`;
    xhr.send(params);
    console.log("We are done!")
}


let popbtn=document.getElementById('popbtn');
popbtn.addEventListener('click',pophandler)
function pophandler(){
    console.log("you have clicked the pop handler");
    // Instantiate an xhr object
    const xhr= new XMLHttpRequest();

    // open the object.
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees', true);
    xhr.onload= function(){
        if(this.status===200){
       let obj=JSON.parse(this.responseText);
       console.log(obj);
       let list=document.getElementById('list');
       str="";
       for(key in obj){
         str+=`<li>${obj[key].employee_name}</li>`;
       }
       list.innerHTML=str;
    }
    else{
        console.log("Some error occured");
    }
}
    // send the request 
   
    xhr.send();
    console.log("We are done fetching employees!")
}