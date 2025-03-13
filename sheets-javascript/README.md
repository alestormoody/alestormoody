
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
