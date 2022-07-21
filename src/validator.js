
const validator = {

     maskify: function maskify (){
         let valor = document.getElementById("cardNumber").value;
         let lastFour = valor.substr(-4);
         let maskNumbers = valor.substr(0, valor.length -4)
          .replace(/\d/g, "#")
          .replace(/\D/g, "#");
             valor = `${maskNumbers}${lastFour}`;
       document.getElementById("cardNumber").value = valor;
         console.log(valor);

         return valor;
     },

  //función para comenzar a validar el cc number
  isValid: function isValid(){
  let valid = false
  let number = []; 
  let pares = [];
  let impares = [];
  let sumTotal = 0;
  let cont = 1;
  let valor = document.getElementById("cardNumber").value; //0btener data cc number
  
  
  for (let i = 0; i < valor.length; i++) {
    number.push(+valor.charAt(i)); //pushear la data a la variable number
  }
  number.reverse(); //voltea el num al revés 

  for (let i = 0; i < number.length; i++) {
    
    if (cont % 2 !== 0) {        //impares
      impares.push(number[i]);
    } else {
      pares.push(number[i] * 2); //digit en posicion par *2
    }
    cont++;   
  }
  console.log("este es el array de impares " + impares);
  console.log("este es el array de pares " + pares);  //si jala
  console.log(typeof pares[3]); //si es numero

  for (let i = 0; i < pares.length; i++) {
    if (pares[i] >= 10) {
      let parToString = `${pares[i]}`;  //patimos el num de dos digits
      let firstChar = parToString.charAt(0); //primer digito
      let secondChar = parToString.charAt(1); //segundo digito
      console.log(secondChar);
      let sumPar = parseInt(firstChar) + parseInt(secondChar); //sumamos ambos num
      console.log(typeof sumPar);  //comprobamos que si es num
      pares[i] = sumPar; //igualamos primer variable de pares a variable de suma
    } else {
      console.log("nada");
    }
  }
  console.log(pares); 

  let arrFinal = pares.concat(impares);  //concatenamos ambas varables con todos los digitos
  console.log(arrFinal);

  for (let i = 0; i < arrFinal.length; i++) { 
    sumTotal += arrFinal[i] % 10;  //se suma todo y se calcula 
  }
  console.log(sumTotal);
  sumTotal = sumTotal % 10; //usamos el modulo para verificar que el residuo sea 0
  console.log(sumTotal);
  if (sumTotal === 0) {
     alert("Your credit card is valid. ")
    valid = true; //valida
    console.log(valid);
  } else {
    alert("Your credit card is invalid. Please try again. "); //invalida
    valid =false; //invalida
    console.log(valid);
  }
  


   }
     
  
  


}



export default validator;
