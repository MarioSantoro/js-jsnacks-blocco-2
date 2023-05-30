const automobili = [
    {
        marca : "fiat",
        modello : "punto",
        alimentazione : "benzina"
    } ,
    {
        marca : "suzuki",
        modello : "punto",
        alimentazione : "diesel"
    } ,
    {
        marca : "fiat",
        modello : "punto",
        alimentazione : "diesel"
    } ,
    {
        marca : "fiat",
        modello : "panda",
        alimentazione : "diesel"
    } ,
    {
        marca : "fiat",
        modello : "punto",
        alimentazione : "gas"
    } ,
    {
        marca : "fiat",
        modello : "punto",
        alimentazione : "diesel"
    } ,
    {
        marca : "lamborghini",
        modello : "nuova",
        alimentazione : "elettrica"
    } ,
    {
        marca : "fiat",
        modello : "punto",
        alimentazione : "benzina"
    } ,
    {
        marca : "opel",
        modello : "vecchia",
        alimentazione : "benzina"
    } ,
    {
        marca : "fiat",
        modello : "punto",
        alimentazione : "benzina"
    } ,
    {
        marca : "fiat",
        modello : "punto",
        alimentazione : "benzina"
    } ,
    {
        marca : "fiat",
        modello : "punto",
        alimentazione : "benzina"
    } ,
    {
        marca : "fiat",
        modello : "punto",
        alimentazione : "benzina"
    } ,
    {
        marca : "fiat",
        modello : "punto",
        alimentazione : "benzina"
    } ,
    {
        marca : "fiat",
        modello : "punto",
        alimentazione : "benzina"
    } ,
];

let benzina = [];
for(let i = 0 ; i< automobili.length; i++){
    if(automobili[i].alimentazione === "benzina"){
         benzina[i] = automobili[i];
    }
}
console.log(benzina);
