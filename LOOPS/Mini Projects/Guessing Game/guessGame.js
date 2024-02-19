function gameFunc(){
let range = parseInt(prompt("Enter the Range : "));
let choice;
while(!range){  // IF USER ENTERS SOMETHING INVALID 
    range = prompt("Enter a valid Range!");
}
const targetNum= Math.floor(Math.random()*range+1);
let guessedNum= prompt("Guess The Number : ");
let count=1;
while(guessedNum!=targetNum){
    if(guessedNum>targetNum){
     alert("Too High!");
     
    }
    else if(guessedNum<targetNum){
     alert("Too Low!");
     
    }
    
    else if(guessedNum==='Q'){
        
        break;

    }
    else{
        alert("You Entered Something Invalid! Enter a valid Number or Press 'Q' to QUIT")
    }
   guessedNum= prompt("Guess The Number or Q to quit : ");
   count++
   return {guessedNum, targetNum, count};
   
}
}
let result = gameFunc(); //typeof(result) is array
if(result.guessedNum=="Q"){
    alert("YOU QUIT!")
}

else{
    alert(`You took ${result.count} counts to guess it right!`);
    choice=prompt("Do you wish to restart?(y/n)");
    if(choice.toLowerCase()=="y"){
      gameFunc();
    }

}


