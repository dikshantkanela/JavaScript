const seatingChart=[
  ["Dikshant", "Devansh", "Aryan"],
  ["Dhruv", "Manan", "Aditya"],
  ["Kavish", "Harshit","Mayank"],
  ["Naman","Navyam","Manas"]

]

for(let i=0;i<seatingChart.length;i++){
    console.log(`ROW #${i+1}`)
    for(let j=0;j<seatingChart[i].length;j++){
        console.log(seatingChart[i][j]);
    }
}