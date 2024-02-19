function tenTimes(funky){   //Parameter is a function
    return funky()*10;
 }
function rollDice (){
     let roll= Math.floor(Math.random()*6)+1
     return roll;
 }
 
 const result =tenTimes(rollDice)  ; 
 console.log(result);