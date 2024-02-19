// SIMPLE
// NOTE: No change is obj/array!
const user1 = {
    name:"Dikshant",
    surname:"Kanela",
    age:19,
    college:"MSIT"
}
const {name,surname,age}=user1;
console.log(name,surname,age);

// BY CHANGING THE NAME OF THE PROPERTY AS PER WISH
const {name:firstName,surname:lastName}=user1;
console.log(firstName,lastName)

// FOR A PROPERTY THAT DOESNT EXIT IN OBJ!
const {deathYear="N/A"}=user1
console.log(deathYear); //N/A

// WITH SPREAD
const car = {
    brand:"Porsche",
    model:"Cayenne",
    year:"2022",
    country:"India"
}

const {brand,model,...others}=car;
console.log(others) // {year:2022,country:India}