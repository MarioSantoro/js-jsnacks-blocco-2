//Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
//Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
//Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.

const button = document.querySelector("button");
button.addEventListener("click" , function(){
    let control=true;
    let TotalTry=0;
    let RandomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(RandomNumber)
    while(control){
        let number= parseInt(prompt("Inserisci un numero per indovinare quello estratto casualmente"));
        TotalTry++;
        if(number === RandomNumber){
            control= false;
        }else{
            if(number < RandomNumber){
                console.log("Il numero da indovinare è più grande");
            }else{
                console.log("Il numero da indovinare è più piccolo");
            }
        }
    }
    console.log("Hai indovinato provando " + TotalTry + " volte")

})

