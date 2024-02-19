const fakeRequestCallback = (url,success,failure)=>{
    const delay = Math.floor(Math.random()*4500)+500;
    setTimeout(()=>{
        if(delay>4000){
          failure("Connection Timeout")
        }
        else{
         success("Here is your fake data from"+url);
        }
    },delay)
}

fakeRequestCallback("books.com/page1", function(data){
    console.log("It works")
    console.log(data);
    fakeRequestCallback("books.com/page2",function(data){
        console.log("It works")
         console.log(data);
         fakeRequestCallback("books.com/page3",function(data){
            console.log("it works");
            console.log(data);
         },function(data){
            console.log("it doesnt work!")
            console.log(data);   
         })
    }, function(data){
        console.log("it doesnt work!")
        console.log(data);
    })
}, function(data){
    console.log("it doesnt work!")
    console.log(data);
})


