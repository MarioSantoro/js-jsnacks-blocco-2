let playerBasket = {
    codiceGiocatore : createIDString(3) + randomNumber(0 , 9) + randomNumber(0 , 9) + randomNumber(0 , 9),
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

function createIDString(length){
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
}
