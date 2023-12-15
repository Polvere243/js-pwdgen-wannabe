// punto 1: recupero dell'elemento

const paragraph = document.getElementById("password");
console.log(paragraph);

// punto 2: chiedere il nome all'utente

prompt("Come ti chiami?", "Daniele");



// punto 3: dichiarare una constante coll'informazione

const firstName = "Daniele";

console.log(firstName);

// punto 4: chiedere il cognome all'utente

prompt("Qual è il tuo cognome?", "Ercoli");

// punto 5: ripetere il punto 3

const lastName = "Ercoli";

console.log(lastName);

// punto 6: chiedere il colore preferito all'utente

prompt("Qual è il tuo colore preferito?", "rosso");

// punto 7: ripeti il punto 3

const favouriteColour = "Rosso";

console.log(favouriteColour);

// punto 8: creare una costante col numero dato in traccia

const givenNumber = 23;

console.log(givenNumber);



/*punto 9: scelgo un modo per sommare le informazioni date dall'utente 

punto 11: stampare la password in console*/

const generatedPassword = firstName + lastName + favouriteColour + givenNumber;

console.log(generatedPassword);

// punto 10: creare un messaggio per introdurre la password

let passwordMessage = "Ecco la tua nuova password:";

console.log(passwordMessage);

const outcome = `${passwordMessage} ${generatedPassword}`;

console.log(outcome);

// punto 12: cercare di stamparlo in pagina

paragraph.innerText= outcome;

