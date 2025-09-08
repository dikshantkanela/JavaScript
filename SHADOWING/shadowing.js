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
