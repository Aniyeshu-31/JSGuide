console.log("Tutorial 29- Prototpye inheritance");

const proto={
    slogan:function(){
        return `this company is the best`;
    },
    changeName: function(newname)
    {
        this.name=newname;
    }

}

// This creates harry object

// let harry= Object.create(proto);
// harry.name="Harry";
// harry.role="Programmer";
// // console.log(harry);
// harry.changeName("harry2");


// Another Syntax to write the above thing 
// This also create harry1 object



const harry1= Object.create(proto,{
    name: {value:"HARRY" , writable: true},        
    role: {value:"Programmer"},

})

// console.log(typeof harry1.name);
// harry1.changeName("Harry2"); 
// console.log(harry1);



function Employee(name,salary,experience){
         this.name=name;
         this.salary=salary;
         this.experience=experience;
}
// Slogan
Employee.prototype.slogan= function(){
    return `This company is the best . Regards, ${this.name}`;

}
let Harryobj= new Employee("Aniyeshu" , 250000, 5);
// console.log(Harryobj);
// console.log(Harryobj.slogan());

// Programmer

function Programmer(name,salary,experience,language){
    Employee.call(this, name,salary,experience);          // this refers to current object(Programmer) which will inherit Employee constructor; 
    this.language=language;
}

let programmer= new Programmer("Rohan",20000,1,"Javascript");

// Inherit Prototype

programmer.prototype= Object.create(Employee.prototype);     // these two are done manually by us 
programmer.prototype.constructor=Employee;


// console.log(programmer);



// Quiz


function flour(name,milk){
    this.name=name;
    this.milk=milk;
}

flour.prototype.mixture= function(){
    return `this is the mixture which is necessary to make the cake`;
}

let flourObj=new flour("Maida", "fullCreamMilk");
console.log(flourObj);
console.log(flourObj.mixture());

function cake(name, milk, bakingSoda,sugar)
{
    flour.call(name,milk);
    this.bakingSoda=bakingSoda;
    this.sugar=sugar;
}
 
let cakeObj= new cake("Maida","fullCreamMilk", 1, 6);

cakeObj.prototype= Object.create(flour.prototype);
cakeObj.prototype.constructor = flour;

console.log(cakeObj);
