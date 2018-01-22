                /*********************************
                            LES FONCTIONS
                *********************************/

// ----- Déclarer une fonction
// NB : Cette fonction ne retourne aucune valeur et ne prend pas de paramètres
function Bonjour() {
    // Lors de l'appel de cette fonction, les instructions ci dessous seront executées

alert('Bonjour !');
}
    // Je vais appeleer ma fonction "Bonjour" et déclencher ses instructions

// Bonjour();

function ditBonjour (Prenom, Nom) {
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> !</p>");
}

ditBonjour("Vincent", "NIERAT");

function ditBonjour (Prenom, Nom) {
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> !</p>");
}

ditBonjour("Robert", "Boulard");

function ditBonjour (Prenom, Nom) {
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> !</p>");
}

ditBonjour("Johnny", "Halliday");

/* EXERCICE
Créer une fonction permettant d'effectuer l'addition de deux nombres passés en parmamètres */


function addition (nb1,nb2) {
    return nb1 + nb2;
}

document.write("<p>" + addition(10,5) + "</p>");