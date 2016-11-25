//Globala variabler
var vego = document.getElementById("veg"); //ref till checkbox för vegetariska rätter
var runBtn = document.getElementById("runBtn"); //ref till knapp för att starta program
var meals = []; //array för maträtter

//Konstruktor för maträtter
function Dish(dish, veg, url, img) {
    this.dish = dish;
    this.veg = veg;
    this.url = url;
    this.img = img;

}

//funktion för att pusha in nya maträtter i arrayen
function addRecepies(Dish) {

    meals.push(Dish);

};

//Maträtter som skall pushas in
addRecepies(dish1 = new Dish("FAJITAS", false, "http://www.ica.se/recept/original-fajitas-718669/", "pics/fajitas.jpg"));
addRecepies(dish2 = new Dish("FAJITAS VEGGIE STYLE", true, "http://www.ica.se/recept/fajitas-med-sojafars-och-bonsalsa-719808/", "pics/fajitas_veggie.jpg"));
addRecepies(dish3 = new Dish("CHILI CON CARNE", false, "http://www.ica.se/recept/chili-con-carne-424/", "pics/chiliconcarne.jpg"));
addRecepies(dish4 = new Dish("CHILI SIN CARNE", true, "http://www.koket.se/gert_klotzke/soppor_och_grytor/artor__bonor_och_linser/chili_sin_carne/", "pics/chili_sin_carne.jpg"));
addRecepies(dish5 = new Dish("PULLED BEEF BURGER", false, "http://www.tasteline.com/recept/pulled-beef-burgare-med-hemgjorda-pommes-frites-och-inlagd-rodlok/", "pics/pulledbeefburger.jpg"));
addRecepies(dish6 = new Dish("VEGGIE PULLED BEEF BURGER", true, "http://gronaskafferiet.se/vegetarisk-pulled-pork-burgare-med-coleslaw/", "pics/veggiepulled_pork.jpg"));
addRecepies(dish7 = new Dish("MOULE FRITES WITH AIOLI", false, "http://www.koket.se/koket/anders-leven/moules-frites-med-aioli/", "pics/moules.jpg"));
addRecepies(dish8 = new Dish("CHEVRE CHAUD", true, "http://www.tasteline.com/recept/chevre-chaud-gratinerad-getost/", "pics/chevre_chaud.jpg"));
addRecepies(dish9 = new Dish("PASTA VONGOLE", false, "http://www.koket.se/per-morberg/varmratter/pasta-och-nudlar/per-morbergs-pasta-vongole/", "pics/pastavongole.jpg"));
addRecepies(dish10 = new Dish("INDIAN DAAL", true, "http://www.tasteline.com/recept/daal/", "pics/daal.jpg"));
addRecepies(dish11 = new Dish("CHICKEN TIKKA MASALA", false, "http://marcussamuelsson.se/recept/kyckling-tikka-masala-recept/", "pics/tikkamasala.jpg"));
addRecepies(dish12 = new Dish("POTATOE LEEK SOUP", true, "http://www.koket.se/filip-fasten/soppor-grytor/gronsaker-potatis-rotfrukter/potatis--och-purjolokssoppa/", "pics/potatissoppa.jpg"));
addRecepies(dish13 = new Dish("BIFF RYDBERG", false, "http://www.koket.se/per_morberg/varmratter/kott/biff_rydberg_a_la_morberg/", "pics/biffrydberg.jpg"));
addRecepies(dish14 = new Dish("CARROT & COCONUT SOUP", true, "http://www.hemtrevligt.se/icakuriren/recept/morotssoppa-med-kokosmjolk", "pics/carrotsoup.jpg"));

//Aktivering av händelsehanterare
runBtn.addEventListener("click", getRecepie);

function getRecepie() {
    var imgElem = document.getElementById("image"); //ref till img elementet
    var dishElem = document.getElementById("dish"); //ref till element för att visa maträtt
    var recepie = document.getElementById("recepie"); //ref till länk till recept
    var getRec = document.getElementById("getRec"); //ref till span tag för receptlänk

    runBtn.innerHTML = "GET ANOTHER DISH"; //lägger in nytt värde på knappen för att ta fram recept

    //if-sats för att kontrollera om checkbox för vegetariskt alternativ är ikryssad
    if (vego.checked === false) {
        var random = Math.floor(meals.length * Math.random());
        dishElem.innerHTML = meals[random].dish;
        recepie.href = meals[random].url;
        imgElem.src = meals[random].img;

    }
    //Om veg elementet är ikryssat så körs loopen och en if-sats kontrollerar om 
    //veg är true för att endast visa vegetariska rätter
    else if (vego.checked === true) {
        for (var i = 0; i < meals.length; i++) {
            var random = Math.floor(meals.length * Math.random());
            if (meals[random].veg === true) {
                dishElem.innerHTML = meals[random].dish;
                recepie.href = meals[random].url;
                imgElem.src = meals[random].img;
            }
        }
    }
    getRec.innerHTML = "GO TO RECEPIE";

}
