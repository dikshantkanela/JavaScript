const nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const oddNums=nums.filter((num)=>{
    if(num%2==0){
        return num;
    }
})

console.log(oddNums); //array with only even numbers