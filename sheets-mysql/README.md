# mysql-sheets

# **Guida MySQL - Comandi Utili**

Questo README contiene una raccolta di comandi MySQL utili per la gestione di database, utenti, tabelle e dati. È pensato per essere una guida rapida per sviluppatori o amministratori di database.

---

## **Indice**
1. [Connessione a MySQL](#connessione-a-mysql)  
2. [Gestione Utenti](#gestione-utenti)  
3. [Gestione Database](#gestione-database)  
4. [Gestione Tabelle](#gestione-tabelle)  
5. [Inserimento e Manipolazione Dati](#inserimento-e-manipolazione-dati)  
6. [Query e Filtri](#query-e-filtri)  
7. [Join e Relazioni](#join-e-relazioni)  
8. [Funzioni Aggregate e Raggruppamenti](#funzioni-aggregate-e-raggruppamenti)

---

## **Connessione a MySQL**

### Login
```bash
mysql -u root -p
```

### Uscire da MySQL
```sql
exit;
```

---

## **Gestione Utenti**

### Mostrare gli Utenti
```sql
SELECT User, Host FROM mysql.user;
```

### Creare un Nuovo Utente
```sql
CREATE USER 'someuser'@'localhost' IDENTIFIED BY 'somepassword';
```

### Concedere Tutti i Privilegi su Tutti i Database
```sql
GRANT ALL PRIVILEGES ON *.* TO 'someuser'@'localhost';
FLUSH PRIVILEGES;
```

### Mostrare i Privilegi di un Utente
```sql
SHOW GRANTS FOR 'someuser'@'localhost';
```

### Revocare i Privilegi di un Utente
```sql
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'someuser'@'localhost';
```

### Eliminare un Utente
```sql
DROP USER 'someuser'@'localhost';
```

---

## **Gestione Database**

### Mostrare i Database Disponibili
```sql
SHOW DATABASES;
```

### Creare un Nuovo Database
```sql
CREATE DATABASE acme;
```

### Eliminare un Database
```sql
DROP DATABASE acme;
```

### Selezionare un Database
```sql
USE acme;
```

---

## **Gestione Tabelle**

### Creare una Tabella
```sql
CREATE TABLE users(
   id INT AUTO_INCREMENT,
   first_name VARCHAR(100),
   last_name VARCHAR(100),
   email VARCHAR(50),
   password VARCHAR(20),
   location VARCHAR(100),
   dept VARCHAR(100),
   is_admin TINYINT(1),
   register_date DATETIME,
   PRIMARY KEY(id)
);
```

### Eliminare una Tabella
```sql
DROP TABLE tablename;
```

### Mostrare le Tabelle in un Database
```sql
SHOW TABLES;
```

---

## **Inserimento e Manipolazione Dati**

### Inserire un Record nella Tabella `users`
```sql
INSERT INTO users (first_name, last_name, email, password, location, dept, is_admin, register_date) 
VALUES ('Brad', 'Traversy', 'brad@gmail.com', '123456', 'Massachusetts', 'development', 1, now());
```

### Inserire Più Record nella Tabella `users`
```sql
INSERT INTO users (first_name, last_name, email, password, location, dept, is_admin, register_date) 
VALUES 
('Fred', 'Smith', 'fred@gmail.com', '123456', 'New York', 'design', 0, now()),
('Sara', 'Watson', 'sara@gmail.com', '123456', 'New York', 'design', 0, now()),
('Will', 'Jackson', 'will@yahoo.com', '123456', 'Rhode Island', 'development', 1, now());
```

### Aggiornare un Record Esistente
```sql
UPDATE users SET email = 'freddy@gmail.com' WHERE id = 2;
```

### Eliminare un Record dalla Tabella `users`
```sql
DELETE FROM users WHERE id = 6;
```

---

## **Query e Filtri**

### Selezionare Tutti i Record dalla Tabella `users`
```sql
SELECT * FROM users;
```

### Filtrare i Record con la Clausola `WHERE`
```sql
SELECT * FROM users WHERE location = 'Massachusetts';
SELECT * FROM users WHERE location = 'Massachusetts' AND dept = 'sales';
SELECT * FROM users WHERE is_admin > 0;
```

### Ordinare i Risultati con `ORDER BY`
```sql
SELECT * FROM users ORDER BY last_name ASC;
SELECT * FROM users ORDER BY last_name DESC;
```

### Selezionare Valori Unici con `DISTINCT`
```sql
SELECT DISTINCT location FROM users;
```

### Ricercare con `LIKE`
```sql
SELECT * FROM users WHERE dept LIKE '%design%';
SELECT * FROM users WHERE dept NOT LIKE '%sales%';
```

---

## **Join e Relazioni**

### Creare una Tabella con Chiave Esterna (`posts`)
```sql
CREATE TABLE posts(
   id INT AUTO_INCREMENT,
   user_id INT,
   title VARCHAR(100),
   body TEXT,
   publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY(id),
   FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Eseguire un INNER JOIN tra `users` e `posts`
```sql
SELECT 
  users.first_name,
  users.last_name,
  posts.title,
  posts.publish_date 
FROM users 
INNER JOIN posts ON users.id = posts.user_id 
ORDER BY posts.title;
```

---

## **Funzioni Aggregate e Raggruppamenti**

### Funzioni Aggregate (Conteggio, Somma, Minimo/Massimo)
```sql
SELECT COUNT(id) FROM users;
SELECT MAX(age) FROM users;
SELECT MIN(age) FROM users;
SELECT SUM(age) FROM users;
SELECT UCASE(first_name), LCASE(last_name) FROM users;
```

### Raggruppamento con `GROUP BY`
```sql
SELECT age, COUNT(age) FROM users GROUP BY age HAVING COUNT(age) >= 2;
```

---
