var wf; //worker de las fotos

window.addEventListener("load", function() {
    var paisajes = document.getElementById("paisajes");
    try {
        wf.terminate();
        wf = undefined;
    } catch (err) {
        //console.error(err);
    }
    try {
        if (typeof(wf) === "undefined") {
            wf = new Worker("fotoTimer.js");
        }
    } catch (err) {
        //console.log(err);
    }
    //Código que se ejecutará cada vez que el worker retorne mensaje

    wf.onmessage = function(event) {
        paisajes.src = "./images/l" + event.data + ".jpg";
        //console.log(event.data);
    };
    
}, false);