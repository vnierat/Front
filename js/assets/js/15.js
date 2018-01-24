                        /**************************
                               LES EVENEMENTS
                        ***************************/

/* Les évènements vont me permettre de déclencher une fonction, CAD une série d'instructions suite à une action de mon utlisateur.

OBJECTIF : être en mesure de capturer ces évènements afin d'executer une fonction.

* Les évènements : MOUSE (souris)

    - click : au clic sur élement
    - mouseenter : la souris passe au dessus de la zone d'un element
    - mouseleave : la souris sort de cette zone

* Les évènements clavier : KEYBOARD

    - keydown : une touche du clavier est enfoncée
    - keyup   : une touche du clavier est relachée

* Les évènements WINDOW (Fenêtre)

    - scroll : défilement de la fenêtre
    - resize : redimensionement de la fentetre

* Les évènements formulaire : FORM

    change : pour les éléments <input>, <select> et <textarea>
    submit : à l'envoi (soumission) du formulaire
    input  : pour capter la saisie de l'utilisateur sur un cahmp <input>


    ########## ÉCOUTEURS D'EVENEMENTS ##########

Pour attacher un évènement à un éléments, ou autrement dit, pour déclarer un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utiliser la syntaxe suivante :



*/

var p = document.getElementById('monParagraphe');

// Je souhaite que mon paragraphe soit rouge au clic de la souris

function changerLaCouleurEnRouge() {
    p.style.color = "red";
} 

p.addEventListener('click', changerLaCouleurEnRouge);



// #########################################################

/* EXERCICE PRATIQUE :
A l'aide de JavaScript, créer un champ input type avec un ID unique. Afficher ensuite dans une alerte, la saisie de l'utlisateur. */

// #########################################################

// -- Création du champ input
var input = document.createElement('input');
document.body.appendChild(p);

// -- Attribution d'un Attribut
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Saisissez un Contenu...');

//-- Attribution d'un ID
input.id = "MonID";

// -- Ajout dans la page
document.body.appendChild(input);

function voirLaSaisieDeMonInput() {
    console.log(input.value);
    alert(input.value);
}

input.addEventListener('change', voirLaSaisieDeMonInput);