let playerBasket = {
    codiceGiocatore : "ABC123",
    Nome : "Mimmo",
    Cognome : "Mommmo",
    Età : 23,
    MediaPunti : randomNumber(0 , 50),
    PercTiriDa3 : randomNumber(0 , 100) ,
    Stoppate : randomNumber(0 , 30) ,
    Tiri :  randomNumber(20 , 100)
}

console.log(playerBasket);
function randomNumber(min , max){
    number = Math.floor(Math.random() * max) - min;
    return number;
}