const typeOfTicket = document.getElementById("tipo-ticket")
const prezzoMostrato = document.getElementById("prezzo-biglietto-def")
const nameAndLast = document.getElementById("nome-completo")
const passengerTicket = document.getElementById("passenger-name")
const userAge0 = document.getElementById("fasciaetà")
const kmDaPercorrere0 = document.getElementById("km-percorso")
const cancelButton = document.getElementById("cancel")
const genera = document.getElementById("generate")
const carrozza = document.getElementById("rndm-numb-car")
const codiceTicket = document.getElementById("rndm-numb-tick")

// CANCEL FUNCTION
cancelButton.addEventListener("click", function() {
    nameAndLast.value = "";
    kmDaPercorrere0.value = "";
    userAge0.value = 0;
});

// GENERATE FUNCTION
genera.addEventListener("click", function () {
    // Random number generators
    carrozza.innerHTML =  Math.floor(Math.random() * 10) + 1;
    codiceTicket.innerHTML =  Math.floor(Math.random() * 100000) + 1;
    let userAge = parseInt(userAge0.value)
    let kmRequest = parseInt(kmDaPercorrere0.value)
    let prezzoDelBiglietto = kmRequest * 0.21

    if ( userAge === 1 ) {
        let scontoMinorenni = prezzoDelBiglietto * 0.80 ;
        const prezzoScontato = scontoMinorenni.toFixed(2)
        console.log(prezzoScontato)
        prezzoMostrato.innerHTML = "€" + prezzoScontato
        typeOfTicket.innerHTML = "Biglietto scontato per minori"
    } else if ( userAge === 3) {
        let scontoOver = prezzoDelBiglietto * 0.60 ;
        const prezzoScontato = scontoOver.toFixed(2);
        console.log(prezzoScontato)
        prezzoMostrato.innerHTML = "€" + prezzoScontato
        typeOfTicket.innerHTML = "Biglietto scontato per over 65"
    } else {
        prezzoMostrato.innerHTML = "€" + prezzoDelBiglietto
        typeOfTicket.innerHTML = "Biglietto Standard"
    }

    passengerTicket.innerHTML = nameAndLast.value
    console.log(userAge, userAge0, kmDaPercorrere0.value, kmRequest,prezzoDelBiglietto)
})

// if ( isNaN( kmDaPercorrere )) {
//     alert( "Il numero inserito non è valido" );
// }
