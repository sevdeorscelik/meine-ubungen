# Fortgeschrittener Test - Programmiergrundlagen

## Test Anweisungen
* Arbeite mit der `index.js`-Datei, die im Starter Repository liegt.
* Folge allen Anweisungen unten, um den Test zu beenden.
* **Wichtig**: Stell sicher, dass deine Namen von Variablen, Funktionen und Klassen exakt so geschrieben sind, wie in den Anweisungen unten. Zum Verständnis stehen die deutschen Übersetzungen in Klammern (de: Übersetzung) Verwende aber nicht die übersetzten Wörter, da die Unit-Tests nur auf die englischen Wörter schauen.

* Du kannst testen, ob deine Lösungen den automatisierten Unit-Test bestehen, der sich mit im Repository befindet. Aber, investiere nicht zu viel Zeit darin die Unit-Tests zu bestehen. Fahre lieber fort und versuche lieber möglichst viele Aufgaben zu lösen.

* Schreib immer Funktionen, die Rückgabewerte liefern, statt nur allein Lösungen auf der Konsole auszugeben.
* Stell sicher, dass du am Ende deine Lösung commitest und pushst!
* Viel Erfolg!

# Datenstruktur

## A - Objekte

### A-1. Schlüssel-Wert-Paare (5 Punkte)
* Erstelle eine Objekt `profileData`. (de: profilDaten)
* Füge 4 Schlüssel-Wert-Paare zum Objekt hinzu: `name`, `surname`, `age` und `city`. (de: Name, Nachname, Alter,Stadt)

### A-2. Objekt zu Feld (5 Punkte)
* Schreibe eine Funktion `convertObjectToArray` (de: konvertiere Objekt zu Feld) die ein Objekt nimmt.
* Wandle das Objekt in ein verschachteltes Feld von Schlüssel-Wert-Paaren um.
* gib das Feld als Rückgabewert der Funktion zurück.
* Schau dir dazu das Beispiel an:

**Das übergebene Objekt:**
```javascript
let beispiel = {
    "1": 10, 
    "2": 20, 
    "3": 30
};
```

**Der erwartete Rückgabewert:**: 
```javascript
> console.log(convertObjectToArray(beispiel));
[ [ '1', 10 ], [ '2', 20 ], [ '3', 30 ] ]
```

## B - Felder 

### B-1. Daten bearbeiten (10 Punkte)
* Schreibe eine Funktion `convertArrayData` (de: konvertiere Feld Daten). 
* Benutze Feld-Methoden um die Daten in dem beschriebenen Feld zu ändern.
* Die ersten beiden Elemente im Feld, sollen ihre Position tauschen.
* Das dritte Element, soll durch `milk` ersetzt werden. 
* Gib das veränderte Feld als Rückgabewert der Funktion zurück. 

**Beispiel-Eingabe-Feld für die Funktion:**
```javascript
let originalFeld = ["coffee", "tea", "juice"];
```
Rufe deine Funktion auf und gib den Rückgabewert auf der Konsole aus.

**Erwartete Rückgabe:**
```javascript
> console.log(convertArrayData(originalFeld));
[ 'tea', 'coffee', 'milk' ]
```

### B-2. Feld zu Objekt umwandeln (15 Punkte)
* Schreibe eine Funktion `convertArraysToObject` (de: konvertiere Feld zu Objekt). 
* Wandle eingegebene Felder für Schlüsselnamen und Werte in ein Objekt um.
* Verwende die Feld-Methode `reduce` 

**Die gegebenen Felder**
```javascript
let cities = ["Berlin", "Hamburg", "Munich","Stuttgart","Duesseldorf"];

let areas = ["891.68 km2", "755.3 km2","310.7 km2","207.35 km2","217.41 km2"];
```

Rufe deine Funktion auf und gib die Rückgabe auf der Konsole aus.

**Erwartete Rückgabe:**
```javascript
> console.log(convertArraysToObject(cities, areas));
{
  Berlin: '891.68 km2',
  Hamburg: '755.3 km2',
  Munich: '310.7 km2',
  Stuttgart: '207.35 km2',
  Duesseldorf: '217.41 km2'
}
```
### B-3. Gitter erstellen (10 Punkte)
* Schreibe eine Funktion `createGrid` (de: erstelle Gitter).
* Sie soll zwei Argumente nehmen
* Das erste Argument `size` soll die größe des Gitters angeben.
* Das zweite Argument `char` soll eine Zeichenkette sein, mit der die Element des Gitters gefüllt werden.
* Die Funktion soll ein Feld mit 2 Dimensionen zurückgeben, das in jeder Gitterzelle die Zeichenkette als Inhalt enthält.

**Aufruf der Funktion:**
```javascript
createGrid(3, "*")
```
Rufe deine Funktion auf und gib die Rückgabe auf der Konsole aus.
```javascript
> console.log(createGrid(3,"*"));
[ [ '*', '*', '*' ], [ '*', '*', '*' ], [ '*', '*', '*' ] ]
```

### B-4. Wortumwandler (10 Punkte)
* Schreibe eine Funktion `wordConverter` (de: Wortkonvertierer).
* Sie nimmt ein Feld voller Zeichenketten und eine Zeichenkette suffix.
* Verwende Feld-Methoden, um an jedes Wort im Feld den Inhalt von suffix anzuhängen.
* Gib ein neues Feld mit den veränderten Wörtern als Rückgabewert zurück.
* Schau auf das Beispiel unten.
* **Wichtig:** Benutze keine Schleife, um diese Aufgabe zu lösen.


**Beispiel-Feld von Wörtern und Suffix:**
```javascript
let eingabe4 = ["smart", "kind", "sweet", "small", "clear"];
let suffix = "er";
```

Teste deine Funktion und gib die Rückgabe auf der Konsole aus.

```javascript
> console.log(wordConverter(eingabe4, suffix));
['smarter', 'kinder', 'sweeter', 'smaller', 'clearer']
```

### B-5. Berechnung von Arbeitszeit (10 Punkte)
* Schreibe eine Funktion `calculateHours` (de: berechne Stunden).
* Sie soll die Arbeitsstunden einer Person zusammen zählen und als Zahl zurück geben.
* Als Parameter nimmt sie ein Feld von Objekten entgegen. 
* Schau Dir das Beispiel-Feld `hourTracking` (de: Stunden Aufzeichnung) unten an.

**Hinweis**: geh davon aus, das `start` am Morgen liegt und kleiner ist als `end` am Nachmittag/Abend. Es wird nicht über Nacht gearbeitet.


**Arbeitsstunden:**
```javascript
const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];
```
Teste deine Funktion und gib den Rückgabewert auf der Konsole aus.

**Erwartete Ausgabe für dieses Beispiel:**
```javascript
> console.log(calculateHours(hourTracking));
36
```

## C - Klassen (10 Punkte)
* Erstelle eine Klasse `Course`, die als Vorlage für einen Jahreskurs am DCI steht.
* Die Klasse soll folgende Eigenschaften enthalten können.
    * `teacher`, für den Namen des Lehrers (Zeichenkette)
    * `type`, für die Art (Zeichenkette) des Kurses ( "marketing" oder "web development") 
    * `number`, die geplante Anzahl der Teilnehmer (Zahl)
     * Verwende diese Reihenfolge auch für den Konstruktor zum vorbelegen der Eigenschaften.
* Die Klasse soll Methoden enthalten:
    * Schreib eine Methode `spaceNeeded` (de: Platz benötigt), die berechnet und eine Zcichenkette zurückgibt, die aussagt, wie groß ein Klassenzimmer sein muss. 
        * Abhängig von der Anzahl der Teilnehmer 
        * für einen Teilnehmer brauchen wir 2m² Platz
        * für 10 Teilnehmer also 20m² u.s.w.
        * Die Rückgabe soll `The classroom should be 20m².` lauten
        * Das Quadrat-Symbol (²) erreicht man auf einer deutschen Standard-Tastatur mit `AltGr+2`

    * Schreib eine Methode `details`, die alle Informationen über den Kurs als Zeichenkette zurückgibt. 
        * Das Muster lautet: `This is a web development course taught by John Smith. There are 10 students taking the course.`
        * Die Art, den Namen des Lehrers und die Zahl der Teilnehmer musst du natürlich durch die Eigenschaften des Objekts ersetzen.
    * **Hinweis**: Halte dich genau an die englischen Textmuster und ersetze nur die Art des Kurses, den Namen des Lehrers und die Teilnehmerzahl, bzw. die berechnete Raumgröße. 

**Erwartete Rückgaben:**
* In diesem Beispiel wurde ein Objekt in Variable `course` aus der Klasse `Course` erstellt mit den Werten: 
    * "John Doe", für den Namen des Lehrers
    * "web development", als Typ des Kurses
    * 22, als Anzahl der Teilnehmer 
```javascript
> console.log(course.spaceNeeded());
The classroom should be 44m².

> console.log(course.details());
This is a web development course taught by John. There are 22 students taking the course.
```

## D - Problemlösung 

### D-1. Formatiere deine Zeichenkette (10 Punkte)

* Schreib eine Funktion `capitalizeFirstLetter` (de: schreib den ersten Buchstaben groß).
* Sie soll eine Zeichenkette als Argument nehmen.
* Stelle sicher, dass die Eingabe eine Zeichenkette ist. Wandle andere Werte (z.B. 123 oder true) in eine Zeichenkette um
* Die Funktion soll jeden ersten Buchstaben eines Wortes in einen Großbuchstaben umwandeln.
* **Beispiel** "the quick brown fox" → "The Quick Brown Fox". 
    
* Gib die umgewandelte Zeichenkette als Rückgabewert der Funktion zurück.

Rufe deine Funktion auf und gib das Ergebnis auf der Konsole aus.
```javascript
> console.log(capitalizeFirstLetter("hey there"));
Hey There

> console.log(capitalizeFirstLetter(true));
True
```

### D-2. Prüfung auf Gültigkeit - "Validierung" (15 Punkte)
* PIN steht für **P**ersönliche **I**dentifikations **N**ummer. Wie bei einer Bankkarte, oder dem entsperren eines Handys.
* Schreib eine Funktion `validPin` (de: gültige PIN), welche die Anforderungen des Tests prüft.
    * **Vorsicht:** Nach üblichen Regeln gelten Akronyme oft als Wörter, von denen nur der erste Buchstabe groß geschrieben wird. Achte darauf, Pin statt PIN im Funktionsnamen zu schreiben, sonst findet der automatische Test die Funktion nicht.

* Schau in die Unit-Tests zur Prüfung einer PIN (in Datei `testing/test.js`).

**Anforderungen**:
* Die PIN darf nur aus Ziffern (0..9) bestehen.
* Die PIN muss 4 Ziffern lang sein.
* Die PIN muss mindestens **2** verschiedene Ziffern enthalten.
* Die letzte Ziffer soll eine gerade Zahl sein (0,2,4,6,8)
* Die Quersumme (Summe aller Ziffern einer Zahl) soll mindestens 5 sein.

* Die Funktion soll `true` für eine PIN liefern, welche die Anforderungen erfüllt, `false` wenn die PIN da nicht tut. 

**Erwartete Rückgabewerte:**
```javascript
validPin("1234"); → true
validPin("1235"); → false // letzte Ziffer soll gerade sein
validPin("wwww"); → false // soll nur aus Ziffern bestehen
validPin("12345"); → false // soll 4 Stellen haben, nicht 5
validPin("2222"); → false // mindestens 2 verschiedene Ziffern
validPin("1000"); → false // Summe der Ziffern nicht mindestens 5
validPin("2224"); → true 
```
Ruf deine Funktion auf und gib das Ergebnis auf der Konsole aus.
```javascript
> console.log(validPin("1234"));
true
```
---
## Anhang: Die Unit-Tests mit **Jest**
Jest ist ein Node-Paket, mit dem so genannte Unit-Tests geschrieben werden. Um diesen Test auszuwerten, wird Jest verwendet.

Du findest eine `test.js`-Datei (im Ordner `/testing`) und eine `package.json`-Datei im Stammverzeichnis.

Löse einmalig nach dem Clonen die Abhängigkeiten auf. 
Speichere dabei `jest` als Entwicklungs-Abhängigkeit (--save-dev).
```
npm install --save-dev jest
```

Starte das Test-Kommando, das schon in der `package.json`-Datei vordefiniert ist.
```
npm run test
```

Mehr Details kannst Du in der [Jest Dokumentation](https://jestjs.io/docs/en/getting-started) (nur Englisch) nachlesen. Am besten erst **nach dem Test**, wenn Du die Aufgaben schon bearbeitet hast.
