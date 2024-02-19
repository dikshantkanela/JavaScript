//MAP METHOD RETURNS A COPIED ARRAY!
const singleNums=[5,7,8,12,23,43,21];
const doubleNums= singleNums.map(function(num){
    
     return num*2; //Copied the singleNum array with doubling each element
})

console.log(doubleNums)

// Question --> only give firstname
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames= fullNames.map(function(el){
    return el.first;
})

console.log(firstNames)