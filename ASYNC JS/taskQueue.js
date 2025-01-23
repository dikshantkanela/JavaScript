// microtask queue: IT STORES THE CALLBACKS FROM .then(), .catch()
// microtasks have higher priority
// task queue : IT STORES THE CALLBACKS FROM setTimeout(), setInterval()
// they have lower priority

console.log("Start");

const p1 = new Promise((resolve,reject)=>{
   resolve("Completed");
})

p1.then(data=>data);

setTimeout(()=>{
    console.log("Hello from setTimeout");

},0);

console.log("End");






console.log("End");