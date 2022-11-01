
const nameAndLast = document.getElementById("nome-completo")
nameAndLast.innerHTML = prompt ("Inserisci Nome e Cognome")
const nameAndLastTicket = document.getElementById("passenger-name")
nameAndLastTicket.innerHTML = nameAndLast.innerHTML

const kmDaPercorrere = prompt ("Inserisci i chilometri da percorrere")
const kmRequest = document.getElementById("km-percorso")
console.log(parseInt(kmDaPercorrere))
kmRequest.innerHTML = kmDaPercorrere

const age = prompt("Inserisci la tua età")

if ( isNaN( kmDaPercorrere )) {
    alert( "Il numero inserito non è valido" );
}
if ( isNaN( age ))  {
    alert( "Il numero inserito non è valido" );
}
console.log(kmDaPercorrere, +age)

let prezzoDelBiglietto = kmDaPercorrere * 0.21
console.log(prezzoDelBiglietto)

const typeOfTicket = document.getElementById("tipo-ticket")
const prezzoMostrato = document.getElementById("prezzo-biglietto-def")

// Random number generators
const carrozza = document.getElementById("rndm-numb-car")
carrozza.innerHTML =  Math.floor(Math.random() * 10) + 1;
const codiceTicket = document.getElementById("rndm-numb-tick")
codiceTicket.innerHTML =  Math.floor(Math.random() * 100000) + 1;

if ( age < 18 ) {
    let scontoMinorenni = prezzoDelBiglietto * 0.80 ;
    const prezzoScontato = scontoMinorenni.toFixed(2)
    console.log(prezzoScontato)
    prezzoMostrato.innerHTML = "€" + prezzoScontato
    typeOfTicket.innerHTML = "Biglietto scontato per minori"

    // alert("Il tuo biglietto costa " + (prezzoScontato) + "€. "
    // + ("Ti è stato applicato il 20% di sconto"))
} else if ( age > 65 ) {
    let scontoOver = prezzoDelBiglietto * 0.60 ;
    const prezzoScontato = scontoOver.toFixed(2);
    console.log(prezzoScontato)
    prezzoMostrato.innerHTML = "€" + prezzoScontato
    typeOfTicket.innerHTML = "Biglietto scontato per over 65"
    // alert("Il tuo biglietto costa " + (prezzoScontato) + "€. "
    // + ("Ti è stato applicato il 40% di sconto"))
} else {
    prezzoMostrato.innerHTML = "€" + prezzoDelBiglietto
    typeOfTicket.innerHTML = "Biglietto Standard"
        // alert("Il tuo biglietto costa " + (prezzoDelBiglietto) + "€. " + "Non hai diritto ad alcuno sconto")
}

// const generaBiglietto = document.getElementById("generate");
// element.addEventListener("click", function() {
//   alert()
// });