// PROBLEM STATEMENT : objects don't have length!

const scores = {
    "Dikshant":100,
    "Devansh":50,
    "Harshit":80,
    "Aryan":100
}
let len= Object.values(scores).length;
sum=0
for(let score of Object.values(scores)){
    sum+=score;
       
}
console.log("Average is = "+ sum/len);


