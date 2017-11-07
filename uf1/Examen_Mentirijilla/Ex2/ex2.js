'use strict';

var numero = prompt("Introduce the number which you want it's table");
numero = parseInt(numero);
while(isNaN(numero)){
    numero = prompt("Introduce the number which you want it's table");
}

var tabla = document.getElementById("tabla");
for(var i = 0; i<=10; i++){
    insertarRow(i);
}

function insertarRow(index){
    var row = document.createElement("tr");
    var c1 = document.createElement("td");
    var c2 = document.createElement("td");
    c1.appendChild(document.createTextNode(index + " X " + numero));
    c2.appendChild(document.createTextNode(parseInt(index) * parseInt(numero)));
    row.appendChild(c1);
    row.appendChild(c2);
    tabla.appendChild(row);
}