function lastElement(inputArray){
    if(inputArray.length==0){
        return null;
    }
    let element = inputArray.slice(inputArray.length-1)[0]; //last element
    return element;
}
lastElement([1,2,10,20,12]);