'use strict';

var l1 = prompt('Introduce first list of three numbers');
l1 = filtro(l1);

while (l1.length < 3 || l1.length > 3 || isNaN(l1)) {
    l1 = prompt('Introduce first list of three numbers');
    l1 = filtro(l1);
}

var l2 = prompt('Introduce second list of three numbers');
l2 = filtro(l2);

while (l2.length < 3 || l2.length > 3 || isNaN(l2)) {
    l2 = prompt('Introduce second list of three numbers');
    l2 = filtro(l2);
}

if (l1 > l2) {
    alert(l1 + ' is larger than ' + l2);
}
else if (l1 === l2) {
    alert(l1 + ' is equal to ' + l2);
}
else {
    alert(l2 + ' is larger than ' + l1);
}


function filtro(lista){
    lista = lista.replace(/\s/g,'');
    lista = parseInt(lista);
    return lista;
}