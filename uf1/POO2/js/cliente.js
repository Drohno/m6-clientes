"use strict";

function Cliente(id, nombre, saldo){
    this.id = id;
    this.nombre = nombre;
    this.saldo = saldo;
    this.depositar = (cantidad) =>{
        this.saldo += cantidad;
    }
    this.extraer = (cantidad) => {
        this.saldo -= cantidad;
    }
}
