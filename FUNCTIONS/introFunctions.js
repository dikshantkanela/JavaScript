
function greetPerson(firstName,lastName){
    console.log(`Hello, ${firstName}`);

}
greetPerson("Dikshant"); // NO Error *until* the lastName is not used inside the defn

// CASE: Function with Parameter but no passed Arguement!
//OUTPUT = Hello, undefined

function multiply(a,b){
    let x= a*b; //means x is a variable of the func only (local)
    return x;
}
let result = multiply(4,5);
console.log(result); //20
console.log(x);  // x is not defined outside func so error in this line!