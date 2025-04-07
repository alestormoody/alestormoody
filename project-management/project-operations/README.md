# Modello Operativo Ibrido – Team Progetti & BAU

Questa guida definisce il framework operativo per un team IT responsabile sia di progetti evolutivi (change) sia di attività continuative e manutentive (BAU – Business As Usual).

---

## Obiettivo

Gestire in modo coordinato:
- Progetti di sviluppo software e nuove funzionalità
- Supporto tecnico, bugfix, richieste utenti, attività ripetitive
- Governance del cambiamento e miglioramento continuo

---

## Struttura del Lavoro

### 1. Progetti (Change)
- **Gestione con approccio Agile**: sprint, backlog, retro
- **Documentazione**: Project Charter, OKRs, Roadmap, WBS
- **Deliverable**: nuovi moduli, refactor, nuove release
- **Strumenti**: Jira / GitHub Projects / Notion

### 2. BAU (Run)
- **Gestione con approccio Kanban**
- **Ticket divisi per tipo**:
  - Incident (bloccante / urgente)
  - Request (feature minori, supporto)
  - Bug
- **Priorità assegnata tramite triage settimanale**
- **Strumenti**: Jira Service Desk / Trello / Zendesk

---

## Approcci e Metodologie

| Area             | Metodo                     | Applicazione                        |
|------------------|----------------------------|-------------------------------------|
| Progetti         | Agile (Scrum / Kanban)     | Backlog, sprint, retro, review      |
| BAU              | ITIL / Kanban              | SLA, flusso continuo, incident mgmt |
| Documentazione   | Waterfall / classico       | SOW, piani, WBS, milestone          |
| Coordinamento    | Modello ibrido             | Prioritizzazione, report duale      |

---

## Ruoli Chiave

| Ruolo             | Responsabilità                                      |
|-------------------|-----------------------------------------------------|
| Project Manager   | Guida e documenta i progetti                        |
| Tech Lead         | Supporta decisioni tecniche e mentoring             |
| Service Owner     | Garantisce il funzionamento e la priorità dei ticket|
| Dev Team          | Contribuisce sia a progetti che a task BAU         |
| QA / Tester       | Verifica qualità in ogni rilascio                  |

---

## Rituali Operativi

| Frequenza   | Attività                        | Obiettivo                           |
|-------------|----------------------------------|--------------------------------------|
| Giornaliera | Stand-up team misto              | Allineamento rapido su stato        |
| Settimanale | Triage BAU                       | Prioritizzazione ticket e bug       |
| Settimanale | Sprint Review (progetti)         | Demo avanzamenti e raccolta feedback|
| Quindicinale| Retrospettiva condivisa          | Miglioramento continuo              |
| Mensile     | Report KPI + SLA                 | Monitoraggio prestazioni            |

---

## Processo di Prioritizzazione Unificata

1. Tutte le richieste (progetti, BAU, urgenze) entrano in un **backlog unico strategico**
2. Il PM/PO valuta insieme a sponsor e team:
   - Urgenza / impatto
   - Tipo di richiesta (Run/Change)
   - Disponibilità di risorse
3. Si assegnano i task a:
   - **Sprint corrente** (se progettuale)
   - **Flusso Kanban BAU** (se manutentiva)

---

## Reportistica e Metriche

### Progetti
- Avanzamento sprint (% completamento)
- Burndown chart
- Rischi e blocchi
- Roadmap aggiornata

### BAU
- Ticket chiusi / aperti
- Tempo medio di risposta / risoluzione
- SLA rispettati
- Bug critici

---

## Esempi di Documentazione (Moduli)

- `project-charter.md`
- `sprint-backlog.md`
- `incident-log.md`
- `sla-definition.md`
- `weekly-report.md`

---

## Strumenti Consigliati

| Tipo                  | Strumento                           |
|------------------------|-------------------------------------|
| Gestione ticket        | Jira, Trello, GitHub Issues         |
| Documentazione         | Notion, Confluence, Google Drive    |
| Source Control         | GitHub, GitLab                      |
| CI/CD & DevOps         | GitHub Actions, Jenkins, Docker     |
| Comunicazione interna  | Slack, Discord, MS Teams            |

---

## Conclusione

> Un team moderno deve sapere *costruire e mantenere* allo stesso tempo.  
> Questo modello aiuta a creare equilibrio tra creatività e continuità, tra cambiamento e servizio.

---