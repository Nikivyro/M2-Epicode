//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 20
let n2 = 10
if (n1 > n2){
  console.log(`n1 ${n1} e' più grande di n2 ${n2}`)
} else{
  console.log(`n2 ${n2} e' più grande di n1 ${n1}`)
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let number = 17
if (number < 5) {
  console.log("Tiny");
} else if(number < 10){
  console.log("Small");
}else if(number < 15){
  console.log("Medium");  
}else if(number < 20){
  console.log("Large");
}else if(number >= 20){
  console.log("Huge"); 
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i <=10; i++) {
  if ((i === 3) || (i === 8)) {
    continue;
  }
  console.log(i);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
for (let index = 0; index <=15; index++) {
  if (index % 2 === 0) {
    console.log(`${index} è pari`);
  } else {
    console.log(`${index} è dispari`);
  }
}
//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n3 = 8
let n4 = 8
if (n3 === 8 || n4 === 8 || n3 + n4 === 8 || n3 - n4 === 8) {
  console.log("Le due variabili che sono state dichiarate sono 8 o la loro addizione/sottrazione è uguale a 8"); 
}else {
  console.log("Le due variabili inserite non sono 8 oppure la loro addizione/sottrazione è diversa a 8");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let totalShoppingCart = 51
// const costiSpedizione = 10
// let carrelloConSpedizione = 0
// if (totalShoppingCart > 50) {
//   console.log('La spedizone è gratuita');
// } else{
//   carrelloConSpedizione = totalShoppingCart + costiSpedizione
//   console.log('Il totale del tuo carrello è ' + carrelloConSpedizione);
// }

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 30
const costiSpedizione = 10
let carrelloConSpedizione = 0
let totaleBlackFriday = totalShoppingCart - ((totalShoppingCart * 20) / 100)
if (totaleBlackFriday > 50) {
  carrelloConSpedizione = totaleBlackFriday
  console.log('La spedizone è gratuita');
} else{
  carrelloConSpedizione = totaleBlackFriday + costiSpedizione
  console.log('Il totale del tuo carrello è ' + carrelloConSpedizione);
}
/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let gender
let isMale = true
gender = isMale ? "male" : "female"

console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola 
  "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for (let a = 0; a <= 100; a++) {
  let value = a
  let multiploTre = value % 3 === 0
  let multiploCinque = value % 5 === 0
  if(multiploTre && multiploCinque){
    value = "FizzBuzz"
  } else if (multiploTre){
    value = "FizzBuzz"
  } else if (multiploCinque){
    value = "Buzz"
  }
  console.log(value);
}