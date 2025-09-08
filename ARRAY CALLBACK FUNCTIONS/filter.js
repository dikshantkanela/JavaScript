// const nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const oddNums=nums.filter((num)=>{
//     if(num%2==0){
//         return num;
//     }
// })

// console.log(oddNums); //array with only even numbers

const cars = [
    {name:"Honda Civic",Mileage:"20kmpl",fuel:"Petrol",body:"Sedan"},
    {name:"Honda Accord",Mileage:"10kmpl",fuel:"Petrol",body:"Sedan"},
    {name:"Skoda Octavia",Mileage:"15kmpl",fuel:"Diesel",body:"Sedan"},
    {name:"Hyundai Creta",Mileage:"18kmpl",fuel:"Petrol", body:"SUV"}
]

const pertrolCars = cars.filter((car)=>{
   return car.fuel==="Petrol"
}
)

console.log(pertrolCars)
const pertrolCarArr = pertrolCars.map((val)=>{
    return val.name
}) 
console.log(pertrolCarArr)