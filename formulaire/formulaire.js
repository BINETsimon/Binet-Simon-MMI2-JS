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
        restorePopup();
    }   
    document.getElementById('charactere').innerHTML = nombre + " / 49"
}

ChampT();

function Suite(){
    if (Validation == true){
        var change = document.getElementById('ensemble');
        change.style.transition = "0.8s ease";
        change.style.marginLeft ="-100%";
    }else{
        var Alert = document.getElementById('Alert');
        Alert.style.transition = "0.8s ease";
        Alert.style.opacity = "1";
    }   
}

function restorePopup(){
    var popup = document.getElementById('Alert');
    popup.style.opacity = "0";
}
restorePopup();