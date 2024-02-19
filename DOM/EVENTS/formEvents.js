const form = document.querySelector("#shelterForm");
const input = document.querySelector("#inp")
const list = document.querySelector("#catList")
form.addEventListener("submit",function(e){
    e.preventDefault(); //avoids moving to another page after submittig form
    const newEle = document.createElement("li");
    const listElement=(input.value); //rattle
    newEle.innerText=listElement;
    list.append(newEle); //append the input value to ul as li
    input.value="";
    


})