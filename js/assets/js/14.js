                        /**************************
                        LA MANIPULATION DES CONTENUS
                        ***************************/

function l(e) {
    console.log(e)
}

/* ceci est égal à :

l = e => console.log(e) 

NOUVELLE SYNTAXE ECMA6 avec les fonctions flechées (arrow functions) :
https://mzl.la/1Xd7yNX */

/*
Je souhaite récupérer mon lien Google, comment faire ? */

var google = document.getElementById('google');
l(google);

/*
Je souhaite accéder aux informations sur ce lien */

    // A: lien vers lequel pointe la balise

l(google.href);

    // B: l'ID de la balise

l(google.id);

    // C: la class de la balise

l(google.className);

    // C: le texte de la balise

l(google.textContent);

/*
Maintenant, je souhaite modifier le contenu de mon lien. 
Comme une variable classique, je vais simplement affecter une nouvelle valeur à mon "textContent". */

google.textContent = "Coucou google !"


                        /************************************
                        AJOUTER UN ELEMENT DANS LA PAGE HTML
                        *************************************/

/* La fonction document.createElement() va permettre de générer un nouvel élément dans le DOM ; que je pourrai modifier par la suite avec les méthodes que nous venons de voir.

PS : ce nouvel element est placé en mémoire...
*/

// Définition de l'élément

var span = document.createElement('span');

// Si je souhaite lui donner un ID

span.id  = "monSpan";

// Si je souhaite lui attribuer du contenu

span.textContent = " Mon beau texte en JS";

// Comment ajouter un élément dans la page ?

google.appendChild(span);

/*              EXERCICE

En partant du travail deja réalisé sur la page.
Créer directement dans la page une balise <h1> ayant comme contenu : "Titre de mon article".

Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : ce lien sera de couleur Rouge non souligné. */

// -- Création de la balise h1
var h1 = document.createElement('h1');

// -- Création de la balise a
var a = document.createElement('a');

// -- Titre de mon Article
a.textContent = "Titre de mon Article";

// -- Je donne un lien à mon lien
a.href="#";

// -- Je met mon lien a, dans mon h1
h1.appendChild(a);

// -- Je met mon h1 dans la page
document.body.appendChild(h1);

//  -- Je veux que mon lien soit de couleur rouge
a.style.color = "red";

 // -- Je veux que mon lien ne soit pas souligné
 a.style.textDecoration = "none";