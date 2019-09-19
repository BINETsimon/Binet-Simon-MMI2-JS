function exoA () {
    var nombreA = 2;
    var nombreB = 4;
    var resultat = nombreA + nombreB;
    document.getElementById('resultatA').innerHTML = resultat;
}

function exoB () {
    var nombreA = 2;
    var nombreB = 4;
    var resultat = nombreA * nombreB;
    document.getElementById('resultatB').innerHTML = resultat;
}

function exoC () {
    var nombreA = 12;
    var nombreB = 5;
    var resultat = nombreA % nombreB;
    document.getElementById('resultatC').innerHTML = resultat;
}

function exoD () {
    var nombreC = document.getElementById('ex1_input1').value;
    var nombreD = document.getElementById('ex1_input2').value;
    var resultat = nombreC - nombreD;
    document.getElementById('ex1_result').innerHTML = resultat;
}

function exoE () {
    var nombreC = document.getElementById('ex1_input1E').value;
    var nombreD = document.getElementById('ex1_input2E').value;
    var resultat = nombreC * nombreD;
    document.getElementById('ex1_resultE').innerHTML = resultat;
}

function exoF () {
    var nombreC = document.getElementById('ex2_input1').value;
    var nombreD = document.getElementById('ex2_input2').value;
    var resultat = nombreC / nombreD;
    document.getElementById('ex2_result').innerHTML = resultat;
}

function exoG () {
    var nombreC = document.getElementById('ex2_input1G').value;
    var nombreD = document.getElementById('ex2_input2G').value;
    var resultat = nombreC*1 + nombreD;
    document.getElementById('ex2_resultG').innerHTML = resultat;
}

window.onload = exoH;
function exoH () {
    var nombreA = 82;
    var nombreB = 8;
    var resultat = nombreA % nombreB;
    document.getElementById('ex3_result').innerHTML = resultat;
}

//EXERCICE 4
window.onload = resetExo4;
var resultat4 = 0;
function resetExo4(){
    resultat4 = 0;
    document.getElementById('ex4_result').innerHTML = resultat4;
}
function plusTen() {
    resultat4 += 10;
    document.getElementById('ex4_result').innerHTML = resultat4;
}
function diviseFive(){
    resultat4 /= 5;
    document.getElementById('ex4_result').innerHTML = resultat4;
}
function multiplyHeight(){
    resultat4 *= 8;
    document.getElementById('ex4_result').innerHTML = resultat4;
}
function minusTwo(){
    resultat4 -= 2;
    document.getElementById('ex4_result').innerHTML = resultat4;
}
function combinePlusTenMinusTwo(){
    plusTen();
    minusTwo();
}

//EXERCICE 5
window.onload = exo5;
function exo5 (){
    var resultat = Math.floor(Math.random() * (1000-50) + 50);
    document.getElementById('ex5_result').innerHTML = resultat;
}

//EXERCICE 6 
function exo66(test){
    var resultat = test/2;
    return resultat;
}
function exo6 (){
    document.getElementById('ex6_result').innerHTML = exo66(6);
}
exo6();

//EXERCICE 7
window.onload = exo7;
function exo77(test, ohoh){
    var resultat = test - ohoh;
    return resultat;
}
function exo7 (){
    document.getElementById('ex7_result').innerHTML = exo77(10,3);
}

//EXERCICE 8
window.onload = exo8;
function exo88(test, ohoh, yolo){
    var resultat = test / ohoh % yolo;
    return resultat;
}
function exo8 (){
    document.getElementById('ex8_result').innerHTML = exo88(12, 2, 6);
}

//EXERCICE 9
function convertToPound(){
    var KG = document.getElementById('ex9_input1').value;
    var resultat = KG / 0.45359 ;
    document.getElementById('ex9_1_result').innerHTML = resultat;
}
function convertToKg(){
    var pound = document.getElementById('ex9_input2').value;
    var resultat = pound * 0.45359 ;
    document.getElementById('ex9_2_result').innerHTML = resultat;
}

//EXERCICE 10
var phrase ="";
function iterateWords(){
    phrase += " " + document.getElementById('ex10_input').value;
    document.getElementById('ex10_result').innerHTML = phrase;
}
function resetWords(){
    phrase = "";
    document.getElementById('ex10_result').innerHTML = phrase;
}

//EXERCICE 11
var cote;
function cotes(){
    cote = Math.random() * (3-0.8) + 0.8;
    cote = cote.toFixed(2);
    document.getElementById('cotes').innerHTML = cote;
}
function gains(){
    var argent = document.getElementById('argent').value;
    var gains = argent * cote;
    gains = gains.toFixed(2);
    document.getElementById('gains').innerHTML = gains;
}

//EXERCICE 12
function avion1() {
    var KM = document.getElementById('KM').value;
    var KH = KM / 1000;
    var heures = KH.toFixed(0);
    var minutes = KH * 60 - heures * 60 + 60;
    if (minutes == 60){
        minutes = "00";
        heures++;
    }
    document.getElementById('heures').innerHTML = heures-1;
    document.getElementById('minutes').innerHTML = minutes; 
}
function avion2() {
    var M = document.getElementById('M').value;
    var KM = M / 60 * 1000;
    document.getElementById('kilometre').innerHTML = KM;
}

//EXERCICE 13
function getWindowWidth() {
    var ny = 0;
    var windowWidth = window.innerWidth;
    ny = windowWidth;
    document.getElementById('screenSize').innerHTML = ny;
}

getWindowWidth();

//EXERCICE 1
function SelectionPrix() {
    var prix = document.getElementById('prix').value;
    document.getElementById('Euros').innerHTML = prix;
    var Gratuit = document.getElementById('0E');
    var quinze = document.getElementById('15E');
    var vingtneuf = document.getElementById('29E');
    Gratuit.style.opacity = 0.3;
    quinze.style.opacity = 0.3;
    vingtneuf.style.opacity = 0.3;
    if (prix < 15){
        Gratuit.style.opacity = 1;
    } else if((prix >= 15) && (prix < 29)){
        quinze.style.opacity = 1;
    } else if (prix >= 29){
        vingtneuf.style.opacity = 1;
    }
}

SelectionPrix();

//EXERCICE 15
function Verif(){
    var nombre = document.getElementById('exo15_input').value;
    var texte = "";

    if ((nombre % 3) == 0) {
        texte = nombre + " est bien un multiple de 3. ";
    } else {
        texte = nombre + " n'est pas un multiple de 3. ";
    }
    if ((nombre % 7) == 0) {
        texte += nombre + " est bien un multiple de 7.";
    } else {
        texte += nombre + " n'est pas un multiple de 7.";
    }
    document.getElementById('exo15_result').innerHTML = texte;
}

//EXERCICE 16
var nombreMystere;
function nombreMyst(){
    var UserAsw = document.getElementById('exo16_input').value;

    if (UserAsw == nombreMystere){
        document.getElementById('exo16_result').innerHTML = nombreMystere + " est bien la bonne réponse";
    } else if (UserAsw < nombreMystere){
        document.getElementById('exo16_result').innerHTML = "Nombre trop petit";
    } else {
        document.getElementById('exo16_result').innerHTML = "Nombre trop grand";
    }
}

function Generate(){
    nombreMystere = Math.floor(Math.random() * (100-1) + 1);
    console.log(nombreMystere);
}

//EXERCICE 17
function Degre(){
    var convertdegre = document.getElementById('exo171_input').value;
    convertdegre = convertdegre * 1.8 + 32;
    convertdegre = convertdegre.toFixed(2);
    document.getElementById('exo171_result').innerHTML = convertdegre;
}

function Dolar(){
    var convertDolar = document.getElementById('exo172_input').value;
    convertDolar *= 1.1059;
    convertDolar = convertDolar.toFixed(4);
    document.getElementById('exo172_result').innerHTML = convertDolar;
}

function Pounds(){
    var convertPounds = document.getElementById('exo173_input').value;
    convertPounds /= 0.8864;
    convertPounds = convertPounds.toFixed(4);
    document.getElementById('exo173_result').innerHTML = convertPounds;
}

//EXERCICE 18
var prenom = ['Simon', 'Romane', 'Sanjay', 'Emilie'];
function PrenomUn(){
    document.getElementById('Prenoms').innerHTML = prenom[0];
}
function PrenomLast(){
    document.getElementById('Prenoms').innerHTML = prenom[3];
}
function PrenomAll(){
    document.getElementById('Prenoms').innerHTML = prenom[0] + " " + prenom[1] + " " + prenom[2] + " " + prenom[3];
}
function PrenomUlt(){
    prenom[0] =" ";
    prenom[1] =" ";
    prenom[4] = "Celine";
    document.getElementById('Prenoms').innerHTML = prenom[0] + " " + prenom[1] + " " + prenom[2] + " " + prenom[3] + " " + prenom[4];

}