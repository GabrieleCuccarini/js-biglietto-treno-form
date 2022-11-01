const nomeCognome = prompt("Inserisci Nome e Cognome")
const kmDaPercorrere = prompt("Inserisci i chilometri da percorrere")
const age = prompt("Inserisci la tua età")

if ( isNaN( kmDaPercorrere )) {
    alert( "Il numero inserito non è valido" );
}
if ( isNaN( age ))  {
    alert( "Il numero inserito non è valido" );
}

let nomeCognomeInput = document.getElementById("nomeCompleto")
nomeCognomeInput.inntertext += "nomeCognome"

console.log(kmDaPercorrere, age)

let prezzoDelBiglietto = kmDaPercorrere * 0.21

console.log(prezzoDelBiglietto)

if ( age < 18 ) {
    let scontoMinorenni = prezzoDelBiglietto * 0.80 ;
    const prezzoScontato = scontoMinorenni.toFixed(2)
    console.log(prezzoScontato)
    // alert("Il tuo biglietto costa " + (prezzoScontato) + "€. "
    // + ("Ti è stato applicato il 20% di sconto"))
} else if ( age > 65 ) {
    let scontoOver = prezzoDelBiglietto * 0.60 ;
    const prezzoScontato = scontoOver.toFixed(2);
    console.log(prezzoScontato)
    // alert("Il tuo biglietto costa " + (prezzoScontato) + "€. "
    // + ("Ti è stato applicato il 40% di sconto"))
} else {
    // alert("Il tuo biglietto costa " + (prezzoDelBiglietto) + "€. " + "Non hai diritto ad alcuno sconto")
}

const nameAndLast = document.getElementById("nomeCompleto")
console.log = nameAndLast

// const generaBiglietto = document.getElementById("generate");
// element.addEventListener("click", function() {
//   alert()
// });