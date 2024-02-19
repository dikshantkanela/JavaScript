axios.get("https://swapi.dev/api/people/1") // returns a promise
.then((res=>{
   console.log(res) // we get the data wihout parsing it to json by ourselves!
}))
.catch((er)=>{
    console.log("ERROR : ",er);
})
// USING ASYNC AWAIT
const starWarsAPI = async ()=>{
    try{
    const res = await axios.get("https://swapi.dev/api/people/1");
    console.log(res.data); //.data se we get only info of the person
    }catch(er){
        console.log(er)
    }
}

starWarsAPI()
console.log("hello");