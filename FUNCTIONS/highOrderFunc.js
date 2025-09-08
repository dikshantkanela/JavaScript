function tenTimes(funky){   //Parameter is a function
   for(let i=0;i<10;i++){
    funky()*10;
   }
}

function rollDice(){
    let roll= Math.floor(Math.random()*6)+1
    console.log(roll);
}
tenTimes(rollDice);



