const greet = (name)=>{
    return `hello ${name}`;
}

const wrapperFunc = (fn)=>(name)=>{
    return fn(name);
}

const res = wrapperFunc(greet)();
console.log(res);
