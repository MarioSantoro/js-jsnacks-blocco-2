//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
//Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let numbers = [];
let sum = 0;
let i=0;
while(sum < 50){
    numbers.push(parseInt(prompt("Inserisci un numero fino alla somma di 50")));
    sum += numbers[i];
    i++;
}

console.log("hai raggiunto il numero: " + sum);