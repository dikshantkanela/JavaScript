// Only return those names in form of an array that have less than 10 characters

function validUserNames(usernames) {
       const target=usernames.filter((name)=>{
        if(name.length<10){
            return name;
        }
    })
    console.log(target);
  }
validUserNames(["Dikshant","hjsdhjshjdshj","Naman","lalalalala"])