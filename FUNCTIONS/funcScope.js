// WE CAN USE AND UPDATE GLOBAL VARIABLES IN A FUNC
// LOCAL VARIABLES OF A FUNCTIONS CANNOT BE USED OUTSIDE
// LOCAL SCOPE>GLOBAL SCOPE

let myCar= "BMW";
function car(){
    myCar= "Audi";  //Global variable's value can be changed
    console.log(myCar);
}
car();  //Audi
console.log(myCar); //Audi




function movie(){
    let myMovie="XXX";
}
// console.log(myMovie); // ERROR myMovie is a local var

let favBike="Splendor";
function bike(){
   let favBike="Bullet"
    console.log(favBike);  
}

bike(); //Bullet
console.log(favBike); //Splendor

//Mere bhai function ke andar ke let variable ki value sirf uski hi hai!!!