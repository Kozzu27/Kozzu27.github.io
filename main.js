const display = document.getElementById("display");

let numer;

function wyswietl(input){
    display.value += input;
}

function wyczysc(){
    display.value = "";
}

function oblicz(){
    try{
        numer = eval(display.value);
        if (Number.isInteger(numer)) {
            display.value = numer;
        } else {
            display.value = numer.toFixed(7);
            console.log(numer);
        }
    }
    catch(error){
        display.value = "Error";
    }
}