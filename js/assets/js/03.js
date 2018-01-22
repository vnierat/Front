/***********************
 LA CONCATENATION
************************/


var DebutDePhrase = "Ajourd'hui ";
var DateDuJour = new Date();
var SuiteDePhrase = ", sont présents ";
var NombreDeStagiaire = 12 ;
var FinDePhrase = " stagiaires.<br><br><br>";

/* Nous souhaitons grace à la concatenation affichier tout ce petit
monde en un seul morceau */

document.write(DebutDePhrase + DateDuJour.getDate() + "/"+ (DateDuJour.getMonth() +1 )+ "/" + DateDuJour.getFullYear() + SuiteDePhrase + NombreDeStagiaire + FinDePhrase);

/*--------------------------------------------------
EXERCICE :
Créer une concaténation à partir des éléments suivants:
---------------------------------------------------*/

var phrase1 = "Je m'appelle ";
var phrase2 = "Vincent et j'ai ";
var age     = 29;
var phrase3 = " ans !";

document.write(phrase1 + phrase2 + age + phrase3);