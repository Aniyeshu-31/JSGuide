console.log("tutorial 32.JS");


// Latest ES6 Javascript Syntax

class Employee{
    
   
     constructor(givenName,givenExperience,givenDivision){
    this.name= givenName;
    this.experience=givenExperience;
    this.division= givenDivision;

}
   
slogan(){
    return `I am in the best company ~ ${this.name}`;
}

joiningyear()
{
    return 2022-(this.experience);
}

static add (a,b)       // Not neccesary to make object when keyword "static is used" with method name.
{
    return (a+b);
}
}


class programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language,github){
        super(givenName,givenExperience,givenDivision);
        this.language=language;
        this.github=github;
    }
    favouriteLanguage(){
        if(this.language=='Python')
        return 'Python';
        else
        return 'Javascript';
    }
    static multiply(a,b)
    {
        return (a*b);
    }
}

obj= new Employee("Aniyeshu",6,"3*");
console.log(Employee.add(12,12));
// console.log(obj);


obj = new programmer("Ayesha Singh",6,3,"Javascript","@ayeshaSingh19");
console.log(obj);
console.log(obj.favouriteLanguage());
// console.log(obj.multiply(9,7));
console.log(programmer.multiply(9,7));