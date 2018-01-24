                        /**********************
                             LE DOM EN JS
                        ***********************/


/* *************************************************************** 

- Le DOM est une interface de developpement en JS pour HTML. Grace au DOM je vais etre en mesure d'acceder ou modifier mon HTML.

- L'objet "document" : c'est le point d'entrée de notre application vers mon contenu HTML. 

- Chaque page chargée dans mon navigateur a un objet "document".
****************************************************************** */

/* Comment puis-je faire pour récupérer les différentes informations de ma page HTML ? */

        /*---------------------------------------
        !!!!!! document.getElementById !!!!!!!!
        ----------------------------------------*/

/*
document.getElementById() est une fonction qui va permettre de récupérer un element HTML à partir de son identifiant unique : ID.
*/

var bonjour = document.getElementById('bonjour');
console.log(bonjour);



        /*---------------------------------------
        !! document.getElementsByClassName !!
        ----------------------------------------*/

/*
document.getElementsByClassName() est une fonction qui va permettre de récupérer un ou plusieurs elements (une liste) HTML à partir de leur class.
*/

var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// me renvoit un tableau JS avec mes elements HTML (collection HTML).


        /*---------------------------------------
        !! document.getElementsByTagName !!
        ----------------------------------------*/

/*
document.getElementsByTagName() est une fonction qui va permettre de récupérer un ou plusieurs elements (une liste) HTML à partir de leur nom de balise.
*/

var span = document.getElementsByTagName('span');
console.log(span);