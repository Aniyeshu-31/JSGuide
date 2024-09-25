console.log("Tutorial 28");
// Object Literal: Object Prototype (Object.Prototype is available before)
let Obj={
    name:"Harry",
    channel:"codewithharry",
    address:"Earth"
}
// Every constructor has its own Prototype
// Object.Prototype is like a template that is provided in Javascript by Default.
function obj(givenname){
    this.name=givenname;
}

obj.prototype.getName= function()
{
    return this.name;
}
obj.prototype.setName= function(newName)
{
    this.name=newName;
}
let obj2=new obj("Harry");
// console.log(Obj);
console.log(obj2);