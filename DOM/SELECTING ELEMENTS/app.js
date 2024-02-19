const allImages = document.getElementsByTagName("img");
for(let image of allImages){
    console.log(image.src);
    // image.src= "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"

}

const squareImages=document.getElementsByClassName("square")
for(let image of squareImages){
    image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const links = document.querySelectorAll("a");
for(let link of links){
    console.log(link.href);
}

    