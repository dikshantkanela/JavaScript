const firstPara=document.querySelector("p");
console.log(firstPara)
console.log(firstPara.innerText)
console.log(firstPara.textContent)

const links = document.querySelectorAll("a")
for(let link of links){
    link.style.color="green";
    link.style.textDecoration="blue wavy underline"
}

const firstBold = document.querySelector("b");
console.log(firstBold.parentElement) // To get parent element of first bold tag
const list = firstPara.children  // Children of first para
for(let el of list){
    console.log(el)
}