                /* ####### EXERCICE ###### */


var membres = [
    {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
    {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
    {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
    {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
  ];  

var pseudo          = document.getElementById('pseudo');
var age             = document.getElementById('age');
var email           = document.getElementById('email');
var mdp             = document.getElementById('mdp');
var submit          = document.getElementById('submit');
var bienvenue       = document.getElementById('bienvenue');
var inscriptionForm = document.getElementById('inscriptionForm');

var pseudoError = document.getElementsByClassName('pseudoError') [0];
var ageError    = document.getElementsByClassName('ageError') [0];

//ETAPE 1 A 3


pseudo.addEventListener('input', function () {
    // console.log(pseudo.value);
    for(let i = 0 ; i < membres.length ; i++) {
        // console.log(membres[i]);
        /**
         * Si la saisie d'un pseudo en cours par mon utilisateur
         * correspond à un pseudo dans mon tableau de membres...
         * alors ma condition s'applique.
         * NB : La condition vérifie la saisir de mon utilisateur
         * pour tous les membres du tableau !
         */
        if(pseudo.value === membres[i].pseudo) {
            /**
             * Si je trouve une correspondance, j'affiche l'alerte
             * pseudoError, car le pseudo saisi par mon utilisateur
             * existe déjà dans le tableau de membre.
             */
            pseudoError.style.display = "block";
            submit.disabled = true;
            Bienvenue.textContent = '';
            break;
        } else {
            pseudoError.style.display = "none";
            submit.disabled = false;
            Bienvenue.textContent = 'Bienvenue ' + pseudo.value + ' !';
        }
    }
});

age.addEventListener('input', function () {
    for(let i = 0 ; i < membres.length ; i++) {
        if(age.value<18) {
            ageError.style.display = "block";
            submit.disabled = true;
            break;
        } else {
            ageError.style.display = "none";
            submit.disabled = false;
        }
    }
});

function Ajout() {
    if(age>18 && pseudo.value != membres[i].pseudo) {

    }
}







