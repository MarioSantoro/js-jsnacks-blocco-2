const vet1= [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
let media=0;

for(let i=0 ; i < vet1.length;i++){
    sum += vet1[i];
}

console.log(sum);
media = sum / vet1.length;

console.log(media);
