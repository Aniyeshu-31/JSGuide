// console.log("Project 1 notes web app");
shownotes();    
// if user adds a note then add it to the local Storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    
let addTxt = document.getElementById("addTxt");
let addTitle = document.getElementById("addTitle");
let notes=localStorage.getItem("notes");
if(notes==null)
{
    notesObj = [];
}
else
{
    notesObj = JSON.parse(notes);
}
let myobj={
    title:addTitle.value,
    text:addTxt.value
}
notesObj.push(myobj);    
localStorage.setItem("notes",JSON.stringify(notesObj));
addTxt.value="";
addTitle.value="";
// console.log(notesObj);
shownotes();

}); 

function shownotes()
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
{
    notesObj = [];
}
else
{
    notesObj = JSON.parse(notes);
}
let html="";
notesObj.forEach(function(element,index){

    html+=`
    <div class="noteCards mx-2 my-2" style="width: 18rem; border: 1px solid grey">
                
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.text}</p>
      <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
  </div>`;
      
});
let notesElem=document.getElementById("notes");
if(notesObj.length!=0)
{
   notesElem.innerHTML=html;  
}
else
{
    notesElem.innerHTML=`Nothing to Show! Use "Add a note" section to add note`;  // nothing is present in notesObj(Object of Notes);
}
}

// delete a note

function deleteNote(index)
{
    // console.log("I am deleting",index);
    let notes=localStorage.getItem("notes");
if(notes==null)
{
    notesObj = [];
}
else
{
    notesObj = JSON.parse(notes);
}

notesObj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesObj));
shownotes();
}

let Search = document.getElementById("searchTxt");
Search.addEventListener("input",function(e)
{
    let inputval=Search.value;
    // console.log("input event fired",inputval);
    let notecard=document.getElementsByClassName('noteCards');
    Array.from(notecard).forEach(function(element)
    {
        let cardTxt= element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputval))
        {
            element.style.display="block";
        }
        else
        {
            element.style.display="none";
        }
    })
            
});
 
