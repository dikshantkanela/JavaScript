const fakeRequestPromise  = (url)=>{
    return new Promise((resolve, reject)=>{
        const delay = Math.floor(Math.random()*4500)+500;
        setTimeout(()=>{
            if(delay>4000){
              reject("Connection Timeout")
            }
            else{
             resolve("Here is your fake data from"+url);
            }
        },delay)
    })
}

     
     

fakeRequestPromise("books.com/page1")
.then((data)=>{
    console.log("It works (1)")
    console.log(data);
    return fakeRequestPromise("books.com/page2")
})

.then((data)=>{
    console.log("It works (2)")
    console.log(data);
    return fakeRequestPromise("books.com/page3")
})
 
.then((data)=>{
    console.log("It works (3)")
    console.log(data);
})
.catch((data)=>{
    console.log(data);
   console.log("It doesnt work!")
})