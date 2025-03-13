
# Vanilla JS

## 1. Cos'è JavaScript?

JavaScript è un linguaggio di programmazione per aggiungere interattività ai siti web. Può essere eseguito sia lato client (browser) che lato server (Node.js).

## 2. Struttura di un Programma JavaScript

Esempio base:

```javascript
console.log("Ciao, mondo!");
```

## 3. Sintassi di Base

### Variabili e Tipi di Dati

- `let`: variabili modificabili
- `const`: variabili non modificabili
- `var`: deprecato, ma utile per retrocompatibilità

```javascript
let nome = "Giovanni";
const eta = 25;
```

### Tipi di dati principali:

- String: `"Ciao"`
- Number: `10`, `3.14`
- Boolean: `true`, `false`
- Object: `{ nome: "Giovanni", eta: 25 }`
- Array: ``
- Null: `null`
- Undefined: variabile non definita

## 4. Funzioni

```javascript
function saluta(nome) {
  console.log("Ciao, " + nome);
}

// Arrow function
const saluta = (nome) => {
  console.log("Ciao, " + nome);
};
```

## 5. Condizioni e Cicli

### Condizioni

```javascript
if (numero > 5) {
  console.log("Il numero è maggiore di 5");
} else {
  console.log("Il numero è minore o uguale a 5");
}
```

### Cicli

```javascript
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// forEach
let numeri = [1, 2, 3, 4];
numeri.forEach(numero => {
  console.log(numero);
});
```

## 6. Oggetti e Array

### Oggetti

```javascript
let persona = {
  nome: "Giovanni",
  eta: 25,
  saluta() {
    console.log("Ciao, sono " + this.nome);
  }
};
```

### Array

```javascript
let numeri = [1, 2, 3, 4];
console.log(numeri[0]); // 1
```

Metodi utili: `.map()`, `.filter()`, `.reduce()`

## 7. Callback e Promesse (Async JS)

### Callback

```javascript
function saluta(callback) {
  console.log("Ciao!");
  callback();
}
```

### Promesse

```javascript
let promessa = new Promise((resolve, reject) => {
  let successo = true;
  if (successo) {
    resolve("Operazione riuscita");
  } else {
    reject("Operazione fallita");
  }
});
```

## 8. ES6 e Caratteristiche Avanzate

### Template Literals

```javascript
let nome = "Giovanni";
let messaggio = `Ciao, ${nome}!`;
```

### Destructuring

```javascript
let [a, b] = [1, 2];
let { nome, eta } = { nome: "Giovanni", eta: 25 };
```

### Rest & Spread Operator

```javascript
// Rest
function somma(...numeri) {
  return numeri.reduce((acc, num) => acc + num, 0);
}

// Spread
let array2 = [...array1, 3, 4];
```

## 9. Moduli (Import/Export)

```javascript
// moduli.js
export const saluta = () => {
  console.log("Ciao!");
};

// app.js
import { saluta } from './moduli.js';
```

## 10. Errori e Debugging

```javascript
try {
  // codice
} catch (error) {
  console.error(error.message);
}
```

### Fonti per Approfondire:
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)


# Metodi Fondamentali di JavaScript

## Manipolazione Stringhe

| Metodo | Descrizione |
|--------|-------------|
| `str.length` | Restituisce la lunghezza di una stringa |
| `str.toUpperCase()` | Converti in maiuscolo |
| `str.toLowerCase()` | Converti in minuscolo |
| `str.substring(start, end)` | Estrae una sottostringa |
| `str.slice(start, end)` | Estrae una sottostringa |
| `str.indexOf(search)` | Trova la posizione di una sottostringa |
| `str.lastIndexOf(search)` | Trova l'ultima posizione di una sottostringa |
| `str.replace(search, replace)` | Sostituisce testo |
| `str.trim()` | Rimuove spazi bianchi all'inizio e alla fine |
| `str.split(separator)` | Converte una stringa in un array |
| `str.includes(substring)` | Controlla se una sottostringa esiste |
| `str.repeat(times)` | Ripete una stringa |

## Manipolazione Numeri

| Metodo | Descrizione |
|--------|-------------|
| `Math.abs(num)` | Valore assoluto |
| `Math.ceil(num)` | Arrotondamento per eccesso |
| `Math.floor(num)` | Arrotondamento per difetto |
| `Math.round(num)` | Arrotonda un numero |
| `Math.random()` | Genera un numero casuale tra 0 e 1 |
| `Math.max(a, b, c)` | Massimo |
| `Math.min(a, b, c)` | Minimo |
| `Number.parseInt(str, 10)` | Converte stringhe in numeri interi |
| `Number.parseFloat(str)` | Converte stringhe in numeri decimali |
| `num.toFixed(decimals)` | Formatta un numero con decimali |

## Manipolazione Array

| Metodo | Descrizione |
|--------|-------------|
| `arr.length` | Lunghezza dell'array |
| `arr.push(value)` | Aggiunge elementi alla fine |
| `arr.pop()` | Rimuove l'ultimo elemento |
| `arr.shift()` | Rimuove il primo elemento |
| `arr.unshift(value)` | Aggiunge elementi all'inizio |
| `arr.includes(value)` | Controlla se un valore è presente |
| `arr.indexOf(value)` | Trova l'indice di un elemento |
| `arr.concat(arr2)` | Unisce due array |
| `arr.join(separator)` | Converte un array in una stringa |
| `arr.reverse()` | Inverte l'ordine degli elementi |
| `arr.sort()` | Ordina gli elementi (alfabeticamente) |
| `arr.filter(fn)` | Filtra gli elementi in base a una condizione |
| `arr.map(fn)` | Applica una funzione a tutti gli elementi |
| `arr.reduce(fn, initialValue)` | Riduce un array a un singolo valore |
| `arr.find(fn)` | Restituisce il primo elemento che soddisfa la condizione |
| `arr.every(fn)` | Verifica se tutti gli elementi soddisfano una condizione |
| `arr.some(fn)` | Verifica se almeno un elemento soddisfa una condizione |

## Manipolazione Oggetti

| Metodo | Descrizione |
|--------|-------------|
| `Object.keys(obj)` | Restituisce le chiavi di un oggetto |
| `Object.values(obj)` | Restituisce i valori di un oggetto |
| `Object.entries(obj)` | Restituisce coppie chiave-valore |
| `Object.assign(target, source)` | Unisce oggetti |
| `delete obj.key` | Elimina una proprietà |
| `obj.hasOwnProperty(prop)` | Controlla se l'oggetto ha una proprietà |

## Gestione Date e Tempo

| Metodo | Descrizione |
|--------|-------------|
| `new Date()` | Data e ora corrente |
| `Date.now()` | Timestamp corrente |
| `date.getFullYear()` | Estrae l'anno dalla data |
| `date.getMonth()` | Estrae il mese dalla data |
| `date.getDate()` | Estrae il giorno dalla data |
| `date.setFullYear(year)` | Modifica l'anno della data |
| `date.setMonth(month)` | Modifica il mese della data |
| `date.setDate(day)` | Modifica il giorno della data |
| `date.toISOString()` | Converte una data in formato ISO |
| `date.toLocaleString()` | Converte una data in formato leggibile |

## Controllo Tipi e Variabili

| Metodo | Descrizione |
|--------|-------------|
| `typeof value` | Restituisce il tipo di una variabile |
| `Array.isArray(value)` | Controlla se è un array |
| `isNaN(value)` | Controlla se non è un numero |
| `value === undefined` | Controlla se è undefined |
| `null == undefined` | Confronto tra null e undefined |


## Eventi e Timeout

| Metodo | Descrizione |
|--------|-------------|
| `setTimeout(fn, delay)` | Esegue una funzione dopo un ritardo |
| `setInterval(fn, interval)` | Esegue una funzione a intervalli |
| `clearTimeout(id)` | Cancella timeout |
| `clearInterval(id)` | Cancella intervallo |

## Manipolazione DOM

| Metodo | Descrizione |
|--------|-------------|
| `document.getElementById(id)` | Seleziona un elemento per ID |
| `document.querySelector(selector)` | Seleziona il primo elemento con un selettore CSS |
| `document.querySelectorAll(selector)` | Seleziona tutti gli elementi con un selettore CSS |
| `element.innerHTML` | Modifica il contenuto HTML di un elemento |
| `element.textContent` | Modifica il contenuto testuale di un elemento |
| `element.classList.add(className)` | Aggiunge una classe CSS |
| `element.classList.remove(className)` | Rimuove una classe CSS |
| `element.classList.toggle(className)` | Attiva/disattiva una classe CSS |
| `element.setAttribute(attr, value)` | Imposta un attributo |
| `element.getAttribute(attr)` | Ottiene il valore di un attributo |
| `element.removeAttribute(attr)` | Rimuove un attributo |
| `element.addEventListener(event, fn)` | Aggiunge un event listener |

## HTTP e Fetch API

```javascript
fetch(url).then(res => res.json()).then(data => console.log(data))
fetch(url, { 
  method: 'POST', 
  body: JSON.stringify(data), 
  headers: { 'Content-Type': 'application/json' } 
})
```

## Metodi JSON

| Metodo | Descrizione |
|--------|-------------|
| `JSON.stringify(obj)` | Converte un oggetto in JSON |
| `JSON.parse(jsonStr)` | Converte JSON in oggetto |

## Gestione LocalStorage e SessionStorage

| Metodo | Descrizione |
|--------|-------------|
| `localStorage.setItem('key', 'value')` | Salva dati localmente |
| `localStorage.getItem('key')` | Recupera dati |
| `localStorage.removeItem('key')` | Rimuove un elemento |
| `sessionStorage.setItem('key', 'value')` | Salva dati per la sessione |

## Sicurezza e Hashing

| Metodo | Descrizione |
|--------|-------------|
| `btoa(string)` | Codifica in Base64 |
| `atob(string)` | Decodifica Base64 |
| `crypto.getRandomValues(new Uint8Array(size))` | Genera numeri casuali crittografici |
