// canevas pour mettre les constellations dans les fonctions
    // on commence par copier-coller ICI l'exemple de base => exemple_de_base.js (on modifie rien dans exemple de base comme ça il est tjrs utilisable)
    // le but va être de juste modifier les coordonnées, tout le reste est déjà calibré juste
    
    // on commence par les grandes étoiles; il suffit d'aller chercher les coordonnées x et y des étoiles jaune-rose-vert-bleu de constellation qu'on programme et de remplacer dans ce qu'on a copier-coller
    
    // Ensuite, on fait la même chose avec les traits, quel traits à quelle coordonnées n'a pas d'importance
    // Dans le cas où la constellation à plus de traits que celle de janvier. il faut créer un nouveau trait :
        // il faut aller dans dans la html de base et se rendre à l'endroit où on déclare les traits l.42 [cette ligne ne devrait pas changer mais si jamais c'est la séction qui comme par "// ligne entre les étoiles"]
        // on se rend au dernier trait créer, et on en créer en nouveau en copiant-collant. on change le numéros de trait 
        // comment ces traits sont ceux de la constellation sagitaire, il faut pas lui mettre de coordonnée comme ca ce trait n'apparait pas quand on lance la page 
        // le trait12 suit cet exemple, donc on peut juste le coper-coller. l.164[cf-plus bas, je les aie rapporté directement sur ce fichier]
    // Dans le cas inverse, la constellation à moins de traits que celle de janvier, il faut faire disparaitre certains traits
        // dans ce cas là, on donne au trait la couleur du background et on lui donne pas de coordonnée [je suis pas encore sûre que ca va pas créer des problèmes à long terme mais on trouvera une solution au cas ou ^^']
        // le trait9 pour la constellation de février suit ce schémas alors on peut copier-coller à la l.715 [les lignes ont changé alors j'ai copié-collé plus bas]

    //Ensuite on fait les petites étoiles, c'est le même principe que les traits.
    // on copie colle les coordonnées des étoiles dans le modèles de sagitaire
    // dans le cas ou il y a trop ou pas assez d'étoile comme pour les traites, il faut en créer ou les faire disparaitre
        // pour en créer, on va à la ligne 200, et on créé après la dernière étoile une dernière étoile [cette ligne risque de changer un peu, c'est la séction qui comme par "// petites étoiles "]
        // on peut copier coller l'étoile9 à la ligne 249 [les lignes risquent de changer alors j'ai copié-collé plus bas]
        // Pour faire disparaitre une étoile de trop on peut copier-coller l'expempe de l'étoile5 à la ligne 779 [les lignes ont changé alors j'ai copié-collé plus bas]
    
    // Ensuite, on copier-colle ce code au bon endroit dans les deux fonctions en fonction de la constellation qu'on fait
    // c'est pas un code difficile mais il est grand et on peut vite s'en mêler les pinceaux, courage :) 

    //AJOUT APRES REFLEXIONS ET DIVERS TEST 
    // précision par rapport à l'ajout de trait ou d'étoile. à chaque fois qu'on ajoute, on doit mettre à jour les autre constellations, une fois dans le boutons gauche, une fois dans le bouton droite
    // tout ce qu'il y a faire c'est copier coller l'exemple du trait9 ou de l'étoile5 et bien sûr mettre à jour le n° en fonction de ce qui vient d'être créer 
    // pour éviter de devoir tout changer à chaque fois, je propose qu'on commence par les grosses constellation, comme ça après on a pas tjrs besoin de tout reprendre [maj : j'ai fait gimini, ca doit être la plus grosse, peut-être que poisson est plus grande on verra bien]
    // evidemment que les ligne énoncées plus haut se sont déplacée en ajoutant des choses dans le code...
    // je les copie colle ici : 
    /*
    let trait12 = MonEspaceSVG.append('line')
        .attr('stroke-linecap', "round")
        .attr("stroke", "#0f0f3d")
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', 8)
        .attr('stroke-opacity', .5)
    
    trait9
    .transition()
        .duration(500) 
        .attr("stroke", "#0f0f3d")
    
    let étoile9 = MonEspaceSVG.append('circle') // le plus en bas
        .attr('r', 5)
        .attr("fill", "#0f0f3d")

    étoile5.transition()
        .duration(500) 
        .attr("fill", "#0f0f3d")
    */

