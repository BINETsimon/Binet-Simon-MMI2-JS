var Validation = false;

function ChampT(){
    var longueurT = document.getElementById('texte_recup').value;
    var CSSText = document.getElementById('charactere');
    var nombre = longueurT.length;
    if (nombre <= 10){
        CSSText.style.color = "red";
        Validation = false;
    }else{
        CSSText.style.color = "white";
        Validation = true;
        Alert.style.display = "none";
    }   
    document.getElementById('charactere').innerHTML = nombre + " / 49"
}

ChampT();

function Suite(){
    if (Validation == true){
        var 
    }else{
        var Alert = document.getElementById('Alert');
        Alert.style.display = "block";
    }   
}