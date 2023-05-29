let numbers=[];
let temp = 0;
for(let i=0;i<4;i++){
     temp = Math.floor(Math.random() * 5) +1;
    if(numbers.includes(temp)){

    }else{
    numbers.push(temp)
    }
}

console.log(numbers)

