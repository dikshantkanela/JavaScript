const fakeRequest = (url)=>{
    return new Promise((resolve, reject) => {
        delay = Math.floor(Math.random()*4500)+500;
        setTimeout(()=>{
            if(delay>4000){
             reject("Connection Timeout!");
            }   
            else{
             resolve("Here is your fake data from "+ url)
            }
         },delay);
    })
      
}
// HANDLING PROMISES WITHOUT ASYNC AWAIT
// fakeRequest("books.com/page1")
// .then((data)=>{
//     console.log("It works");
//     console.log(data);
//     return fakeRequest("books.com/page2")
// })

// .then((data)=>{
//     console.log("It works");
//     console.log(data);
//     return fakeRequest("books.com/page3")
// })

// .then((data)=>{
//     console.log("It works")
//     console.log(data)
// })
// .catch((err)=>{
//    console.log(err);

// })

//WITH ASYNC AWAIT
const handlePromise = async ()=>{
     try{
     const data1 = await fakeRequest("books.com/page1");
     console.log("It works(1)");
     console.log(data1);
     const data2= await fakeRequest("books.com/page2");
     console.log("It works(2)");
     console.log(data2);
     const data3= await fakeRequest("books.com/page3");
     console.log("It works(3)");
     console.log(data3);
     } catch(err){
        console.log(err);

     }


}