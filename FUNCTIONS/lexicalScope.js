function outer() {
  let name = "Dikshant";
  function inner() {
    let surname = "Kanela";
    console.log(`My name is ${name}`); // this variable is fetched to the inner func from outer scope!
    console.log(`My surname is ${surname}`); //this is the usual local variable to inner func
  }
  console.log(surname); // ERROR! inner can access outer variables but outer can't access inner variables in its block!
  inner(); // this must be called
}
outer();