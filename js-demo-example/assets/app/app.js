
let foto_num = 0;

function next(){
    foto_num = foto_num + 1;
    photo.src = `./assets/images/photo-${foto_num}.jpg`;
    caption.innerHTML = `Photo #${foto_num}`;
    if(foto_num >= 8) {
        foto_num = 0;
    }
}

let kwota = +prompt("Podaj liczbę");

dochod = kwota*(4.5 / 100);
Dochod_dzien = dochod / 365;
Kwota_podatku = Dochod_dzien*((19 + 1,5)/100);
po_podatku = Dochod_dzien - Kwota_podatku;


alert(po_podatku);