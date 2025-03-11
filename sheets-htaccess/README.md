# **Guida alle Configurazioni `.htaccess`**

Questo file README fornisce una guida dettagliata per configurare il comportamento del server Apache tramite i file `.htaccess`.

---

## **Configurazioni Disponibili**

### **1. Forzare HTTPS** (`.forceHttps`)
Per reindirizzare tutto il traffico su HTTPS:

```apache
RewriteEngine on
RewriteCond %{HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
```

Questa configurazione garantisce che tutte le richieste HTTP vengano reindirizzate alla versione HTTPS.

---

### **2. Forzare il Prefisso www** (`.forceWWW`)
Per reindirizzare tutte le richieste alla versione con `www` del dominio:

```apache
RewriteEngine on
RewriteCond %{HTTP_HOST} ^htmlg\.com [NC]
RewriteRule ^(.*)$ http://www.htmlg.com/$1 [L,R=301,NC]
```

Esempio: `htmlg.com` → `www.htmlg.com`.

---

### **3. Rimuovere il Prefisso www** (`.forceNonWWW`)
Per reindirizzare tutte le richieste dalla versione con `www` a quella senza:

```apache
RewriteEngine on
RewriteCond %{HTTP_HOST} ^www\.htmlg\.com [NC]
RewriteRule ^(.*)$ http://htmlg.com/$1 [L,R=301]
```

Esempio: `www.htmlg.com` → `htmlg.com`.

---

### **4. Pagine di Errore Personalizzate** (`.customError`)
Definire pagine personalizzate per errori HTTP:

```apache
ErrorDocument 500 "Sorry, something went wrong!"
ErrorDocument 401 https://htmlg.com/404/
ErrorDocument 404 404error.html
```

- **500**: Mostra un messaggio personalizzato per errori del server.
- **401**: Reindirizza a una pagina specifica per accessi non autorizzati.
- **404**: Serve una pagina HTML personalizzata per errori "Not Found".

---

### **5. Reindirizzamento di un Intero Sito** (`.redirect`)
Per reindirizzare permanentemente tutto il sito a un altro dominio:

```apache
Redirect 301 / https://htmlg.com/
```

Tutte le richieste saranno inviate a `https://htmlg.com`.

---

### **6. Reindirizzamento di Pagine Specifiche** (`.redirectPages`)
Per reindirizzare URL specifici a nuove destinazioni:

```apache
Redirect 301 /oldlink.html https://htmlg.com/help/
Redirect 301 /oldlink https://htmlg.com/about/
```

Esempio:  
- `/oldlink.html` → `https://htmlg.com/help/`
- `/oldlink` → `https://htmlg.com/about/`

---

### **7. Alias per Directory** (`.aliasDirectory`)
Permettere l'accesso ai contenuti di una directory tramite un alias:

```apache
RewriteEngine On
RewriteRule ^source_directory/(.*) target_directory/$1
```

Esempio: accedere ai file in `target_directory` tramite l'URL `source_directory`.

---

### **8. Rimuovere l'Estensione .php** (`.removeExtension`)
Consentire l'accesso ai file PHP senza specificare l'estensione `.php`:

```apache
RewriteEngine On
RewriteCond %{SCRIPT_FILENAME} !-d
RewriteRule ^([^.]+)$ $1.php [NC,L]
```

Esempio: accedendo a `example.com/page`, verrà servito `example.com/page.php`.

---

### **9. Bloccare Indirizzi IP Specifici** (`.blockIp`)
Impedire l'accesso al sito da determinati indirizzi IP:

```apache
Order deny,allow
Allow from all
Deny from 123.123.123.123
Deny from 123.123.123.123
```

Sostituire gli indirizzi IP con quelli da bloccare.

---

### **10. Consentire l'Accesso Solo da un IP Specifico** (`.filterIp`)
Limitare l'accesso al sito a un solo indirizzo IP:

```apache
# Require all denied
# Require ip 123.123.123.123
```

Decommentare queste righe e sostituire con l'indirizzo IP consentito.

---

## **Come Usare i File**
1. Copia il contenuto del file desiderato nella directory principale del tuo sito web o nel file `.htaccess`.
2. Assicurati che il modulo Apache `mod_rewrite` sia abilitato (necessario per molte configurazioni).
3. Testa ogni configurazione per assicurarti che funzioni come previsto.

> Nota: Alcune configurazioni potrebbero richiedere permessi specifici sul server o modifiche al file di configurazione principale di Apache.

---

## **Autore**
Questa guida è stata creata per aiutarti a gestire e ottimizzare le configurazioni del tuo server Apache utilizzando i file `.htaccess`.
