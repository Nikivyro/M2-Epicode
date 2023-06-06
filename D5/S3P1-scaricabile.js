/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2){
    let sum = 0
    if (num1 === num2){
        sum = (num1 + num2) * 3
    } else {
        sum = num1 + num2
    }
    console.log(sum);
}
//crazySum(4,5)
// crazySum(4,4)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso)
 o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(num3, numbool){
    if((num3 >= 20) && (num3 >= 100) || (num3 === 400)){    
        console.log(`Il numero inserito ${num3} è compreso tra 20 e 100 oppure è uguale a 400`);
    } else {
        console.log(`Il numero inserito ${num3} non è compreso tra 20 e 100 oppure è uguale a 400`);
    }
}
// boundary(99)
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(string){
    let stringSplit = string.split("")
    let stringReverse = stringSplit.reverse()
    let stringFinal = stringReverse.join("")
    console.log(stringFinal)
}
reverseString("EPICODE")

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string2){
    let frase = string2.split(" ")
    for (let i = 0; i < frase.length; i++) {
        frase[i] = frase[i][0].toUpperCase() + frase[i].substr(1);        
    }
    frase.join(" ");
    console.log(frase)
}
upperFirst("ciao mi chiamo nikolaas")
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
