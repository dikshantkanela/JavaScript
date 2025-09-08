// const userPassword= "ItzD1ksh@nt";
// userInput=prompt("Enter Your Password : ");
// while(userInput!=userPassword){
//     alert("Wrong Password Entered!");  //Without Using break!
//     userInput= prompt("Enter Your Password");
// }
// alert("Login Successful!")

// With using break
const userPassword= "ItzD1ksh@nt";
const userInput=prompt("Enter Your Password : ");
while(true){
    if(userInput==userPassword){
        break;
    }
    alert("Wrong Password Entered!");
    userInput= prompt("Enter Your Password : ");
}
alert("Login Successful!")