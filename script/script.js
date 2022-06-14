// Ciao ragazze e ciao ragazzi!,
// esercizio di oggi: :treno2:  Calcolo del prezzo del biglietto del treno  :treno2:
// cartella/repo js-biglietto-treno 
// Realizziamo un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale andrà mostrato in forma umana in console (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// :catrainbowyes: Buon lavoro a tutte e a tutti! :catrainbowyes:

const userKm = parseInt( prompt('Inserisci quanti km vuoi percorrere'));
const userAge = parseInt ( prompt('Inserisci la tua età'));
if((isNaN(userKm) == true ) || (isNaN(userAge) == true) || (userAge <= 0) || (userKm <=0)){
    document.getElementById('wrong').innerHTML='Devi inserire solo dei numeri maggiori di zero';
}
else{
    const userPrice = userKm * 0.21;
    console.log(userPrice + ' Non guardare non c\'è niente da vedere qui');
    if(userAge <= 18){
        let priceDiscounted = (userPrice - ((userPrice * 20) / 100)).toFixed(2);
        document.getElementById('price').innerHTML='il prezzo per te che sei minorenne è ' + priceDiscounted;
    }
    else if(userAge >= 65)
    {
        let priceDiscounted = (userPrice - ((userPrice * 40) / 100)).toFixed(2);
        document.getElementById('price').innerHTML='il prezzo per te che sei over 65 è ' + priceDiscounted;
    }
    else{
        document.getElementById('price').innerHTML='il prezzo per te è ' + userPrice;
    }
}
