"use strict"

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero;

function calcula(){
    numero = prompt("Introduce el número de tu dni. ¡Recuerda! Es de 8 dígitos", 12345678);
    var numText = numero;
    numero = parseInt(numero);
    if(isNaN(numero)){
        alert("Has introducido un valor no numérico");
        calcula();
    }
    else if(numText.length < 8){
        alert("Has introducido un valor menor de 8 dígitos");
        calcula();
    }
    else{
        if(numero < 0 || numero > 99999999){
            alert("Has introducido un valor erróneo. Tiene que estar entre 0 y 99999999");
            calcula();
        }
        else{
            var temp = numero % 23;
            console.log(numero+"-"+letras[temp]+" temp:"+temp);
            var resultado = document.getElementById("resultado");
            resultado.innerHTML=numero+"-"+letras[temp];
        }
    }
}