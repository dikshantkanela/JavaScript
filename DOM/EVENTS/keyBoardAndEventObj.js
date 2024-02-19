const inp = document.querySelector("input");
inp.addEventListener("keydown",function(e){ //e must be passed
    console.log(e); //returns a keyboard event object 
    console.log(e.key);
    console.log(e.code); 
})

// keydown - when u press the key
//keyup - when u release the key 
//click
//mouseup
//mousedown
//submit