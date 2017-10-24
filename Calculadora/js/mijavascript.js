var botonesCalculadora, visor, botonBorrar, botonIgual, borrar = false;

window.addEventListener("load", function () {
	visor = document.getElementById("display");
    //Código de iterar sobre elementos de la calse numero
    botonesCalculadora = document.getElementsByClassName("numero");
    for (var i = 0; i < botonesCalculadora.length; i++) {
        botonesCalculadora[i].setAttribute("onclick", "añadirNumero('" + botonesCalculadora[i].getAttribute("value") + "')");
    }
	//Fin de código de iterar sobre elementos de la calse numero
	botonBorrar = document.getElementById("numC");
	botonBorrar.onclick = limpiar;
	botonIgual = document.getElementById("button12");
	botonIgual.onclick = calcular;
}, false);

function añadirNumero(valor) {
	if (borrar && (parseInt(valor) >= 0 && parseInt(valor) <= 9)) {
        limpiar();
	}

	if(valor === "sqrt"){
        visor.value = visor.value + valor + "(";
	}else{
		visor.value = visor.value + valor;
	}
	borrar = false;
}

function limpiar() {
	visor.value = "";
}

function calcular() {
	try {
		visor.value = math.eval(visor.value);
	} catch (e) {
		visor.value = "Error";
	}
	borrar = true;
}

var modificador = false;

//Inputs desde teclado con el shift pulsado
window.onkeydown = function(e){
    var key = e.keyCode ? e.keyCode : e.which;
    var numero, add = true;
    switch (key) {
        case 16: modificador = true; add = false; break; //Shifts
        case 49: numero = '!'; break;
        //case 50: numero = '2'; break;
        //case 51: numero = '3'; break;
        //case 52: numero = '4'; break;
        case 53: numero = '%'; break;
        //case 54: numero = '6'; break;
        case 55: numero = '/'; break;
        case 56: numero = '('; break;
        case 57: numero = ')'; break;
        case 187: numero = '*'; break;
        //case 190: numero = '.'; break;
        default:
            add = false;
            console.log(key);
            break;
    }

    if (add && modificador) {
        añadirNumero(numero);
    }

}

//Inputs desde teclado sin el shift pulsado
window.onkeyup = function (e) {
	var key = e.keyCode ? e.keyCode : e.which;
	var numero, add = true;
	switch (key) {
        case 8: add = false; limpiar(); break; //Retorno (borrar)
        case 13: add = false; calcular(); break; //Enter
		case 16: modificador = false; add = false; break; //Shifts
		case 48: numero = '0'; break;
		case 49: numero = '1'; break;
		case 50: numero = '2'; break;
		case 51: numero = '3'; break;
		case 52: numero = '4'; break;
		case 53: numero = '5'; break;
		case 54: numero = '6'; break;
		case 55: numero = '7'; break;
		case 56: numero = '8'; break;
		case 57: numero = '9'; break;
		case 190: numero = '.'; break;
		default:
			add = false;
			console.log(key);
			break;
	}

	if (add && !modificador) {
		añadirNumero(numero);
	}

}