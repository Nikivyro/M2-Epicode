/*
In Javascript ci sono due tipi di DataType, quelli primitivi e quelli strutturali. 

I tipi primitivi sono: numeri, stringhe, booleani, undefined e null, symobol e biglnt.
- I numeri possono essere interni, o con virgola mobile. Esistiono dei valori speciali come +Infity o -Inifinity che vengono usati in casi in cui operazioni non danno un valore preciso.
Inoltre esiste come valore il NaN, acronimo di Not a Number che è il risultato dell'operazione tra un numero e ad esempio una stringa ( 10 / 'ciao')
- Le stringhe sono una sequenza di caratteri che si dichiarano delimitandoli in queste tre modalità "" '' ``
- I booleani vegono utilizzati per far restituire un valore di true o false, in base ad una condizione tra due variabili
- Undefined è una variabile dichiata a cui però non è stato assegnato un valore
- Null è una variabile vuota a cui è stato dato il valore null

I tipi strutturali possono essere: oggetti, funzioni o array.
- Gli oggetti sono una raccolta di dati che ad ogni valore corrisponde una chiave
- Le funzioni al suo interno hanno del codice che puo essere eseguito nel momento in cui la funzione viene richiamata all'interno del tuo alogoritmo
- Gli array sono strutture di dati più complesse che possono avere più tipologie di dati al loro interno, con la comodità di poter essere richiamati o gestiti tramite una sola variabile.

*/

/* Somma */
let a = 12;
let b = 20;

const somma = a + b;
console.log('Somma dei valori a e b: ' + somma);

/* Dichiarazione variabili */
let x = 12;
let MyName = 'Nikolaas';

/* Sottrazione */
const sottrazione = x - 4;
console.log('Sottrazione tra x e 4: ' + sottrazione);

/* Dichiarazione oggetto */
let Persona ={
    nome : 'Nikolaas',
    cognome : 'van Asselt',
    hobby : 'Calcio'
}

/* Controllo tra stringhe*/

let name1 = 'john';
let name2 = 'John';

const equality = name1 !== name2;
console.log('I due nomi ' + name1 + ',' + name2  + ' sono scritti diversamente: ' + equality);

const equality2 = name1.toLowerCase() === name2.toLowerCase();
console.log('I due nomi ' + name1 + ',' + name2  + ' se scritti minuscoli sono uguali: ' + equality);