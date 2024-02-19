const fullName = (firstName,lastName="Kanela")=>{
    console.log(`Hello, ${firstName} ${lastName}`);
}
fullName("Dikshant"); //Dikshant Kanela
fullName("Manan");  // Manan Kanela
fullName("Aryan", "Pahuja"); // Aryan Pahuja
fullName("Kanela"); //Kanela Kanela 

//TRY TO KEEP DEFAULT PARAM AT THE RIGHTMOST SIDE   