/* 
In JavaScript, variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope.
The inner variable “shadows” (hides) the outer one within that inner scope.

Key Points:
Shadowing happens in nested scopes.
The inner variable takes precedence over the outer variable within its scope.
It does not affect the outer variable outside the inner scope.
*/

let x = 10; // global scope

function outer() {
    let x = 20; // shadows global x
    function inner() {
        let x = 30; // shadows outer x
        console.log(x); // 30
    }
    inner();
    console.log(x); // 20
}

outer();
console.log(x); // 10
