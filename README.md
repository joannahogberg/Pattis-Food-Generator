# Pattis-Food-Generator

Examinationsuppgift att skapa en sida som returnerar en slumpad maträtt.

Sidan ska visa en ny slumpad maträtt varje gång man klickar på en knapp eller ett klickbart element. Det ska även finnas ett alternativ där man kan välja om man enbart vill ha vegetariska alternativ som ska visas.

## Struktur av hemsidan

Själva sidan behöver innehålla:
* En ruta med text som innehåller själva maträtten som ska visas
* En knapp eller något element som går att klicka på för att generera en ny maträtt
* En checkbox eller något element som man kryssar i för att få sidan att enbart visa vegetariska alternativ.

## Struktur av koden

Din `js`-fil behöver innehålla:
* En array eller flera olika arrayer med olika maträtter. Det kan ju vara svårt att komma på en lång array med olika maträtter så ni kan i klassen crowdsourcea den om ni vill, d.v.s. sätta ihop en lista tillsammans.
* En funktion eller flera funktioner som hämtar en slumpad maträtt från arrayen
* Funktionen ska även kunna kolla om funktionen ska returnera en rätt som är vego eller inte vego.
* En funktion som lägger till maträtten på hemsidan vid varje klick.


``````Pseudokod

var maträtter = [
    { name: "FAJITAS", veg: false, url: "http://www.ica.se/recept/original-fajitas-718669/", img: "pics/fajitas.jpg" },
    { name: "FAJITAS VEGGIE STYLE", veg: true, url: "http://www.ica.se/recept/fajitas-med-sojafars-och-bonsalsa-719808/", img: "pics/fajitas_veggie.jpg" },
  
];

funktion för att hämta recept(){

if-sats som kontrollerar om användaren kryssat i val för vegetariska rätter

*om användaren ej kryssat i ta fram ett slumptal mellan 1 och antal maträtter som finns tillgängliga

Else if-sats för att kontrollera om användaren kryssat i rutan för vegetariska rätter 
* isf loopa igenom samtliga maträtter och kontrollera sedan om rätten ör vegetarisk för att endast visa vegetariska alternativ

}
```
