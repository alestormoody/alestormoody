# Metodi PHP più utilizzati

## Manipolazione Stringhe

| Metodo | Descrizione |
|--------|-------------|
| `strlen($string)` | Restituisce la lunghezza di una stringa |
| `strtoupper($string)` | Converti in maiuscolo |
| `strtolower($string)` | Converti in minuscolo |
| `substr($string, $start, $length)` | Estrae una sottostringa |
| `strpos($string, $search)` | Trova la posizione di una sottostringa |
| `str_replace($search, $replace, $string)` | Sostituisce testo |
| `trim($string)` | Rimuove spazi bianchi all'inizio e alla fine |
| `ltrim($string)` | Rimuove spazi a sinistra |
| `rtrim($string)` | Rimuove spazi a destra |
| `str_repeat($string, $times)` | Ripete una stringa un certo numero di volte |
| `str_shuffle($string)` | Mescola i caratteri della stringa |
| `str_word_count($string)` | Conta le parole in una stringa |
| `ucfirst($string)` | Prima lettera maiuscola |
| `ucwords($string)` | Prima lettera di ogni parola maiuscola |

## Manipolazione Numeri

| Metodo | Descrizione |
|--------|-------------|
| `abs($number)` | Valore assoluto |
| `ceil($number)` | Arrotondamento per eccesso |
| `floor($number)` | Arrotondamento per difetto |
| `round($number, $precision)` | Arrotonda con precisione |
| `rand($min, $max)` | Numero casuale tra $min e $max |
| `mt_rand($min, $max)` | Versione più veloce di rand() |
| `number_format($number, $decimals, ".", ",")` | Formatta un numero |

## Manipolazione Array

| Metodo | Descrizione |
|--------|-------------|
| `count($array)` | Restituisce il numero di elementi |
| `array_merge($array1, $array2)` | Unisce due array |
| `array_push($array, $value)` | Aggiunge elementi alla fine |
| `array_pop($array)` | Rimuove l'ultimo elemento |
| `array_shift($array)` | Rimuove il primo elemento |
| `array_unshift($array, $value)` | Aggiunge elementi all'inizio |
| `in_array($value, $array)` | Controlla se un valore è presente |
| `array_map(fn($item) => $item * 2, $array)` | Applica una funzione a tutti gli elementi |
| `array_reverse($array)` | Inverte l'ordine degli elementi |
| `array_diff($array1, $array2)` | Differenza tra array |
| `array_intersect($array1, $array2)` | Intersezione tra array |
| `array_unique($array)` | Rimuove duplicati |
| `array_filter($array, fn($item) => $item > 10)` | Filtra gli elementi |
| `array_reduce($array, fn($carry, $item) => $carry + $item, 0)` | Riduce un array a un singolo valore |

## Funzioni per Variabili e Tipi

| Metodo | Descrizione |
|--------|-------------|
| `isset($var)` | Verifica se una variabile è definita |
| `empty($var)` | Verifica se una variabile è vuota |
| `gettype($var)` | Restituisce il tipo della variabile |
| `is_array($var)` | Controlla se è un array |
| `is_string($var)` | Controlla se è una stringa |
| `is_int($var)` | Controlla se è un intero |

## Gestione File

| Metodo | Descrizione |
|--------|-------------|
| `file_get_contents($filename)` | Legge il contenuto di un file |
| `file_put_contents($filename, $data)` | Scrive su un file |
| `fopen($filename, "r")` | Apre un file in lettura |
| `fclose($handle)` | Chiude un file |
| `file_exists($filename)` | Controlla se un file esiste |
| `filesize($filename)` | Restituisce la dimensione del file |
| `unlink($filename)` | Cancella un file |
| `mkdir($path, 0777, true)` | Crea una cartella |
| `rmdir($path)` | Rimuove una cartella vuota |
| `scandir($directory)` | Restituisce un array con i file di una cartella |

## HTTP e Form

| Metodo | Descrizione |
|--------|-------------|
| `$_GET['param']` | Recupera dati da richieste GET |
| `$_POST['param']` | Recupera dati da richieste POST |
| `$_REQUEST['param']` | Recupera dati da richieste GET o POST |
| `header("Location: /pagina.php")` | Reindirizza l'utente |
| `setcookie("nome", "valore", time() + 3600)` | Imposta un cookie |

## Date e Tempo

| Metodo | Descrizione |
|--------|-------------|
| `date("Y-m-d H:i:s")` | Restituisce la data e ora corrente |
| `strtotime("+1 day")` | Converte una stringa in timestamp |
| `time()` | Restituisce il timestamp corrente |
| `mktime($hour, $minute, $second, $month, $day, $year)` | Converte in timestamp |
| `date_diff($date1, $date2)` | Differenza tra date |

## Database (PDO)

```php
$pdo = new PDO("mysql:host=localhost;dbname=test", "user", "pass");
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$id]);
$data = $stmt->fetch(PDO::FETCH_ASSOC);
```

## Metodi per JSON

| Metodo | Descrizione |
|--------|-------------|
| `json_encode($array)` | Converte array/oggetto in JSON |
| `json_decode($json, true)` | Converte JSON in array/oggetto |
| `json_last_error()` | Controlla errori nella decodifica JSON |

## Metodi per Gestione Sessioni

| Metodo | Descrizione |
|--------|-------------|
| `session_start()` | Avvia una sessione |
| `$_SESSION['user'] = 'Mario';` | Assegna valore alla sessione |
| `session_destroy()` | Distrugge la sessione |

## Metodi per Sicurezza e Hashing

| Metodo | Descrizione |
|--------|-------------|
| `password_hash("mypassword", PASSWORD_BCRYPT)` | Genera hash |
| `password_verify("mypassword", $hash)` | Verifica una password |
| `hash("sha256", "string")` | Crea hash con algoritmo SHA-256 |

## Metodi per Gestione degli Errori

| Metodo | Descrizione |
|--------|-------------|
| `error_reporting(E_ALL);` | Attiva tutti gli errori |
| `set_error_handler("myErrorHandler");` | Imposta un gestore di errori personalizzato |

```php
try {
    // Codice che potrebbe generare un'eccezione
} catch (Exception $e) {
    echo $e->getMessage();
}
```

