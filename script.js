//Array med objekt för olika maträtter
var meals = [
    { name: "Fajitas", veg: false, url: "http://www.ica.se/recept/original-fajitas-718669/", img: "pics/fajitas.jpg" },
    { name: "Fajitas Veggie Style", veg: true, url: "http://www.ica.se/recept/fajitas-med-sojafars-och-bonsalsa-719808/", img: "pics/fajitas_veggie.jpg" },
    { name: "Chili Con Carne", veg: false, url: "http://www.ica.se/recept/chili-con-carne-424/", img: "pics/chiliconcarne.jpg" },
    { name: "Chili Sin Carne", veg: true, url: "http://www.koket.se/gert_klotzke/soppor_och_grytor/artor__bonor_och_linser/chili_sin_carne/", img: "pics/chili_sin_carne.jpg" },
    { name: "Pulled Beef Burger", veg: false, url: "http://www.tasteline.com/recept/pulled-beef-burgare-med-hemgjorda-pommes-frites-och-inlagd-rodlok/", img: "pics/pulledbeefburger.jpg" },
    { name: "Vegetarian Pulled Pork Burger", veg: true, url: "http://gronaskafferiet.se/vegetarisk-pulled-pork-burgare-med-coleslaw/", img: "pics/veggiepulled_pork.jpg" },
    { name: "Moule Frites with Aioli", veg: false, url: "http://www.koket.se/koket/anders-leven/moules-frites-med-aioli/", img: "pics/moules.jpg" },
    { name: "Chevre Chaud", veg: true, url: "http://www.tasteline.com/recept/chevre-chaud-gratinerad-getost/", img: "pics/chevre_chaud.jpg" },
    { name: "Pasta Vongole", veg: false, url: "http://www.koket.se/per-morberg/varmratter/pasta-och-nudlar/per-morbergs-pasta-vongole/", img: "pics/pastavongole.jpg" },
    { name: "Indian Daal", veg: true, url: "http://www.tasteline.com/recept/daal/", img: "pics/daal.jpg" },
    { name: "Chicken Tikka Masala", veg: false, url: "http://marcussamuelsson.se/recept/kyckling-tikka-masala-recept/", img: "pics/tikkamasala.jpg" },
    { name: "Potatoe Leek Soup", veg: true, url: "http://www.koket.se/filip-fasten/soppor-grytor/gronsaker-potatis-rotfrukter/potatis--och-purjolokssoppa/", img: "pics/potatissoppa.jpg" },
    { name: "Beef Rydberg", veg: false, url: "http://www.koket.se/per_morberg/varmratter/kott/biff_rydberg_a_la_morberg/", img: "pics/biffrydberg.jpg" },
    { name: "Carrot and Coconut Soup", veg: true, url: "http://www.hemtrevligt.se/icakuriren/recept/morotssoppa-med-kokosmjolk", img: "pics/carrotsoup.jpg" }
];

//Knapp för att slumpmässigt ta fram recept
var runBtn = document.getElementById("runBtn");
//Aktivering av händelsehanterare
runBtn.addEventListener("click", getRecepie);

//Globala variabler
var vego = document.getElementById("veg");
var img = document.getElementById("image");
var dish = document.getElementById("dish");
var recepie = document.getElementById("recepie");
var getRec = document.getElementById("getRec");




//Funktion för att slumpmässigt generera recept. Tilldelar sedan namn, länk samt bild till det recept som tagits fram
function getRecepie() {
    //if-sats för att kontrollera om checkbox för vegetariskt alternativ är ikryssad
    runBtn.innerHTML = "GET NEW RECEPIE";


    if (vego.checked === false) {
        var random = Math.floor(meals.length * Math.random());
        dish.innerHTML = meals[random].name;
        recepie.href = meals[random].url;
        image.src = meals[random].img;
        getRec.innerHTML = "GO TO RECEPIE";

    } else if (vego.checked === true) {
        for (var i = 0; i < meals.length; i++) {
            var random = Math.floor(meals.length * Math.random());
            if (meals[random].veg === true) {
                dish.innerHTML = meals[random].name;
                recepie.href = meals[random].url;
                image.src = meals[random].img;
                getRec.innerHTML = "GO TO RECEPIE";
            }
        }
    }
}