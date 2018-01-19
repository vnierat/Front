// déclarer un tableau numérique pour un tableau indéxé

var monTableau = [];
var myArray = new Array;

monTableau[0] = "Hugo";
monTableau[1] = "Jacky";
monTableau[2] = "Michel";

console.log(monTableau); // Affiche toutes les données
console.log(monTableau[1]); // affiche Jacky car n°1
console.log(monTableau[2]); // affiche Michel car n°2

var NosPrenoms = ["Hana", "John",  "Maxime", "Adnane", "Jonathan"]
console.log(NosPrenoms);

// Déclarer et affecter des valeurs à un objet
// ATTENTION::Pas de tableaux associatifs en JavaScript ! Ca n'existe pas !

var Coordonnee = {
    prenom : "Hugo",
    nom    : "Liegard",
    age    : 28   // pas de ";" sur le dernier
};

console.clear();
console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.nom);

// Je vais créer 2 tableaux numériques

var listeDePrenoms = ["Hugo", "Rodrigue", "Kristie"];
var listeDeNoms = ["LIEGARD", "NOUEL", "SOUKAI"];

// Je vais créer un tableau à 2 dimensions à partir de mes 2 tableaux,
// Soit un tableau dans un tableau

var Annuaire = [listeDePrenoms, listeDeNoms];

// Afficher un nom et un prenom sur ma page HTML

document.write(Annuaire[0][1]);
document.write(' ');
document.write(Annuaire[1][1]);




/***********************************************

xxxxxxxxxxxxxxxxxxxxxxxxxxx  EXERCICE  xxxxxxxxxxxxxxxxxxxxx
Créer un tableau à 2 dimensions nommé "AnnuaireDesStagiaires" qui
contiendra toutes les coordonnées pour chaque stagiaire.

Avec Noms, prénoms, Tél.

*********************************************************/


var AnnuaireClasse = [
    { prenom : "Vincent", nom : "NIERAT",    tel : "3615"},
    { prenom : "Luke",    nom : "SKYWALKER", tel : "911"},
    { prenom : "John",    nom : "SMITH",     tel : "17"},
];

console.log(AnnuaireClasse);
console.log(AnnuaireClasse[0].prenom);
console.log(AnnuaireClasse[1].nom);

/* Le fait d'avoir des objets dans un tableau indéxé ; nous avons
mis en place le format JSON */

/* *****************
        AJOUTER UN ELEMENT
        ********************************/

var Couleurs = ['Rouge', 'Jaune', 'Vert'];

// si je souhaite ajouter un element dans mon tableau

console.clear();
console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push('Orange');
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

/* NB: la fonction unShift() permet d'ajouter un ou plusieurs
elements en debut de tableau.



/*************************************************
     RECUPERER ET SORTIR LE DERNIER ELEMENT
**************************************************/

/* La fonction pop() me permet de supprimer un ou plusieurs élements de mon tableau
de mon tableau et d'en récupérer la valeur. Je peux accessoirement
recupérer cette valeur dans une variable. */

var monDernierElement = Couleurs.pop();
console.log(Couleurs);
console.log(monDernierElement);


/* NB : La même chose est possible avec le premier element en 
utlilisant la fonction shift()

/* NB : La fonction splice() vous permet de sortir un ou plusieurs
elements de votre tableau */


