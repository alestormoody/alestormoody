# Kanban Template – BAU (Business As Usual)

Struttura base per organizzare ticket BAU (incidenti, bug, richieste minori) con gestione a flusso continuo.

---

## Colonne Kanban consigliate

- **To Do**  
  Attività assegnate ma non ancora iniziate.

- **In Progress**  
  Task attivamente in lavorazione.

- **Waiting / Blocked**  
  Task in attesa (feedback, revisione, dipendenze).

- **In Review / Testing**  
  Task completati dal dev, in validazione QA.

- **Done**  
  Task completati e deployati.

---

## Esempio backlog BAU

| ID   | Tipo      | Descrizione                         | Priorità | Stato       | Assegnato a   | Note                       |
|------|-----------|-------------------------------------|----------|-------------|----------------|----------------------------|
| BAU01| Bug       | Errore login con Safari             | Alta     | In Progress | Dev Backend    | Rilevato da QA             |
| BAU02| Incident  | Form contatto non invia email       | Alta     | Waiting     | Dev Frontend   | Bloccato su config SMTP    |
| BAU03| Request   | Aggiunta link privacy in footer     | Bassa    | To Do       | Dev Frontend   | Ticket creato da marketing |