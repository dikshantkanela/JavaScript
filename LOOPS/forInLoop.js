const names = {
    1: "Dikshant",
    2: "Devansh",
    3:  "Dhruv"
}

for(let first in names){
    console.log(first);
    console.log(names[first]);  
}

for(let element of Object.values(names)){
    console.log(element); // we get values which are avaiable in array of keys
}