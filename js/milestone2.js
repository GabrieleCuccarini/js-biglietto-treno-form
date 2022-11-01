const typeOfTicket = document.getElementById("tipo-ticket")
const prezzoMostrato = document.getElementById("prezzo-biglietto-def")

const nameAndLast = document.getElementById("nome-completo")
nameAndLast.innerHTML = prompt ("Inserisci Nome e Cognome")
const nameAndLastTicket = document.getElementById("passenger-name")
nameAndLastTicket.innerHTML = nameAndLast.innerHTML

const kmDaPercorrere = prompt ("Inserisci i chilometri da percorrere")
let kmRequest = document.getElementById("km-percorso")
console.log(parseInt(kmDaPercorrere))
kmRequest.innerHTML = kmDaPercorrere

const userAge0 = document.getElementById("fasciaetà")
let userAge

if ( isNaN( kmDaPercorrere )) {
    alert( "Il numero inserito non è valido" );
}

console.log(kmDaPercorrere)

cancelButton = document.getElementById("cancel")
cancelButton.addEventListener("click", function() {
    nameAndLast.value = "";
    kmRequest.value = "";
    userAge0.value = 0;
});

let prezzoDelBiglietto = kmDaPercorrere * 0.21
console.log(prezzoDelBiglietto)

// Random number generators
const carrozza = document.getElementById("rndm-numb-car")
carrozza.innerHTML =  Math.floor(Math.random() * 10) + 1;
const codiceTicket = document.getElementById("rndm-numb-tick")
codiceTicket.innerHTML =  Math.floor(Math.random() * 100000) + 1;

const Genera = document.getElementById("generate");
Genera.addEventListener("click", function () {

    if ( (userAge === 1) ) {
        let scontoMinorenni = prezzoDelBiglietto * 0.80 ;
        const prezzoScontato = scontoMinorenni.toFixed(2)
        console.log(prezzoScontato)
        prezzoMostrato.innerHTML = "€" + prezzoScontato
        typeOfTicket.innerHTML = "Biglietto scontato per minori"
    } else if ( (userAge === 3) ) {
        let scontoOver = prezzoDelBiglietto * 0.60 ;
        const prezzoScontato = scontoOver.toFixed(2);
        console.log(prezzoScontato)
        prezzoMostrato.innerHTML = "€" + prezzoScontato
        typeOfTicket.innerHTML = "Biglietto scontato per over 65"
    } else {
        prezzoMostrato.innerHTML = "€" + prezzoDelBiglietto
        typeOfTicket.innerHTML = "Biglietto Standard"
    }
})

