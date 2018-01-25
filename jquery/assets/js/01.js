            /**************************************************
                          LA DISPONIBILITE DU DOM
            ***************************************************
 
 A partir du moment ou mon DOM, CAD l'ensemble l'arbo de ma page HTML, je peux commencer à utiliser JQuery.

 Je vais mettre l'ensemble de mon code dans une fonction, cette fonction sera appelée AUTOMATIQUEMENT par JQuery lorsque le DOM sera entièrement défini.

 3 façons de faire :
 */

jQuery(document).ready(function() {
     // -- Ici le DOM est entièrement chargé, je peux procéder à mon ocde JS
 }); 

// 2ème possibilité

$(document).ready(function(){
     
 });

// 3ème possibilité

$(function(){
}); 

// 4ème possibilité

$(() => {
    alert('Bienvenue dans ce cour JQUERY !')


// -- En JS :

document.getElementById('texteEnJquery').innerHTML = '<strong>Mon texte en JS</strong>';

// -- En JQ :

$('#texteEnJquery').html('Mon texte en JQ !!!!!')

});

