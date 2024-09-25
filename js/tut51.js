console.log("This is tutorial 51");
// Iterators

function Iterators(values){
    let index=0;

    // We will return an object.
    return {
        next:function(){
            if (index<values.length)
            // We will return this object.
            return {
                  value: values[index++],
                  done: false
            }
            else
            return {
                done:true
            }
        }

    }
}

const myArray=['Apple','Orange','LadyFinger','Grapes'];
console.log('MyArray',myArray);


// Using the iterators

const fruits=Iterators(myArray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next().value);
// console.log(fruits.next());
