let respuesta = prompt("¿Te gustan las ranas? 🐸🫵");

switch (respuesta) {

    case "si":
        alert("Este juego podría interesarte🐸 💖");
        break;

    case "no":
        alert("Fingiremos que sí te gustan, así que ahora mira mi página 🐸");
        break;

    default:
        alert("No te entendí ni v****, pero fingiremos que pusiste que sí, ahora mira mi página 🐸");
        break;
}


let galeriaConcept = document.getElementById("imagenConcept");
let anteriorConceptBTN = document.getElementById("anteriorConceptBTN");
let siguienteConceptBTN = document.getElementById("siguienteConceptBTN");

let concepts = [
    "imagenes/sheet.png",
    "imagenes/info.jpg",
    "imagenes/cop.jpg"
    
];

let iConcept = 0;

function siguienteConcept() {
    anteriorConceptBTN.disabled = false;

    iConcept++;
    galeriaConcept.src = concepts[iConcept];

    if (iConcept == concepts.length - 1) {
        siguienteConceptBTN.disabled = true;
    }
}

function anteriorConcept() {
    siguienteConceptBTN.disabled = false;

    iConcept--;
    galeriaConcept.src = concepts[iConcept];

    if (iConcept == 0) {
        anteriorConceptBTN.disabled = true;
    }
}



let imagenEnemigo = document.getElementById("imagenEnemigo");
let anteriorEnemigoBTN = document.getElementById("anteriorEnemigoBTN");
let siguienteEnemigoBTN = document.getElementById("siguienteEnemigoBTN");

let enemigos = [
    "mosquito",
    "slasher",
    "murcielago"
];

let enemigoActual = 0;

function mostrarEnemigo() {

    imagenEnemigo.className = enemigos[enemigoActual];

    if (enemigoActual == 0) {
        anteriorEnemigoBTN.disabled = true;
    } else {
        anteriorEnemigoBTN.disabled = false;
    }

    if (enemigoActual == enemigos.length - 1) {
        siguienteEnemigoBTN.disabled = true;
    } else {
        siguienteEnemigoBTN.disabled = false;
    }
}

function siguienteEnemigo() {

    enemigoActual++;
    mostrarEnemigo();

}

function anteriorEnemigo() {

    enemigoActual--;
    mostrarEnemigo();

}

mostrarEnemigo();



let galeriaMapas = document.getElementById("imagenMapa");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let mapas = [
    "imagenes/1.png",
    "imagenes/2.png",
    "imagenes/3.jpg",
    "imagenes/4.jpg"
];

let i = 0;

function siguienteMapa() {
    anteriorBTN.disabled = false;

    i++;
    galeriaMapas.src = mapas[i];

    if (i == mapas.length - 1) {
        siguienteBTN.disabled = true;
    }
}


function anteriorMapa() {
    siguienteBTN.disabled = false;

    i--;
    galeriaMapas.src = mapas[i];

    if (i == 0) {
        anteriorBTN.disabled = true;
    }
}









