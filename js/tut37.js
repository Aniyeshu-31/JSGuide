console.log("This is Tut37 of javascript");
// Pretend that this response is coming from the server.
const students=[
{name:"Harry", subject:"Javascript"},
{name:"Rohan", subject:"Machine Learning"}
]

// function enrollStudent()
// function getstudents()
function enrollStudent(student, callback){
     setTimeout(function(){
        students.push(student);
        console.log("Students has been enrolled");
        callback();
     }, 3000);
}
function getstudents(){
    setTimeout(function(){
       let str="";
       students.forEach(function(student){
            str+=`<li>${student.name}<li/>`
       });
       document.getElementById('students').innerHTML=str;
       console.log("Students has been fetched"); 
     }, 1000);
}

let newStudent={name:"Virat",subject:"Python"};
enrollStudent(newStudent,getstudents);
// getstudents();

// Function inside then - resolve();
// Function inside catch - reject();