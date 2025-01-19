// sum of array
const arr = [10,20,30,40,50];
const sum = arr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},0)
console.log(sum)

// joining : 
const nested = [["Dikshant"],["Kanela"],["BMW","Audi"]];
const singleArray = nested.reduce((accumulator,currentValue)=>{
   return accumulator.concat(currentValue) 
},[])

console.log(singleArray)