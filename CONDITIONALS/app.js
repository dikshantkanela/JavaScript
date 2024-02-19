// let randNum= Math.random();
// if(randNum<0.5){
//     console.log("Random Number is less than 0.5!");
//     console.log(randNum);
// }

const age = prompt("Enter Your Age: ");
if (age >= 0 && age < 5) {
  console.log("You get Free Ticket!");
} 
else if (age >= 5 && age < 10) {
  console.log("Pay 10$");
}
 else if (age >= 10 && age < 65) {
  console.log("Pay 20$");
}
 else if (age >= 65) {
  console.log("Pay 5$");
}

// let n=1;
// for(let i=0;i<n;i++){
//     const password= prompt("Enter Your Password : ");
//     const passwordLength= password.length;
//     if(passwordLength>=6){
//         if(password.indexOf(' ')===-1){
//             alert("Valid Password!");
//         }
//         else{
//             alert("Spaces inside Password not allowed!");
//             n++;
//         }
//     }

//     else{
//        alert("Password should be of at least 6 characters!");
//        n++;
//     }
// }
