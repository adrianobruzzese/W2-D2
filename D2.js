/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
 
let a = 1
let b = 2 

if (a > b) {
  console.log('a è più grande di b')
} else { 
  console.log('b è più grande di a')
}
console.log(a, b)

//oppure

console.log(Math.max(a, b))


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let c = 3

if ( c === 5){
  console.log('equal')
} else { 
  console.log('not equal')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let d = 125

if (d % 5 === 0){
  console.log('divisibile per 5')
} else { 
  console.log('non divisibile per 5')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/ 

let e = 12
let f = 8

if( e === 8 || f === 8 || e + f === 8) {
  console.log('uno dei due numeri è 8/la loro somma equivale ad 8')
}
// più precisamente

if (e === 8){
  console.log('la variabile `e` equivale ad 8')
}
if(f === 8){
  console.log('la variabile `f` equivale ad 8')
}
if(e + f === 8){
  console.log('la somma delle due variabili equivale ad 8')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let g = 1
let h = 10
let i = 100
const totalShoppingCart = [g+h+i];
console.log(totalShoppingCart)

if (totalShoppingCart > 50){
  console.log('le spese di spedizione sono gratuite, il suo totale è' + ' ' + totalShoppingCart)
} else{
  console.log('le spese di spedizione ammontano a 10, il suo totale è' + ' ' + [totalShoppingCart] + 10)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

if (totalShoppingCart - 20/100 * totalShoppingCart > 50){
  console.log('le spese di spedizione sono gratuite, il suo totale è' + ' ' + totalShoppingCart)
} else{
  console.log('le spese di spedizione ammontano a 10, il suo totale è' + ' ' + [totalShoppingCart] + 10)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let l = 2
let m = 4
let n = 6

if(l > m && l > n && m > n){
  console.log('la variabile con il valore più alto è `l`, seguita da `m`, ed infine `n`')
} else if (l > m && l > n && m < n){
  console.log('la variabile con il valore più alto è `l`, seguita da `n`, ed infine `m`')
} else if (l < m && l > n && m > n) {
  console.log('la variabile con il valore più alto è `m`, seguita da `l`, ed infine `n`')
} else if (l < m && l < n && m > n){
  console.log('la variabile con il valore più alto è `m`, seguita da `n`, ed infine `l`')
} else if (l < m && l < n && n > m){
  console.log('la variabile con il valore più alto è `n`, seguita da `m`, ed infine `l`')
} else if(l > m && l < n && n > m){
  console.log('la variabile con il valore più alto è `n`, seguita da `l`, ed infine `m`')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let o = 'paperino'
console.log(typeof o)

if (typeof o === 'number') {
    console.log("o is a number");
} else {
    console.log("o is not a number");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let p = 16

if (p % 2 === 0){
  console.log('la variabile contiene un numero pari')
} else { 
  console.log('la variabile contiene un numero dispari')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let val = 2

  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto'
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numList = []
const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numList.push(...oneToTen)
console.log(numList)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

numList[numList.length - 1] = 100
console.log(numList)
