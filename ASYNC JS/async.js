//BASICS
async function hello(){  //Automatically make a promise 
    return "Hey Guy!";//Promise gets resolved with this return statement --> then
    throw ("ERROR!!"); //Promise gets rejected with throw -->catch
}
    
hello()
.then((data)=>{
    console.log("Promise Resolved with :"+ data); //Hey Guy
})
.catch((err=>{
    console.log("Promise Rejected with" + err); //ERROR!!
}))

//USE

const login  = async (username,password)=>{
    if(!username || !password){
        throw "Missing Credentials"
    }
    if(password==="manan"){
        return "WELCOME!"
    }
    else{
        throw "Wrong Password!"
    }
}

login("Dikshant","nanan")
.then((data)=>{ 
    console.log(data);
    console.log("Logged In!");
})
.catch((err)=>{
    console.log(err)
})