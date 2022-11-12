var salub = 200;
var temp = 18;
var peso = 50;
var illum = 7;


function init() {
    console.log("a");
    document.getElementById("temp").innerText = temp;
    document.getElementById("salub").innerHTML = salub;
    document.getElementById("peso").innerHTML = peso;
    document.getElementById("illum").innerHTML = illum;
    controllo();
}

function controllo() {
    if (salub < 30 || salub > 180) {
        fish.src = "fish-end.png";
    } else if (salub > 150) {
        fish.src = "fish-shock.png";
    } else if (salub < 50) {
        fish.src = "fish-poison.png";
    } else if (temp < 20 || temp > 30) {
        fish.src = "fish-end.png";
    } else if (temp > 27) {
        fish.src = "fish-boil.png";
    } else if (temp < 23) {
        fish.src = "fish-freeze.png";
    } else if (illum < 10) {
        fish.src = "fish-flipped.png";
    }
}
