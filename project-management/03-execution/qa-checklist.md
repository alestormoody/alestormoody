# QA Checklist – Pre-Release `<Nome Progetto>`

Controlli funzionali, tecnici e di qualità da completare prima del rilascio pubblico o in staging.

---

## Funzionalità

- [ ] Registrazione / Login completati
- [ ] CRUD profili funzionante
- [ ] Pubblicazione e ricerca annunci funzionante
- [ ] Matching e candidatura operativi

---

## Performance e compatibilità

- [ ] Caricamento < 2s su desktop e mobile
- [ ] Test su Chrome, Firefox, Safari
- [ ] Responsive su 3 risoluzioni minime
- [ ] Compatibilità con mobile Android/iOS

---

## Accessibilità e UI

- [ ] Label e input accessibili (WCAG 2.1 AA)
- [ ] Contrasto colori testato
- [ ] Navigazione da tastiera
- [ ] Errori validati visivamente e via ARIA

---

## Sicurezza & DevOps

- [ ] Password criptate e protette
- [ ] Nessun dato sensibile nei log
- [ ] Deploy testato su staging
- [ ] Backup automatico configurato

---

## Note Finali

> Tutti i criteri devono essere verificati prima del go-live.  
> Checklist da firmare o approvare internamente.

**Verificato da:** `<Nome QA / PM>`  
**Data:** `<dd/mm/yyyy>`