// 1: Déclarer une variable en JS 

var monPrenom;

// 2: affecter unevaleur 

monPrenom = "Vincent";

// 3: afficher valeur de la variable dans la console 

console.log(monPrenom);


//********************************************************
// *********** LES TYPES DE VARIABLES *******************
//********************************************************

// typeof me permet de connaitre le type de ma variable
console.log(typeof monPrenom); 


// déclarer la variable sur la même ligne
var Age = 29;

// aficher dans la console

console.log(Age);

// connaitre son type

console.log(typeof Age);


//******************************************************* */
//                LA PORTEE DES VARIABLES

/* 
- Les variables déclarées directement à la racines 
du fichier JS son appellés variables GLOBALES 
Elles sont dispo dans l'ensemble de notre document, 
y compris dans les fonctions        

- Les variables déclarées à l'intérieur d'une fonction sont
appelées varaibles LOCALES.

- Depuis ECMA 6, vous pouvez déclarer une variable avec le mot clé:
"let". Votre variable sera accessible uniquement dans le bloc dans
lequel elle est contenue, CAD, déclaré.
Si elle est déclarée dans une conditions, elle sera disponible
 uniquement dans le bloc de la condition.

*/   
//******************************************************* */

// ****** Les variable FLOAT

var uneDecimale = -2.983;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// ****** Les booléens (VRAI/FAUX)

var unBooleen = false; // ou True
console.log(unBooleen);
console.log(typeof unBooleen);


// ****** LES CONSTANTES ***********************************

/* La déclaration CONST permet de créer une constante uniquement en 
lecture. Sa valeur ne pourra être modifiée que par des réaffectations
ultérieures. Une constante ne peut pas être déclarée à nouveau.

Par convention, les constantes sont en MAJ. */

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

/* Je ne peux pas faire cela
// USER = "Vincent"
/* XX Message d'erreur : 
Uncaught SyntaxError: Invalid or unexpected token */


//******************************************************* */
//       XXXX       LA MINUTE INFO         XXXX

/* Au fur et à mesure que l'on affect des valeurs à une
variable, celle prend la nouvelle valeur, et le nouveau
type.

En JS (ECMA Script) les varaibles sont auto-typées.

Pour convertir une variable de type NUMBER en STRING et
inversement, je peux utliser les fonctions natives de 
JavaScript. */
/******************************************************* */

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/* Ici la fonction parseInt() pour retourner un entier à 
partir de ma chaine de caractère */

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);


// ici je réaffecte une valeur à ma variable
unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// La conversion d'un nombre en String avec toString()

unNombre = 10;
var maChainedecaractere = unNombre.toString();
console.log(typeof unNombre);
console.log(typeof maChainedecaractere);
