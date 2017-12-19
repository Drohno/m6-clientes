"use strict";

var clientes = [];

clientes.push(new Cliente(clientes.length, "Carlos", -500));
clientes.push(new Cliente(clientes.length, "Roger", 2000));
clientes.push(new Cliente(clientes.length, "David", 4000));


function generateTable() {
    document.getElementById("listado").innerHTML = "";
    for (var i = 0; i < clientes.length; i++) {
        document.getElementById("listado").innerHTML +=`<tr id="${clientes[i].id}">
            <td>${clientes[i].id}</td>
            <td>${clientes[i].nombre}</td>
            <td id="${clientes[i].id}salary">clientes[i].saldo €</td>
        </tr>`;
    }
    refreshScreen();
}

function createClient(){
    clientes.push(new Cliente(clientes.length, document.getElementById("nombreNuevoCliente").value,document.getElementById("saldoInicial").value));
    document.getElementById("nombreNuevoCliente").value = "";
    document.getElementById("saldoInicial").value = "";
    generateTable();
}

function modifySueldo(accion){
    if(accion){
        clientes[document.getElementById("identificadoCuenta").value].depositar(parseInt(document.getElementById("cantidadAManejar").value));
        correcto(document.getElementById("cantidadAManejar").value+"€ added to the account "+clientes[document.getElementById("identificadoCuenta").value].id+ " correctly");
    }else{
        clientes[document.getElementById("identificadoCuenta").value].extraer(document.getElementById("cantidadAManejar").value);
        wrong(document.getElementById("cantidadAManejar").value+"€ extracted to the account "+clientes[document.getElementById("identificadoCuenta").value].id+ " correctly");
    }
    refreshScreen();
}

function correcto(mensaje){
    document.body.innerHTML += `
    <div style="position: absolute; top: 0; right: 0;" class="alert alert-success alert-dismissable fade in">
        <strong>${mensaje}
        </div>
    `;

    window.setTimeout(function () {
        $(".alert-success").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 5000);
}

function wrong(mensaje){
    document.body.innerHTML += `
    <div style="position: absolute; top: 0; right: 0;" class="alert alert-danger alert-dismissable fade in">
        <strong>${mensaje}
        </div>
    `;
    window.setTimeout(function () {
        $(".alert-danger").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 5000);
}

function refreshScreen(){
    for(var i=0; i<clientes.length; i++){
        document.getElementById(clientes[i].id+"salary").innerHTML = clientes[i].saldo+"€";
        if(clientes[i].saldo < 0){
            document.getElementById(clientes[i].id).setAttribute("class", "danger");
        }else{
            document.getElementById(clientes[i].id).setAttribute("class", "success");
        }
    }
}