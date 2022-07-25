import validator from './validator.js';

   console.log(validator);
      //dar evento al botón validar
     document.getElementById("btn").addEventListener("click", () =>{
      let creditCardNumber = document.getElementById("cardNumber").value; //obtiene valor del input
      validator.isValid(creditCardNumber);
      



     });

      //evento del input 
     document.getElementById("btn").addEventListener("click", () =>{
        let creditCardNumber = document.getElementById("cardNumber").value;
        validator.maskify(creditCardNumber);
     });






     //popup() 
     document.getElementById("btn").addEventListener("click", mensaje);
        function mensaje (){
          if (validator.isValid != true){
            alert("Credit Card is Valid");
          } else{
             alert("Credit Card Invalid")
          }
        }
     

     
       





      


     
             
    





    
             


    
        

    

    





