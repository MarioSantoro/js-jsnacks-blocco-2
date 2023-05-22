let firstString = prompt("Inserisci la prima parola");
let secondString = prompt("Inserisci la seconda parola");

function ChecklengthofString(firstString , secondString){
    if(firstString.length == secondString.length){
        return true;
    } else{
        return false
    }
}

if(ChecklengthofString(firstString , secondString)){
    console.log(firstString , secondString);
}else{
    if(firstString.length > secondString.length){
        console.log(firstString);
    }else{
        console.log(secondString)
    }
}