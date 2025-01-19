const createGreeting = (greetStr)=>{ //THIS IS A STRING!
    return (name)=>{ //returned function
        return `${greetStr} ${name}`;
    }   
}

const greeting = createGreeting("CONGO");
const final = greeting("Dikshant");
console.log(final);
