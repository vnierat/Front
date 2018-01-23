                /*********************************
                            LES CONDITIONS
                *********************************/

/*
var MajoriteLegaleFR = 18;

if(14 >= MajoriteLegaleFR) {
    alert('Bienvenue !');
}
else {
    alert('Google');
}
*/

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */

/*
var MajoriteExo = 18;

Age = prompt("Veuillez nous communiquer votre âge","Saisissez votre âge")

if(Age >= MajoriteExo) {
    alert('Bienvenue !');
}
else {
    alert('Et bien tant pis pour toi ! Tu vas regarder Peppa Pig ;)');
    window.location.href="https://www.youtube.com/channel/UCXptamDYEVcU4JCio30hYTw";
}

// CORECTION

// -- 1. Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// -- 2. Créer une fonction pour demande son age.

function verifierAge(age) {
    if(age >= MajoriteLegaleFR) {
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande a l'utilisateur son age
var age = parseInt( prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>") );

// -- 4. Vérification de l'age de l'utilisateur...
if(verifierAge(age)) {
    // -- 4a. J'affiche un message de bienvenue
    alert("Bienvenue sur mon site internet réservé pour les majeurs...");
    document.write('0_0 !!!');
}
else {
    // -- 4b. J'effectue une redirectionù
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";
}
*/

                /*********************************
                   LES OPERATEURS DE COMPARAISON
                *********************************/

/* L'operateur de comparaison "==" signifie: égal à
Il permet de vérifier que 2 variables sont identiques.

- L'opérateur de comparaison "===" signifie que : strictement égal.
Il va comparer, la valeur et le type.

- L'opérateur de comparaison " != " : Différent de
- L'operateur de compraison " !== " : Strictement différent de
*/

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// -- 1. Demander à l'utilisateur son adresse email
var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");

// -- 2. Je vérifie si l'email saisie (emailUser) correspond avec la BDD (email)
if(emailUser === email) {
    // -- 2a. Tous est ok, je continue la vérification avec le mot de passe...

    // -- 2a1. On demande a l'utilisateur son mot de passe
    var mdpUser = prompt("votre mot de passe ?","<Saisissez votre mot de passe>");

    // -- 2a2. Vérification du mot de passe
    if(mdpUser === mdp) {
        alert('Bienvenue !');
    } else {
        alert("ATTENTION, nous n'avons pas reconnu votre mot de passe.");
        document.location.href = "https://www.google.fr/search?q=mot+de+passe+perdu&oq=mot+de+passe+perdy&aqs=chrome.1.69i57j0l5.4471j0j7&sourceid=chrome&ie=UTF-8";
    }

} else {
    // -- 2b. Les emails ne correspondent pas...
    alert("ATTENTION, nous n'avons pas reconnu votre adresse email.");
}

// -- EXEMPLE DES FONCTIONS

function monUtilisateurEstCorrect(emailUser, mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    } else {
        return false;
    }
}

var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");
var mdpUser = prompt("votre mot de passe ?","<Saisissez votre mot de passe>");

if(monUtilisateurEstCorrect(emailUser,mdpUser)) {
    alert('Bienvenue ' + emailUser);
} else {
   alert('ATTENTION, email/mot de passe incorrect.')
}
