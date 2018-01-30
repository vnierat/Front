            /* **********************
            LES SELECTEURS D'ENFANTS
            *************************/

$(function() {
    l = e => console.log(e);

    // Si je souhaite selectionner toutes les DIV de ma page
    l($('div'));

    // Je souhaite sélectionner la balise NAV de ma page
    l($('nav'));

    // Je souhaite tous les elements descendants directs, cad tous les enfants dans nav
    l($('nav').children());

    // Parmi ces descendants, uniquement les elements UL
    l($('nav').children('ul'));

    // Je souhaite récup tous les elements LI de mon UL
    l($('nav').children('ul').find('li'));

    // Je souhaite récupérer uniquement le 2eme élement des mes LI
    l($('nav').find('li').eq(1));

    // Je souhaite connaitre le voisin immédiat de mon header
    l($('nav').next());
    l($('nav').next().next()); // voisin du voisin
    l($('nav').prev()); // le voisin d'avant

    // Les parents
    l($('nav').parent());


    


});