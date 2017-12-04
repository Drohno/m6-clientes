"use strict";

var clientes = [];

clientes.push(new Cliente(clientes.length, "Carlos", -19832));
clientes.push(new Cliente(clientes.length, "Roger", 2000));
clientes.push(new Cliente(clientes.length, "Ruben", -3123));
clientes.push(new Cliente(clientes.length, "David", 4000));

function generateTable(){
    var listado = document.getElementById("listado");
    while (listado.firstChild) {
        listado.removeChild(listado.firstChild);
    }
    for(var i=0; i<clientes.length; i++){
        var fila = document.createElement("tr");
        for(var j=0;j<4;j++){
            var columna = document.createElement("td");
            switch(j){
                case 0:
                    columna.innerHTML = clientes[i].id;
                break;
                case 1:
                    columna.innerHTML = clientes[i].nombre;
                break;
                case 2:
                    columna.innerHTML = clientes[i].saldo+"€";
                    columna.setAttribute("id", clientes[i].id);
                break;
                case 3:
                    var plus = document.createElement("i"), minus = document.createElement("i");
                    plus.setAttribute("class", "fa fa-plus");
                    plus.setAttribute("aria-hidden", "true");
                    plus.setAttribute("style", "margin-right: 5px;");
                    plus.setAttribute("onclick", "modifySueldo("+clientes[i].id+",true);");

                    minus.setAttribute("class", "fa fa-minus");
                    minus.setAttribute("aria-hidden", "true");
                    minus.setAttribute("style", "margin-left: 5px;");
                    minus.setAttribute("onclick", "modifySueldo("+clientes[i].id+",false);");

                    columna.appendChild(plus);

                    columna.appendChild(minus)
                break;
                default:
                break;
            }
            fila.appendChild(columna);
            
        }
        listado.appendChild(fila);
    }
    refreshScreen();
}

function amount(mensaje){
   var cantidad = prompt(mensaje, 0);
   cantidad = cantidad = parseInt(cantidad);
   while(isNaN(cantidad)){
    cantidad = prompt(mensaje, 0);
    cantidad = parseInt(cantidad);
   }
   return cantidad;
}

function modifySueldo(id, accion){
    if(accion){
        clientes[id].depositar(amount("Ingrese la cantidad que desea despositar"));
    }else{
        clientes[id].extraer(amount("Ingrese la cantidad que desea extraer"));
    }
    refreshScreen();
}

function refreshScreen(){
    for(var i=0; i<clientes.length; i++){
        document.getElementById(clientes[i].id).innerHTML = clientes[i].saldo+"€";
        if(clientes[i].saldo < 0){
            document.getElementById(clientes[i].id).setAttribute("class", "red");
        }else{
            document.getElementById(clientes[i].id).setAttribute("class", "black");
        }
    }
}