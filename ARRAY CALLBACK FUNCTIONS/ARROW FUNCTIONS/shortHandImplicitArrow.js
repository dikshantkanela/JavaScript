//NORMAL:
const isEven = (num)=>{
    return num%2===0; //true/false
}
//IMPLICIT RETURN: NOTE: only for one liner function with a return statement!
const isOdd=(number)=>(
    num%2===0
)              //NO NEED OF return STATEMENT!

//VERY SHORT
const isNumber= userInput=> typeof(userInput)==='number' //true/false