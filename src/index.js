import validator from './validator.js';

console.log(validator);

//variable con empty array
let number = [];
//variable que agrega el evento onclick al botón
let btn = document.getElementById("btn").addEventListener("click", cardValidation);
//funcion para comenzar a validar tarjeta
function cardValidation (){
    //Variable que obtiene el valor del input donde el usuario ingreso el dato
    let cardNumber = document.getElementById("cardNumber").value;
    //for loop que va utilizar el valor obtenido del input para pushearlo al  empty array
    for (var i = 0; i < cardNumber.length; i++) {
        number.push(+cardNumber.charAt(i));
        number.reverse(+cardNumber.charAt(i));

    }

    console.log("este es el array original" + number);//expected, "este es el array original 12344567889"
    console.log("este es el array reverse" + number);
    
}