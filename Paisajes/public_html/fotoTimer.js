var i = 0; 
var timeout = 2*1000; //Cambiamos imagen cada 20 segundos
var numFotos = 5; //Número de imagenes que tendremos

function timedCount() {
    if(i<=numFotos){
        postMessage(i);
        i++;
    }else{
        i=0;
        postMessage(i);
    }
    
    setTimeout("timedCount()",timeout); 
}

timedCount();