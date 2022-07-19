const validator = {

//función para comenzar a validar el cc number
  cardValidation: function cardValidation(){

  let number = []; 
  let pares = [];
  let impares = [];
  let sumTotal = 0;
  let cont = 1;
  let valor = document.getElementById("cardNumber").value; //0btener data cc number
  
  for (var i = 0; i < valor.length; i++) {
    number.push(+valor.charAt(i));
  }
  number.reverse();

  for (let i = 0; i < number.length; i++) {
    //impares
    if (cont % 2 !== 0) {
      impares.push(number[i]);
    } else {
      pares.push(number[i] * 2);
    }
    cont++;
  }
  console.log("este es el array de impares " + impares);
  console.log("este es el array de pares " + pares);
  console.log(typeof pares[3]);

  for (let i = 0; i < pares.length; i++) {
    if (pares[i] >= 10) {
      let parToString = `${pares[i]}`;
      let firstChar = parToString.charAt(0);
      let secondChar = parToString.charAt(1);
      console.log(secondChar);
      let sumPar = parseInt(firstChar) + parseInt(secondChar);
      console.log(typeof sumPar);
      pares[i] = sumPar;
    } else {
      console.log("nada");
    }
  }
  console.log(pares);

  let arrFinal = pares.concat(impares);
  console.log(arrFinal);

  for (let i = 0; i < arrFinal.length; i++) {
    //se suma todo y se calcula
    sumTotal += arrFinal[i] % 10;
  }
  console.log(sumTotal);
  sumTotal = sumTotal % 10;
  console.log(sumTotal);
  if (sumTotal === 0) {
    return alert("Your credit card is valid. ");
  } else {
    return alert("Your credit card is invalid. Please try again. ");
    
  }

  

}
}

export default validator;
