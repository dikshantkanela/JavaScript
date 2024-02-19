// Functions : 
// Add a Todo  "new" ---> Push
// Display Todos "display"---> Normal
// Remove Todos at an index  "delete"---> splice/slice
// Quit the App "quit"
const list=[];
let userChoice;
let index;
while(true){
    userChoice = prompt("What would you like to do?")
    if(["new", "display", "delete", "quit"].includes(userChoice)){
       if(userChoice=="new"){
        New();
       }
       else if(userChoice=="display"){
        disp();
       }
       else if(userChoice=="delete"){
         del();
       }
       else{
         break;
       }
    }
    else{
        alert("Invalid request! Please Select from NEW,DISPLAY,DELETE or QUIT");
    }
   
}
function New(){
    let entry= prompt("Enter New Todo: ");
    list.push(entry);
    console.log(`${entry} added to the ToDo List!`);
}

function disp(){
    for(let i=0;i<list.length;i++){
        console.log(i,":",list[i]);
    }
}

function del(){
   index= prompt("Enter the index of the ToDo you want to Delete: ");
   list.splice(index,1);
   console.log("Element Removed")
}

