
const validator = {

  //función para comenzar a validar el cc number
  isValid: function isValid(creditCardNumber){
  
  let number = []; 
  let pares = [];
  let impares = [];
  let sumTotal = 0;
  let cont = 1;
  
  
  
  for (let i = 0; i < creditCardNumber.length; i++) {
    number.push(+creditCardNumber.charAt(i)); //pushear la data a la variable number
  }
  number.reverse(); //voltea el num al revés 

  for (let i = 0; i < creditCardNumber.length; i++) {
    
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
      let parToString = `${pares[i]}`;//partimos el num de dos digits 
      let firstChar = parToString.charAt(0); //primer digito
      let secondChar = parToString.charAt(1); //segundo digito
      console.log(secondChar);
      let sumPar = parseInt(firstChar) + parseInt(secondChar); //sumamos ambos num
      console.log(typeof sumPar);  //comprobamos que si es num
      pares[i] = sumPar; //se reasigna el valor obtenido en la var sumpar a la var pares 

    } else {
      console.log("nada");
    }
  }
  console.log(pares); 

  let arrFinal = pares.concat(impares);  //concatenamos ambas variables con todos los digitos
  console.log(arrFinal);

  for (let i = 0; i < arrFinal.length; i++) { 
    sumTotal += arrFinal[i] % 10;  //se suma todo y se calcula 
   }
   console.log(sumTotal);
   sumTotal = sumTotal % 10; //usamos el modulo para verificar que el residuo sea 0
   console.log(sumTotal);
   if (sumTotal === 0) {  //es valida
    
      
       return true;
     } else {
    
     return false; //invalida
   }
  
   },
    //MASKIFY
  maskify: function (creditCardNumber) {
    const last4Characters = creditCardNumber.substr(-4);
    const maskingCharacters = creditCardNumber
      .substr(0, creditCardNumber.length - 4)
      .replace(/\D/g, "#")
      .replace(/\d/g, "#");
    creditCardNumber = `${maskingCharacters}${last4Characters}`;
    console.log(creditCardNumber);

    return creditCardNumber;
  },

     
  
  


}



export default validator;
