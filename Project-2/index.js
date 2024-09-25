console.log("this is index.js");

// TODOS 
// 1. add delete button to delete the books
// 2. add item to the local storage



// Constructor

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor

function Display(){
  
}

// Add methods to display prototype
Display.prototype.add= function(book){
    console.log("Add to UI");
    let tableBody=document.getElementById('tableBody');
    let uiString=`<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                  </tr>`;
    tableBody.innerHTML += uiString;  
}


// implementing the clear function 
Display.prototype.clear= function(){
    let libraryform = document.getElementById("libraryForm");
    libraryform.reset();   // this method will reset the fields of the form.
}

// implementing the validate function
Display.prototype.validate= function(book){
    if(book.name.length<2 || book.author.length<2){
        return false;
    }
    else if(book.name.length>2 || book.name.length>2){
        return true;
    }
}
Display.prototype.show= function(type,Displaymessage){
   let message= document.getElementById('message');
   message.innerHTML=`
   <div class="alert alert-${type} alert-dismissible fade show" role="alert">
   <strong>Messge:</strong> ${Displaymessage}
   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
   <span aria-hidden="true">×</span>
   </button>
</div>`;
setTimeout(function(){
    message.innerHTML="";
},2000);
}
// Add submit event Listener to Libraryform

let libraryform = document.getElementById("libraryForm");
libraryform = document.addEventListener('submit', libraryformSubmit);

function libraryformSubmit(e) {

    console.log("you have submitted the form");

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    // fiction, programming , cooking;
    let fiction = document.getElementById('Fiction');
    let programming = document.getElementById('Programming');
    let cooking = document.getElementById('Cooking');

    if (fiction.checked) {
        type = fiction.value;
    }

    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display= new Display();
    if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show("success","your book has been successfully added");
    }
    else{
      // show error to the user;
      display.show("Danger","Sorry your book has not been added succesfully");
    }
    e.preventDefault();
  
}