console.log("this is ES6 version");

class Book{
    constructor(name,author,type)
    {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
   add(book){
    
       let tableBody=document.getElementById('tableBody');
       let uiString="";
        // console.log("Add to UI");
           itemsJsonArray.forEach(function(element){
            uiString +=`<tr>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td><div class="form-group row">
            <div class="col-sm-10">
                <button type="submit" class="btn btn-sm btn-primary">Delete</button>
            </div>
        </div></td>
      </tr>`;
        })
        tableBody.innerHTML =uiString;
   
        
    }
    clear(){
        let libraryform = document.getElementById("libraryForm");
        libraryform.reset();   // this method will reset the fields of the form.
    }
    validate(book){
        if(book.name.length<2 || book.author.length<2){
            return false;
        }
        else if(book.name.length>2 || book.name.length>2){
            return true;
        }
    }
    show(type,Displaymessage){
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
   
   
}

let libraryform = document.getElementById("libraryForm");
libraryform.addEventListener('submit', libraryformSubmit);

function libraryformSubmit(e) {

    console.log("Updating List...");
    
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
     name = document.getElementById('bookName').value;
     author = document.getElementById('author').value;
    
    
    let book = new Book(name, author, type);
    console.log(book);
    
    let display= new Display();
    if(display.validate(book)){
       
        if(localStorage.getItem('itemsJson')==null)
        {
             itemsJsonArray=[];
             itemsJsonArray.push([name,author,type]);
             localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
          }
          else{
               itemsJsonArraystr=localStorage.getItem('itemsJson');
               itemsJsonArray=JSON.parse(itemsJsonArraystr);
               itemsJsonArray.push([name,author,type]);
               localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
          }
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