    const p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve("promise resolved!");

        },5000)
    
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve("promise resolved!");

        },10000)
    
    })


// OLD WAY
// function getData(){
//     p1.then((res)=>{
//       console.log(res);  // then this after 5 sec as it was queued
      
//     })  
//     console.log("Namaste"); //First this
// }

// getData();

// Using async await

async function handlePromise(){
    const val = await p1 ; 
    console.log("Namaste JS");
    console.log(val);

    const val2 = await p2; // next 5 sec!
    console.log("Namaste JS");
    console.log(val2);
}
// handlePromise()
// CALL STACK IS USED TO KEEP TRACK OF FN CALLS + TELL THE ORDER OF EXECUTION OF FUNCTIONS IN JS (LIFO)
// call stack : handleProm() p1  ___ p1 done handlePromise()  p2 ___ p2 done handlePromise()
// WE CAN ALSO SAY THAT ALL THE PROMISES IN JS ARE HANDLED BY RUNTIME LIKE NODEJS OR WEBAPI AND NOT THE CALL STACK
// Promises initiate asynchronous operations (e.g., setTimeout, fetch, etc.) that are processed by the Web API.
//  Once a Promise resolves or rejects, its handlers (.then(), .catch()) are placed in the Microtasks Queue.