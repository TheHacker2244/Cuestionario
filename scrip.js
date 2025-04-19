let correctas = [1, 1, 2, 3, 2, 1, 3, 2, 1, 3];

let opcion_elegida=[]

let cantidad_correctas = 0;

function respuesta(numero_pregunta, seleccionada){
    opcion_elegida[numero_pregunta] = seleccionada. value;

    id="p" + numero_pregunta;
    lebels = document.getElementById(id).cloneNode;
    lebels[3].style.backgroundColor = "white";
    lebels[1].style.backgroundColor = "white";  
    lebels[2].style.backgroundColor = "white";

    seleccionada.style.backgroundColor = "yellow";
} 
function corregir(){
    cantidad_correctas = 0;
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }

    }
    document.getElementById("resultado").innerHTML = cantidad_correctas
}

const BotonCorregir = document.getElementById('BotonCorregir');

if (BotonCorregir) {
    BotonCorregir.addEventListener('click', corregir);
} else {
    console.error('El botón con ID "BotonCorregir" no existe.');
}