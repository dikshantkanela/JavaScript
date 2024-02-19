// #1 Without spread ...
const names = ["Mayank","Manan","Dikshant","Devansh","Aryan"]
const [first,second,third]=names; //first second third are variables
console.log(first); //Mayank
console.log(second); //Manan
console.log(third);  //Dikshant
// #2 With Spread ...
const colleges = ["IIT","NIT","DTU","NSUT","IIIT","MAIT","MSIT","BVP"]
const [a,b,c,d,e, ...others]= colleges;
console.log(a,b,c,d,e) // IIT NIT DTU NSUT IIIT
console.log(others) // [MAIT,MSIT,BVP]
