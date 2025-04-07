# SLA e Responsabilità – `<Nome Progetto>`

## Obiettivo

Definire gli impegni minimi in termini di tempi di risposta, responsabilità e processi per garantire un livello di servizio coerente con le aspettative.

---

## SLA (Service Level Agreement)

| Tipo Intervento         | Priorità | Tempo di risposta | Tempo di risoluzione atteso |
|--------------------------|----------|--------------------|-----------------------------|
| Incidente Bloccante      | P1       | 30 minuti          | 4 ore                       |
| Bug Critico              | P2       | 2 ore              | 8 ore                       |
| Anomalia minore          | P3       | 8 ore              | 3 giorni                    |
| Richiesta funzionale     | P4       | 24 ore             | 5 giorni                    |

---

## Ruoli e Responsabilità

| Ruolo             | Responsabilità                                         |
|------------------|--------------------------------------------------------|
| Project Manager   | Coordinamento, stakeholder mgmt, controllo avanzamento |
| Service Manager   | SLA, incident mgmt, change mgmt                        |
| Dev Team          | Sviluppo, bugfix, deploy                              |
| QA / Tester       | Verifica qualità e segnalazione difetti               |
| Sponsor / Cliente | Approvazione milestone e gestione delle priorità       |

---

## Modalità di Escalation

1. P1 non risolto in 1h → escalation al Service Manager
2. Task bloccato > 2 giorni → escalation al PM
3. Disallineamenti gravi → coinvolgimento sponsor

---

**Approvazione:** `<Sponsor>`  
**Data:** `<dd/mm/yyyy>`