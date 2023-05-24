//% Tipi di variabili

//$ Sintassi variabile
// let nomeVariabile = "Valore della variabile";


//$ Tipi variabile
/*
var anni;
let name = "Giorgio";
const job = "Web Developer";
*/
/*
var anni; //*OK
let name; //*OK
const job;//!NO
*/

//* Definizione vs Inizializzazione
/*
//Definizione
let anni;

// Inizializzazione
const nome = "Piero";

console.log(anni); // undefined
console.log(nome); // Piero
*/

//* Riassegnazione
/*
let anni = 10;
console.log(anni); //10
anni = 20;
console.log(anni); //20 */

/*
let anni = 10;
let anni = 20; //! Errore
*/
/*
const name = "Matteo";
name = "Piero";
*/

//$ Identificatore

//Proibiti
//let let = 0;

//* Case sensitive
/*
let a = 10;
let A = "Ciao";
console.log(a + " " + A);
//10 Ciao
 */

//$ Definire più variabili in un'unica istruzione

//var a, b = 10, c = "Ciao";
/*
var a;
var b = 10;
var c = "Ciao";
 */

//$ Variable Scope e hoisting
/*
if (true) {
    var a = "var ok";
    let b = "let non ok";
    const c = "const non ok";
}
console.log(a) // var ok
console.log(b) // errore
console.log(c) // errore
 */

//% Tipi di dati in JavaScript

//$ Dati primitivi

//let stringa2 = 'Annalisa'; // String
//let numero2 = 10.5; // Number
//let numero3 = 5*2; // Number

let numero = 10; // number
let stringa = "Andrea"; // string
let booleano = true; // boolean
let indefinito; // undefined
let nullo = null; // null
let simbolo = Symbol() // Symbol()
let bigIntero = 10n // bigint



console.log(typeof null); //objectZ
console.log(simbolo); //objectZ
console.log(typeof bigIntero); //objectZ



//$ Dati Oggetti

// creazione di un oggetto utilizzando la sintassi letterale
let person = {
    name: "Mario",
    age: 30,
    isStudent: false,
    sayHello: function() {
      console.log("Hello!");
    }
  };

// creazione di un oggetto utilizzando la parola chiave "new"
let date = new Date();