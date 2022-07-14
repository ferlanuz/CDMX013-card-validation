import validator from './validator.js';

console.log(validator);

//variable con empty array
let number = [];

let btn = document.getElementById("btn").addEventListener("click", cardValidation);

function cardValidation (){
    let cardNumber = document.getElementById("cardNumber").value;
    for (var i = 0; i < cardNumber.length; i++) {
        number.push(+cardNumber.charAt(i));

    }

    console.log("este es el array original" + number);
    
}