/***************************
 * LES SELECTEURS EN JQUERY
 
 
 // Format $('selecteur');

 // En JQUERY tous les selecteurs CSS sont disponibles
 */

 $(function(){
    // DOM READY !
    l = e => console.log(e);

    // Selectionner toutes les balises SPAN !

    l(document.getElementsByTagName('span'));
    l($('span'));

    // Selectionner une Class !

    l(document.getElementsByClassName('MaClasse'));
    l($('.MaClasse'));

    // Selectionner un attribut

    l($('[href="https://www.google.fr"]'));

 });
 
 
 
 
 
 
 
 
 