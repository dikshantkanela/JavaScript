const createGreeting = (greet)=>{
    return (name)=>{
        return `${greet}, ${name}`
    }
    
} 

const greeting = createGreeting("CONGO"); /* if this is logged, the function  return (name)=>{ //returned function
return `${greetStr} ${name}`;
}  will be returned */
const final = greeting("Dikshant");  //  since greeting returned that fn, it will not pass Dikshant as an arguement to returned fn
console.log(final);
