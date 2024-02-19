//NORMAL WAY
const btn = document.querySelector("#v2");
btn.onclick = function(){ //when btn is clicked this func will execute
    console.log("You Clicked Me!");
}  //must be a function!

//WITH EVENT LISTENER

const btnNew = document.querySelector("#v3");
btnNew.addEventListener("mouseup",function(){
    alert("YOU CLICKED ME!");
})