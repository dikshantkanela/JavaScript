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


// //OLD WAY
// function getData(){
//     p.then((res)=>{
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
handlePromise()

// call stack : handleProm() p1  ___ p1 done handlePromise()  p2 ___ p2 done handlePromise()