
// Matematica = Lunes:3hs, Miercoles:2hs.



function matematica() {
    
document.getElementById("demo").innerHTML =  "MATEMATICA" + "<br>" +  "<br>";

var lunesPrimera = new Date("Jun 06, 2022");
var lunesSegunda = new Date("Jun 06, 2022");
var lunesTercera = new Date("Jun 06, 2022");


var mierPrimera = new Date("Jun 01, 2022");
var mierSegunda = new Date("Jun 01, 2022");


document.getElementById("demo").innerHTML += lunesPrimera + "<br>";
document.getElementById("demo").innerHTML += lunesSegunda + "<br>";
document.getElementById("demo").innerHTML += lunesTercera + "<br>" + "<br>";


document.getElementById("demo").innerHTML += mierPrimera +  "<br>";
document.getElementById("demo").innerHTML += mierSegunda +  "<br>" +  "<br>";


for (let i = 0; i < 30; i++) {
    lunesPrimera.setDate(lunesPrimera.getDate()+7);
    document.getElementById("demo").innerHTML += lunesPrimera + "<br>";
    lunesSegunda.setDate(lunesSegunda.getDate()+7);
    document.getElementById("demo").innerHTML += lunesSegunda + "<br>";
    lunesTercera.setDate(lunesTercera.getDate()+7);
    document.getElementById("demo").innerHTML += lunesTercera + "<br>" + "<br>";


    mierPrimera.setDate(mierPrimera.getDate()+7);
    document.getElementById("demo").innerHTML += mierPrimera + "<br>";
    mierSegunda.setDate(mierSegunda.getDate()+7);
    document.getElementById("demo").innerHTML += mierSegunda + "<br>" + "<br>";
    
}

}


// Geografia = Lunes:1h, Martes:2hs.


function geografia() {
    
document.getElementById("demo").innerHTML =  "GEOGRAFIA" + "<br>" +  "<br>";

var lunesPrimera = new Date("Jun 06, 2022");


var marPrimera = new Date("Jun 07, 2022");
var marSegunda = new Date("Jun 07, 2022");


document.getElementById("demo").innerHTML += lunesPrimera + "<br>" + "<br>";


document.getElementById("demo").innerHTML +=  marPrimera + "<br>";
document.getElementById("demo").innerHTML += marSegunda + "<br>" +  "<br>";


for (let i = 0; i < 30; i++) {
    lunesPrimera.setDate(lunesPrimera.getDate()+7);
    document.getElementById("demo").innerHTML += lunesPrimera + "<br>" + "<br>";


    marPrimera.setDate(marPrimera.getDate()+7);
    document.getElementById("demo").innerHTML += marPrimera + "<br>";
    marSegunda.setDate(marSegunda.getDate()+7);
    document.getElementById("demo").innerHTML += marSegunda + "<br>" + "<br>";
    
}

}

// tutoria = Lunes:1hs.


function tutoria() {
    
document.getElementById("demo").innerHTML =  "TUTORIA" + "<br>" +  "<br>";


var lunesPrimera = new Date("Jun 06, 2022");

document.getElementById("demo").innerHTML += lunesPrimera + "<br>" + "<br>";


for (let i = 0; i < 30; i++) {
    lunesPrimera.setDate(lunesPrimera.getDate()+7);
    document.getElementById("demo").innerHTML += lunesPrimera + "<br>" + "<br>";
}

}



// Lengua = Lunes:1hs, Martes:2hs, Viernes:2hs.


function lengua() {
    
document.getElementById("demo").innerHTML =  "LENGUA" + "<br>" +  "<br>";

var lunesPrimera = new Date("Jun 06, 2022");


var marPrimera = new Date("Jun 07, 2022");
var marSegunda = new Date("Jun 07, 2022");


var vierPrimera = new Date("Jun 03, 2022");
var vierSegunda = new Date("Jun 03, 2022");


document.getElementById("demo").innerHTML += lunesPrimera + "<br>" + "<br>";


document.getElementById("demo").innerHTML +=  marPrimera + "<br>";
document.getElementById("demo").innerHTML +=  marSegunda + "<br>" +  "<br>";

document.getElementById("demo").innerHTML +=  vierPrimera + "<br>";
document.getElementById("demo").innerHTML +=  vierSegunda + "<br>" +  "<br>";


for (let i = 0; i < 30; i++) {
    lunesPrimera.setDate(lunesPrimera.getDate()+7);
    document.getElementById("demo").innerHTML += lunesPrimera + "<br>" + "<br>";


    marPrimera.setDate(marPrimera.getDate()+7);
    document.getElementById("demo").innerHTML +=  marPrimera + "<br>";
    marSegunda.setDate(marSegunda.getDate()+7);
    document.getElementById("demo").innerHTML +=  marSegunda + "<br>" + "<br>";
    

    vierPrimera.setDate(vierPrimera.getDate()+7);
    document.getElementById("demo").innerHTML +=  vierPrimera + "<br>";
    vierSegunda.setDate(vierSegunda.getDate()+7);
    document.getElementById("demo").innerHTML +=  vierSegunda + "<br>" + "<br>";
    
}

}

// Biologia = Lunes:1hs, Martes:1hs, Jueves:2hs.


function biologia() {

document.getElementById("demo").innerHTML =  "BIOLOGIA" + "<br>" +  "<br>";
    


var lunesPrimera = new Date("Jun 06, 2022");


var marPrimera = new Date("Jun 07, 2022");


var juePrimera = new Date("Jun 02, 2022");
var jueSegunda = new Date("Jun 02, 2022");


document.getElementById("demo").innerHTML += lunesPrimera + "<br>" + "<br>";


document.getElementById("demo").innerHTML +=  marPrimera + "<br>";


document.getElementById("demo").innerHTML +=  juePrimera + "<br>";
document.getElementById("demo").innerHTML +=  jueSegunda + "<br>" +  "<br>";


for (let i = 0; i < 30; i++) {
    lunesPrimera.setDate(lunesPrimera.getDate()+7);
    document.getElementById("demo").innerHTML += lunesPrimera + "<br>" + "<br>";


    marPrimera.setDate(marPrimera.getDate()+7);
    document.getElementById("demo").innerHTML +=  marPrimera + "<br>" + "<br>";
    

    juePrimera.setDate(juePrimera.getDate()+7);
    document.getElementById("demo").innerHTML +=  juePrimera + "<br>";
    jueSegunda.setDate(jueSegunda.getDate()+7);
    document.getElementById("demo").innerHTML +=  jueSegunda + "<br>" + "<br>";
    
}

}

// Historia = Martes:2hs, viernes:2hs.


function historia() {

document.getElementById("demo").innerHTML =  "HISTORIA" + "<br>" +  "<br>";


var marPrimera = new Date("Jun 07, 2022");
var marSegunda = new Date("Jun 07, 2022");


var vierPrimera = new Date("Jun 03, 2022");
var vierSegunda = new Date("Jun 03, 2022");


document.getElementById("demo").innerHTML +=  marPrimera + "<br>";
document.getElementById("demo").innerHTML +=  marSegunda + "<br>" +  "<br>";



document.getElementById("demo").innerHTML +=  vierPrimera + "<br>";
document.getElementById("demo").innerHTML +=  vierSegunda + "<br>" +  "<br>";


for (let i = 0; i < 30; i++) {


    marPrimera.setDate(marPrimera.getDate()+7);
    document.getElementById("demo").innerHTML +=  marPrimera + "<br>";
    marSegunda.setDate(marSegunda.getDate()+7);
    document.getElementById("demo").innerHTML +=  marSegunda + "<br>" + "<br>";
    

    vierPrimera.setDate(vierPrimera.getDate()+7);
    document.getElementById("demo").innerHTML +=  vierPrimera + "<br>";
    vierSegunda.setDate(vierSegunda.getDate()+7);
    document.getElementById("demo").innerHTML +=  vierSegunda + "<br>" + "<br>";
    
}

}


// Form. E y Ciud = Miercoles:2hs.


function formacion() {

document.getElementById("demo").innerHTML =  "FORMACION E Y CIUD" + "<br>" +  "<br>";


var mierPrimera = new Date("Jun 01, 2022");
var mierSegunda = new Date("Jun 01, 2022");

document.getElementById("demo").innerHTML +=  mierPrimera + "<br>";
document.getElementById("demo").innerHTML +=  mierSegunda + "<br>" +  "<br>";


    


for (let i = 0; i < 30; i++) {

    mierPrimera.setDate(mierPrimera.getDate()+7);
    document.getElementById("demo").innerHTML += mierPrimera + "<br>";
    mierSegunda.setDate(mierSegunda.getDate()+7);
    document.getElementById("demo").innerHTML += mierSegunda + "<br>" + "<br>";
}

}


// Ingles = Miercoles:2hs, Jueves:2hs.


function ingles() {

document.getElementById("demo").innerHTML =  "INGLES" + "<br>" +  "<br>";



var mierPrimera = new Date("Jun 01, 2022");
var mierSegunda = new Date("Jun 01, 2022");


var juePrimera = new Date("Jun 02, 2022");
var jueSegunda = new Date("Jun 02, 2022");

document.getElementById("demo").innerHTML +=  mierPrimera + "<br>";
document.getElementById("demo").innerHTML +=  mierSegunda + "<br>" +  "<br>";


document.getElementById("demo").innerHTML +=  juePrimera + "<br>";
document.getElementById("demo").innerHTML +=  jueSegunda + "<br>" +  "<br>";





    


for (let i = 0; i < 30; i++) {

    mierPrimera.setDate(mierPrimera.getDate()+7);
    document.getElementById("demo").innerHTML += mierPrimera + "<br>";
    mierSegunda.setDate(mierSegunda.getDate()+7);
    document.getElementById("demo").innerHTML += mierSegunda + "<br>" + "<br>";

    juePrimera.setDate(juePrimera.getDate()+7);
    document.getElementById("demo").innerHTML +=  juePrimera + "<br>";
    jueSegunda.setDate(jueSegunda.getDate()+7);
    document.getElementById("demo").innerHTML +=  jueSegunda + "<br>" + "<br>";
    

}

}


// Edi = Miercoles:1hs, Viernes:1hs.


function edi() {

document.getElementById("demo").innerHTML =  "EDI" + "<br>" +  "<br>";

var mierPrimera = new Date("Jun 01, 2022");


var vierPrimera = new Date("Jun 03, 2022");


document.getElementById("demo").innerHTML +=  mierPrimera + "<br>" + "<br>";


document.getElementById("demo").innerHTML +=  vierPrimera + "<br>" + "<br>";



    


for (let i = 0; i < 30; i++) {

    mierPrimera.setDate(mierPrimera.getDate()+7);
    document.getElementById("demo").innerHTML += mierPrimera + "<br>" + "<br>";

    vierPrimera.setDate(vierPrimera.getDate()+7);
    document.getElementById("demo").innerHTML +=  vierPrimera + "<br>" + "<br>";

}

}




// Artes = Jueves:3hs.


function artes() {

document.getElementById("demo").innerHTML =  "ARTES" + "<br>" +  "<br>";


var juePrimera = new Date("Jun 02, 2022");
var jueSegunda = new Date("Jun 02, 2022");
var jueTercera = new Date("Jun 02, 2022");



document.getElementById("demo").innerHTML +=  juePrimera + "<br>";
document.getElementById("demo").innerHTML +=  jueSegunda + "<br>";
document.getElementById("demo").innerHTML +=  jueTercera + "<br>" +  "<br>";


 


    


for (let i = 0; i < 30; i++) {

    juePrimera.setDate(juePrimera.getDate()+7);
    document.getElementById("demo").innerHTML +=  juePrimera + "<br>";
    jueSegunda.setDate(jueSegunda.getDate()+7);
    document.getElementById("demo").innerHTML +=  jueSegunda + "<br>";
    jueTercera.setDate(jueTercera.getDate()+7);
    document.getElementById("demo").innerHTML +=  jueTercera + "<br>" + "<br>";
    
}

}


// Ed. Tecnologia = Viernes:2hs.


function tecnologia() {

document.getElementById("demo").innerHTML =  "TECNOLOGIA" + "<br>" +  "<br>";


var vierPrimera = new Date("Jun 03, 2022");
var vierSegunda = new Date("Jun 03, 2022");



document.getElementById("demo").innerHTML +=  vierPrimera + "<br>";
document.getElementById("demo").innerHTML +=  vierSegunda + "<br>" +  "<br>";



    


for (let i = 0; i < 30; i++) {

    vierPrimera.setDate(vierPrimera.getDate()+7);
    document.getElementById("demo").innerHTML +=  vierPrimera + "<br>";
    vierSegunda.setDate(vierSegunda.getDate()+7);
    document.getElementById("demo").innerHTML +=  vierSegunda + "<br>" + "<br>";

}

}




