const users = [
    { name: 'Alice', age: 25 },
    { name: 'Aaob', age: 20 },
    { name: 'Charlie', age: 30 }
];
users.sort((a,b)=>a.age-b.age); //ASC
users.sort((a,b)=>b.age-a.age); //DSC
console.log(users)