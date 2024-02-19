// let marks = [100,98,87,67,43,76,33,65];
// const bool = marks.every((a)=>{
//     return a>33;
// })

// console.log(bool)  // true/false only!

function allEvens(arr){
    const res = arr.every((num)=>{
        return num%2==0;
    })
    console.log(res);
}

allEvens()