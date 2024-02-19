function capitalize(str){
    let firstLetter= str[0].toUpperCase();
    let newString = firstLetter+str.slice(1,str.length);
    return newString;
}

let result  = capitalize("dikshant");