'use strict';

var numero = prompt("Introduce the number and I'll sum up it's digits");
numero = parseInt(numero);
while(isNaN(numero)){
    numero = prompt("Introduce the number and I'll sum up it's digits");
}
var suma = 0;
numero = numero.toString();
for(var i=0;i<numero.length;i++){
    suma +=  parseInt(numero[i]);
}

document.write("The sum up of the number " + numero + " is: "+ suma);