//% Tipi di variabili

//$ Sintassi variabile
//let nomeVariabile = "Valore della variabile";


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
//Definizione o dichiarazione
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
console.log(anni); //20
 */

/*
let anni = 10;
let anni = 20; //! Errore
 */

/*
const name = "Matteo";
console.log(name);

 */

/*
name = "Piero";
console.log(name);
 */

//$ Identificatore

//*Proibiti
/*
let _nome = "Mario";
let _cognome = "Rossi";

let nomeECognomeCompleto = _nome + " " + _cognome;

console.log(nomeECognomeCompleto);

 */
//* Case sensitive
/*
let a = 10;
let A = "Ciao";
console.log(a + " " + A); //10 Ciao

 */
//$ Definire più variabili in un'unica istruzione

//let a, b = 10, c = "Ciao";
/*
var a;
var b = 10;
var c = "Ciao";
 */
//console.log(a);

//$ Variable Scope e hoisting

//* Global scope

//let b = 10;


/*
if (true) { //* Block scope
  var a = "var ok";
  let b = "let non ok";
  const costante = "const non ok";
}
 */
//console.log(a) // var ok
//console.log(b) // errore
//console.log(costante) // errore


//% Tipi di dati in JavaScript

//$ Dati primitivi

//let stringa2 = 'Annalisa'; // String
//let numero2 = 10.5; // Number
//let numero3 = 5*2; // Number
/*
let numero = 10; // number
let stringa = "Andrea"; // string
let booleano = true; // boolean
let indefinito; // undefined
let nullo = null; // null
let simbolo = Symbol() // Symbol()
let bigIntero = 10n // bigint

console.log(typeof null); //object
console.log(typeof(null)); //object
console.log(simbolo); //object
console.log(typeof bigIntero); //object
*/


//$ Dati Oggetti

// Array
/*
const nomi =['andrea', 'sandro', 'giovanni'];
console.log(nomi); //Array(3) [ "andrea", "sandro", "giovanni"]
console.log(nomi[1]); // sandro
console.log(nomi.length); // 3
*/

/*
// Oggetti
let person = {
    name: "Mario",
    age: 30,
    isStudent: false,
    saluta: function () {
      return console.log("Ciao!");
    }
};
console.log(person); // Object
console.log(person.name); // Mario
person.saluta(); // Ciao!

// new
let date = new Date();
console.log(date);
console.log(typeof date);
*/


//% Value type vs Reference type

//$ value type
/*
let a = 10;
let b = a;
console.log(a); // 10
console.log(b); // 10
a = 20;
console.log(a); // 20
console.log(b); // 10
 */

//$ reference type
/*
let obj1 = {
  p1:10
};
let obj2 = obj1;

console.log(obj1); // Object { p1: 10 }
console.log(obj2); // Object { p1: 10 }

obj1.p1 = 20;

console.log(obj1); // Object { p1: 20 }
console.log(obj2); // Object { p1: 20 }

 */
