
# Guida Workflow Git Base

Questa guida spiega i passaggi standard per lavorare in modo ordinato con Git su un branch, sincronizzarsi con il branch remoto e fare push senza errori.

---

## 1. Lavora sul tuo branch 

Passa al branch su cui devi lavorare:

```
git checkout <nome-branch>
```

Esempio:

```
git checkout feature/nuova-funzionalita
```

---

## 2. Aggiungi i file modificati

Aggiungi tutte le modifiche (o solo i file specifici):

```
git add .
```

Oppure:

```
git add <nome-file>
```

---

## 3. Crea un commit con messaggio chiaro

Salva le modifiche localmente con un messaggio descrittivo o meglio con il conventional commit:

```
git commit -m "messaggio del commit"
```

Esempio:

```
git commit -m "fix(login): corretta validazione form login"
```

---

## 4. Sincronizza con il branch remoto prima del push

Integra le ultime modifiche dal branch di base (es. develop):

```
git pull origin develop
```

---

## 5. Risolvi eventuali conflitti

Se Git segnala conflitti:

1. Apri i file in conflitto, risolvi manualmente.
2. Aggiungi i file risolti:

    ```
    git add <file-risolto>
    ```

3. Completa il commit di merge, se necessario:

    ```
    git commit
    ```

---

## 6. Esegui il push delle modifiche

Invia le modifiche al repository remoto:

```
git push origin <nome-branch>
```

Esempio:

```
git push origin feature/nuova-funzionalita
```

---

## Regola d'oro

- Non fare mai PUSH su master o in produzione
- Testa sempre il tuo codice
- Testa sempre le funzionalità del sito 
- Fai fare sempre un double check da un collega
- Mostra la feature al Manager e al Cliente
- Richiedi approval
- Se approvato, vai in produzione