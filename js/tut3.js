console.log('tut3');
//variables in js
// var , let , const.
var name='Aniyeshu';
var channel;
channel="CodeWithHarry";
// var name=`Ani"yes"hu`;
console.log(name,channel);
/*
1. Cannot start with numbers.
2. Can start with letter, _ , numbers or $
3. Are case sensitive.
*/
var city="UJJAIN Jn";
console.log(city);
const OwnersName="Aniyeshu";
// OwnersName="Harry"; when there is no need to change the name of the variable.Not Allowed
console.log(OwnersName);
const fruit="Orange";
console.log(fruit);
// let has  a block level scope.
{
    let city="rampur";
    city="Ahemdabad";
    console.log(city);
}
const arr=[12, 33 ,5, 55 ,56];
// arr.push(23);
//arr=[23,234,23,23]; Not Allowed.
console.log(arr);
/* Most common case types
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/