const display = document.getElementById("display");

let numer;
let historia;

function wyswietl(input){
    display.value += input;
}

function wyczysc(){
    display.value = "";
}

function usun() {
    numer = display.value;
    numer = numer.substring(0, numer.length - 1);
    display.value = numer;
}

function kopiuj(){
    var kopiuj = document.getElementById("historia").innerHTML;
    navigator.clipboard.writeText(kopiuj);
    document.getElementById('historia').innerHTML = 'Skopiowano';
    setTimeout(() => {
        document.getElementById('historia').innerHTML = historia;
    }, 2000);
}

function oblicz(){
    try{
        historia = display.value;
        numer = eval(display.value);
        historia += " = " + numer;
        console.log(historia);
        if (Number.isInteger(numer)) {
            display.value = numer;
        } else {
            display.value = numer.toFixed(6);
            console.log(numer);
        }
        document.getElementById('historia').innerHTML = historia;
    }
    catch(error){
        display.value = "Error";
    }
}