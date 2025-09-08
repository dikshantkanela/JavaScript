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
},[]) // If the initial value of the acc is not definied then it is the first element of the array!

console.log(singleArray)
// occurences
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const occurences = words.reduce((accumulator,currentValue)=>{
    if(accumulator[currentValue]){
        accumulator[currentValue]+=1;
    }
    else{
        accumulator[currentValue] = 1;
    }
    return accumulator;
},{})
console.log(occurences);