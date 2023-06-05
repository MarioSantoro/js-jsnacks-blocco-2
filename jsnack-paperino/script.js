const str = ["Pippo" , "PLUTO" , "PLuTina" , "PluTessA",  "mIMmO" , "mIMMo" , "mIMMO" ,  "mIMMO" , "miMMO" ,"mIMMO"];

const strPotente = [...str];

const wow = capitalizeNames(strPotente);

console.log(wow)


function capitalizeNames(peopleArray) {
    return peopleArray.toString().toLowerCase().split('').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ').split();
}


