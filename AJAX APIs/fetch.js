    // fetch("https://swapi.dev/api/people/1") //it gives us a promise
    // .then((res)=>{
    //     console.log("Request resolved! ", res); //gives us a readable stream in body
    //     return res.json() //.json also gives a promise
        
    // })

    // .then((data)=>{  
    //     console.log(data); // finally we get json data
    //     return fetch("https://swapi.dev/api/people/2");        
    // })

    // .then((data=>{
    //     return data.json();
       
    // }))

    // .then((data=>{
    //     console.log("SECOND REQ!")
    //     console.log(data)
    // }))

    // .catch((err)=>{
    //     console.log(err);
    // })

    //USING ASYNc AWAIT!
    const starWars = async ()=>{
    const req1 = await fetch("https://swapi.dev/api/people/1")
    console.log("First Request (proper):");
    const data = await req1.json()
    console.log(data);
    }

    starWars();
    console.log("HEllo")
 