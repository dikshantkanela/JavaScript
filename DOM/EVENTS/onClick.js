const btn = document.querySelector("#v2");
btn.onclick = function(){ //when btn is clicked this func will execute
    console.log("You Clicked Me!");
}  //must be a function!

function scream(){
    console.log("AHHHHH");
    console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream; //when btn is touched this function will be exexuted
document.querySelector("h1").onclick = ()=>{
    console.log("You clicked a heading!");
}