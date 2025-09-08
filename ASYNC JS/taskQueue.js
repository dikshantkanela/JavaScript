// microtask queue: IT STORES THE CALLBACKS FROM .then(), .catch()
// microtasks have higher priority
// task queue : IT STORES THE CALLBACKS FROM setTimeout(), setInterval()
// they have lower priority
// sync code> microtask > task 

console.log("Start"); // sync code

setTimeout(()=>{
    console.log("Hello from setTimeout");
  
},0);  // async code + task queue

const p1 = new Promise((resolve,reject)=>{
   resolve("Completed");  // async code + microtask queue storing
})           

const resolveFunc = async function(){
    console.log("Chaalbaaz");
    const val = await p1;
    console.log(val)
}
resolveFunc();  // async code + microtask queue handling



console.log("End");  // sync code
const random = ()=>{
    console.log("WOW")
}
random() // sync code