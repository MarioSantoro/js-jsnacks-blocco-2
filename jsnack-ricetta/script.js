const buttonlist = document.getElementById("addList");
const buttonPlate = document.getElementById("addPlate");
const ulElement = document.querySelector("ul");
const divImg =  document.querySelector("div.img");
let cont= 0;
let array = [];

buttonlist.addEventListener("click" , function(){
    cont ++;
    const inputList = document.querySelector("input");
    array.push(inputList.value);
    const liElement = document.createElement("li");
    liElement.innerHTML = inputList.value;
    ulElement.appendChild(liElement);
    inputList.value = "";
});

buttonPlate.addEventListener("click" , function(){
    if(cont <= 1){

    }else{
        divImg.innerHTML = '<img src="img/img0.jpg" alt="">';
    }
    
}); 