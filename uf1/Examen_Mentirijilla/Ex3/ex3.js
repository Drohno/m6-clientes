'use strict';

var firstDate, secondDate;
function setDateFrom(datepicker) {
    var elemento = document.getElementById(datepicker);
    if(datepicker === "first"){
        firstDate = new Date(elemento.value);
        alert("Día primera fecha: "+formatMyDate(elemento.value));
    }
    else{
        secondDate = new Date(elemento.value);
        if(firstDate.getDate() > secondDate.getDate()){
            alert("Por favor inserta una fecha que sea mayor a la primera fecha insertada");
        }
        else if(firstDate.getDate() == secondDate.getDate()){
            alert("Día segunda fecha: "+formatMyDate(elemento.value));
            alert("Wait a minute...! Has insertado la misma fecha dos veces =.='");
        }
        else{
            alert("Día segunda fecha: "+formatMyDate(elemento.value));
            alert("La diferencia entre fechas es de: "+differenceBetweenDates()+" días");
            alert("Yaaay! <(*.*<)   ^(*.*)^   (>*.*)>");
        }

    }
}

//Diferencia en dias
function differenceBetweenDates() {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var temp = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return temp;
}

function formatMyDate(fecha){
    var date = new Date(fecha);
    //console.log(date.getDay());
    var resultado ="";
    switch (date.getDay()){
        case 1:
            resultado += "Lunes";
            break;
        case 2:
            resultado += "Martes";
            break;
        case 3:
            resultado += "Miércoles";
            break;
        case 4:
            resultado += "Jueves";
            break;
        case 5:
            resultado += "Viernes";
            break;
        case 6:
            resultado += "Sábado";
            break;
        default:
            resultado += "Domingo";
            break;
    }
    //console.log(resultado);
    return resultado;
}