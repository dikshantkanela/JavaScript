let array = ["Dikshant","Mayank","Naman","Aman","Aryan"];
for(let element of array){
    console.log(element);
}

let nestedArray=[
["Dikshant", "Devansh", "Aryan"],
["Dhruv", "Manan", "Aditya"],
["Kavish", "Harshit","Mayank"],
["Naman","Navyam","Manas"]
]
//NESTED 
for(let row of nestedArray){
    for(let elements of row){
        console.log(elements)
    }
}