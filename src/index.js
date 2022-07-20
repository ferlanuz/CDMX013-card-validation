import validator from './validator.js';

console.log(validator);
      //dar evento al botón validar
     document.getElementById("btn").addEventListener("click", validator.isValid);


     //dar evento al input
     document.getElementById("cardNumber").addEventListener("keyup", (e) =>{
         let inputValue = e.target.value; //Obtener el valor del evento del input y almacenarlo en una variable
         document.getElementById("cardNumber").value = inputValue. //el input es igual a la variable que contiene el valor
         replace(/\s/g, "").replace(/\D/g, "");
         
    })



    
             


    
        

    

    





