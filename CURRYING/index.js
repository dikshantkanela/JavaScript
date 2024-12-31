// CURRYING : 
//Each function in the chain takes one argument and returns a new function that takes the next argument. When the final function receives its argument, it completes the computation and returns the result.

//In JavaScript, currying is a technique that transforms a function with multiple arguments into a sequence of functions, each taking a single argument. In a curried function, instead of passing all arguments at once, you pass them one at a time.

function add(a) {
  return function b(b) {
    return function c(c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));

const userObj = {
    name:"Dikshant",
    car:"Virtus GT",
    city:"Delhi"
}

function userInfo(obj){
    return function (key){
       return obj[key];
    }
}

const userName = userInfo(userObj)("name");
console.log(userName);
const userCar = userInfo(userObj)("car");
console.log(userCar);
