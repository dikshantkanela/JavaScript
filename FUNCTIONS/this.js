// Consider a Function
// CASE1: Function inside object AKA Method will reference the object itself
// CASE2: Function is not a method then it will refer to the Window Object

// CASE1:
const cars = {
    Indian:"Tata",
    German: "VW",
    Japanese:"Honda",
    Korean: "Kia",
    dreamCar(){
        console.log(this); // Will Refer to the object itself
        console.log(this.German,"is Dikshant's Dream Car!"); //VW b/c this = object
    }
}
console.log(cars.dreamCar())

cars.random = function(){
    console.log(this);  //Will Refer to object again!
}

//CASE 2:
function myFunc(){
    console.log(this)  // Will refer the window object
}
myFunc();