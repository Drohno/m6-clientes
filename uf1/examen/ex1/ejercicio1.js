'use strict';

    var nombre, fecha, altura, peso, sexo, edad, imc, diagnos, error = false;

function calcular(){
    try{
        nombre = document.getElementById("nombre").value;
        if(quitaEspacios(nombre).length < 1){
            alert("Nombre no introducido");
        }
    }catch(err){
        alert("Nombre no introducido");
        error = true;
    }
    try{
        fecha =  document.getElementById("fecha").value;
        fecha = new Date(fecha);
        edad = calcularEdad();
        if(isNaN(edad)){
            error = 1;
            alert("Fecha incorrecta");
        }
    }catch(err){
        alert("Fecha no introducida");
        console.log(err);
        error = true;
    }

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    sexo = document.getElementById("sexo").value;

    diagnostico();

}

function displayResultado(){
    document.getElementById("edad").innerHTML = edad;
    document.getElementById("imc").innerHTML = imc;
    document.getElementById("diagnos").innerHTML = diagnos;
}

function quitaEspacios(palabra){
    return palabra.replace(/\s/g,'');
}

function calcularEdad(){
    var diferencia = Date.now() - fecha.getTime();
    console.log(diferencia);
    if(diferencia < 0){
        alert("¿Vienes del futuro?");
        return "Fail";
    }
    var añosEnMs = new Date(diferencia);
    return Math.abs(añosEnMs.getUTCFullYear() - 1970);
}

function diagnostico(){
    if(error){
        error = false;
    }
    else{
        //Pasamos la altura a metros
        altura /= 100;
        imc = peso / (altura*altura);
        imc = imc.toFixed(2);
        if(edad < 10){
            if(imc >= 0 && imc < 13){
                diagnos = "Desnutricion";
            }
            else if(imc >= 13 && imc < 14) {
                diagnos = "Bajo Peso";
            }
            else if(imc >= 14 && imc < 19){
                diagnos = "Normal";
            }
            else{
                diagnos = "Sobrepeso";
            }
        }
        else{
            if(sexo === "h"){
                if(imc >= 0 && imc < 18){
                    diagnos = "Desnutricion";
                }
                else if(imc >= 18 && imc < 21) {
                    diagnos = "Bajo Peso";
                }
                else if(imc >= 21 && imc < 26){
                    diagnos = "Normal";
                }
                else{
                    diagnos = "Sobrepeso";
                }
            }
            else{
                if(imc >= 0 && imc < 17){
                    diagnos = "Desnutricion";
                }
                else if(imc >= 17 && imc < 21) {
                    diagnos = "Bajo Peso";
                }
                else if(imc >= 21 && imc < 25){
                    diagnos = "Normal";
                }
                else{
                    diagnos = "Sobrepeso";
                }
            }
        }
        displayResultado();
    }
}