
# Lista Completa dei Tipi di Conventional Commit con Esempi

Ecco una panoramica dei principali tipi di conventional commit, con una breve descrizione ed esempi pratici per ciascuno. Puoi usare uno *scope* opzionale tra parentesi tonde per indicare la parte del progetto interessata (es: `feat(auth): ...`).

---

| Tipo       | Descrizione                                                     | Esempio di Commit                                      |
|------------|-----------------------------------------------------------------|--------------------------------------------------------|
| **feat**   | Aggiunta di una nuova funzionalità                              | `feat(auth): aggiungi login con Google`                |
| **fix**    | Correzione di un bug                                            | `fix(api): risolto errore 500 su login`                |
| **docs**   | Modifiche alla documentazione                                   | `docs(readme): aggiorna sezione installazione`         |
| **style**  | Cambiamenti di stile (formattazione, spazi, ecc.)               | `style(ui): rimuovi spazi inutili nel CSS`             |
| **refactor**| Ristrutturazione del codice senza aggiungere feature o fix      | `refactor(utils): semplifica funzione di parsing`      |
| **perf**   | Miglioramenti delle prestazioni                                 | `perf(db): ottimizza query per caricamento rapido`     |
| **test**   | Aggiunta o modifica di test                                     | `test(auth): aggiungi test unitari per login`          |
| **build**  | Modifiche al sistema di build o dipendenze                      | `build(deps): aggiorna dipendenza lodash`              |
| **ci**     | Cambiamenti a configurazione e script di CI/CD                  | `ci: aggiungi step di code coverage`                   |
| **chore**  | Attività di manutenzione che non toccano src o test             | `chore: aggiorna README del progetto`                  |
| **revert** | Annullamento di un commit precedente                            | `revert: "feat(auth): aggiungi autenticazione 2FA"`    |

---

## Altri Dettagli Utili

- **Scope** (opzionale): indica la parte del codice interessata.  
  Esempio: `fix(parser): gestisci errori di parsing`
- **BREAKING CHANGE**: per modifiche che rompono la compatibilità, aggiungi `!` dopo il tipo o un footer.
  - Esempio header: `feat!: rimuovi endpoint legacy`
  - Esempio footer:
    ```
    feat(user): rimuovi endpoint legacy

    BREAKING CHANGE: endpoint /v1/users non più supportato
    ```