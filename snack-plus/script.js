/**
 * 
 * Generare una lista usando una funzione:
 * nell'html ci dovrà essere esclusivamente un elemento ul parent,
 * attraverso una funzione creiamo un singolo elemento html di tipo li
 * poi ne aggiungiamo una decina all'ul, sempre via js.
 * 
 * BONUS:
 * Se clicchiamo sul li il suo testo verrà sbarrato.
 */

const ul = document.querySelector("ul");


for(let i=0;i<60;i++){
    const Elementli = createElement();
    Elementli.addEventListener("click" , function(){
        Elementli.classList.toggle("toggle");
    });

    ul.appendChild(Elementli);
}

function createElement(){
    const liElement = document.createElement("li");
    liElement.innerHTML = "Item";
    return liElement;
}