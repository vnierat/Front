                /*********************************
                       LES OPERATEURS LOGIQUES
                *********************************/

/**************  L'OPERATEUR ET: &&

Si la combinaison email user et email correspond et la combinaison mdpuser et mdp correspond.

--> Dans cette condition, les deux doivent obligatoirement correspondrent pour etre validés.

Ex ? if(emailUser == email && mdpUser == mdp) {...}


/**************  L'OPERATEUR OU: ||

Si la combinaison emailUser et email correspond et/ou la combinaison mdpUser et mdp correspond.

--> Dans cette condition, au moins l'une des 2 doit correpondre pour être validée.

Ex ? if(emailUser == email || mdpUser == mdp) {...}

/************ L'OPERATEUR "!" ou encore NOT

Siginifie le contraire de... ou NOT

--> Dans cette condition, au moins l'une des 2 doit correpondre pour être validée.

Ex ? var monUtilisateurestApprouve = true;
     if(!monUtilisateurestApprouve) {...};
     Mon utlisateur n'est pas approuvé.

     reviens à ecrire :
     if(monUtilisateurestApprouve == false) {...}


 */
