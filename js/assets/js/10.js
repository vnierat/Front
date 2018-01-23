                /*********************************
                        LES BOUCLES EN JS
                *********************************/

// --- LA BOUCLE FOR **********************

for(let i = 0 ; i <= 10 ; i++) {
    document.write('<p>Instruction executée : <strong>'+ i +'</strong></p>');
}

document.write('<hr>');

var j = 1;
while(j <=10) {
    document.write('<p>Instruction executée : <strong>'+ j +'</strong></p>');
    // ATTENTION A NE PAS OUBLIER L'INCREMENTATION
    j++;
}

document.write('<hr>');

/**********************
        EXERCICE
***********************/

var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Bobby', 'John-Ross'];

// CONSIGNE : grace à une boucle for, afficher la liste des prenoms du tableau ci dessus. Dans la console, ou sur la page.

for(let i = 0 ; i < Prenoms.length ; i++) {
    document.write('<p>Les apotres 2.0 : <strong>'+ Prenoms[i] + '</strong></p>');
}

document.write('<hr>');

// La boucle ForEach
// ATTENTION A LA PERFORMANCE !!!

Prenoms.forEach(affichePrenom);

function affichePrenom(prenoms, index) {
    consol.log(prenoms);
}



