// Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.
// Bonus:
// crea un peperone con una funzione
let pesoTotale = 0;
let peperoni = [
    {
        peso : 6,
        lunghezza : 10,
        varietà : "giallo"
    } ,
    {
        peso : 3,
        lunghezza : 10,
        varietà : "giallo"
    }
    ,
    {
        peso : 3,
        lunghezza : 10,
        varietà : "giallo"
    }
    ,
    {
        peso : 3,
        lunghezza : 10,
        varietà : "giallo"
    }
    ,
    {
        peso : 3,
        lunghezza : 10,
        varietà : "giallo"
    }
    ,
    {
        peso : 3,
        lunghezza : 10,
        varietà : "giallo"
    }
    ,
    {
        peso : 3,
        lunghezza : 10,
        varietà : "giallo"
    }
    ,
    {
        peso : 3,
        lunghezza : 10,
        varietà : "giallo"
    }
    ,
    {
        peso : 3,
        lunghezza : 10,
        varietà : "giallo"
    }
    ,
    {
        peso : 3,
        lunghezza : 10,
        varietà : "giallo"
    }
];

for(let i = 0 ; i<peperoni.length ; i++){
    pesoTotale += peperoni[i].peso;
}
console.log(peperoni);
console.log(pesoTotale);

peperoni.push(CreatePepperoni(4 , 6 , "rosso"));

console.log(peperoni);


function CreatePepperoni( pezo , lung , varie){
   return{
    pezo,
    lung,
    varie
   }
}