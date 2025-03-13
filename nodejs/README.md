# Node.js Web Server

Questo progetto è un semplice server web creato con Node.js. Il server gestisce diverse rotte e restituisce contenuti appropriati per ciascuna di esse. Inoltre, gestisce gli errori e li registra in un file di log.

## Struttura del Progetto

La struttura del progetto è la seguente:

```
nodejs/
├── modules/
│   ├── errors.js
│   ├── head.js
│   └── router.js
├── serve.js
└── storage/
    └── logs/
        └── error.log
```

### Descrizione dei File

- **serve.js**: Il file principale del server. Crea il server HTTP e gestisce le richieste utilizzando il modulo `router`.

- **modules/errors.js**: Modulo per la gestione degli errori. Registra gli errori in un file di log e invia una risposta al client.

- **modules/head.js**: Modulo per impostare le intestazioni delle risposte HTTP.

- **modules/router.js**: Modulo per gestire le rotte del server. Restituisce contenuti appropriati in base all'URL della richiesta.

## Installazione

1. Clona il repository:
    ```bash
    git clone https://github.com/tuo-username/tuo-repository.git
    cd tuo-repository/nodejs
    ```

2. Installa le dipendenze (se presenti):
    ```bash
    npm install
    ```

## Utilizzo

Per avviare il server, esegui il seguente comando:
```bash
node serve.js
```

Il server sarà in esecuzione sulla porta `3000` per impostazione predefinita. Puoi specificare una porta diversa utilizzando la variabile d'ambiente `PORT`:
```bash
PORT=4000 node serve.js
```

## Rotte Disponibili

- `GET /`: Restituisce la pagina home.
- `GET /about`: Restituisce la pagina about.
- `GET /404`: Restituisce una risposta 404 in formato JSON.

## Gestione degli Errori

Gli errori vengono gestiti e registrati nel file `storage/logs/error.log`. Il modulo `errors.js` si occupa di questa funzionalità.

## Contribuire

Se desideri contribuire a questo progetto, sentiti libero di aprire una pull request o segnalare un problema.

## Licenza

Questo progetto è distribuito sotto la licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.
