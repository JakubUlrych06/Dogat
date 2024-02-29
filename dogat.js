const obojky = document.getElementById("obojky");
const voditka = document.getElementById("voditka");
const krmivo = document.getElementById("krmivo");

obojky.style.display = "flex";

voditka.style.display = "none";
krmivo.style.display = "none";

function obojkyy(){
    obojky.style.display = "flex";
    voditka.style.display = "none";
    krmivo.style.display = "none";
}
function voditkaa(){
    voditka.style.display = "flex";
    krmivo.style.display = "none";
    obojky.style.display = "none";

}
function krmivoo(){
    krmivo.style.display = "flex";
    obojky.style.display = "none";
    voditka.style.display = "none";
   
}