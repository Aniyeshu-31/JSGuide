console.log("Welcome to tutorial 32 of JS");
// create a class Library and implement the following:
// constructor  must take the book list as an argument
//  getBookList();
//  issuebook(bookname,user);
//  returnBook(Bookname);

class Library{
   constructor(booklist){
        this.booklist=booklist;
        this.issuedbooks={};
}
getbooklist(){
//  Array.from(this.booklist).forEach(function(element){
//      console.log(element);
//      })
   this.booklist.forEach(element => {
       console.log(element);
   });
}
issuebook(bookname,user)
{
    // console.log(this.issuedbooks[bookname]);
    if(this.issuedbooks[bookname]==undefined){
   this.issuedbooks[bookname]=user;
}else{
    console.log("This book is already issued!");
    console.log(this.issuedbooks[bookname]);
}

}
returnBook(bookname){
    delete this.issuedbooks[bookname];
    console.log(`The book ${bookname} is already returned`);
}

}



        obj= new Library(["Harry Potter","Lord of the Rings","Arabian Nights","Marvel Comics"]);
        // console.log(obj.getbooklist());
        // console.log(obj.issuebook("HarryPotter","Rohan"));
        // console.log(obj.returnBook("Harry Potter"));




// Using Prototype method.

// function Lib(booklist)
// {
//   this.booklist=booklist;
//   this.issuedbooks={};
// }

// Lib.prototype.getbooklist=function(){

//   this.booklist.forEach(element => {
//       console.log(element);
//   });

// }
// Lib.prototype.issuebook=function(bookname,user){
    
//     if(this.issuedbooks[bookname]==undefined){
//         this.issuedbooks[bookname]=user;
//     }
//     else{
//         console.log("Already Issued!");
//     }
// }
// Lib.prototype.returnbook=function(bookname){
//     delete this.issuedbooks[bookname];
//     console.log(bookname);
//     }


// let obj= new Lib(["Harry Potter","Lord of the Rings","Arabian Nights","Marvel Comics"]);
// console.log(obj.getbooklist());
// console.log(obj.issuebook("HarryPotter","Rohan"));
// console.log(obj.issuebook("HarryPotter","harry"));
// console.log(obj.returnbook("HarryPotter"));
