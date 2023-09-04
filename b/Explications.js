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

//déplacer les grandes étoiles
etoile_jaune.transition()
.duration(1000) 
.attr('x', milieuX+180)
.attr('y', milieuY+40) 

etoile_rose.transition()
.duration(1000) 
.attr('x', milieuX-300)
.attr('y', milieuY-90) 

etoile_vert.transition()
.duration(1000) 
.attr('x', milieuX-130)
.attr('y', milieuY-300) 

etoile_bleu.transition()
.duration(1000) 
.attr('x', milieuX+150)
.attr('y', milieuY-150) 

//les traits
trait1
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition()
.attr('x1', milieuX -280)
.attr('y1', milieuY -60)
.attr('x2', milieuX -125)
.attr('y2', milieuY -95)
.attr('stroke-opacity', .1)
.transition()
.duration(1000)
.attr('stroke-opacity', .5)
.attr("stroke", "white")  

trait2
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition()
.attr('x1', milieuX -125)
.attr('y1', milieuY -95)
.attr('x2', milieuX -55)
.attr('y2', milieuY -185)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")  

trait3
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX -110)
.attr('y1', milieuY -280)
.attr('x2', milieuX -55)
.attr('y2', milieuY -185)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")

trait4
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX -110)
.attr('y1', milieuY -280)
.attr('x2', milieuX +110)
.attr('y2', milieuY -205)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")

trait5
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX +110)
.attr('y1', milieuY -205)
.attr('x2', milieuX +115)
.attr('y2', milieuY -165)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")

trait6
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX +115)
.attr('y1', milieuY -165)
.attr('x2', milieuX +160)
.attr('y2', milieuY -130)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")

trait7
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX +50)
.attr('y1', milieuY -65)
.attr('x2', milieuX +180)
.attr('y2', milieuY -130)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")
 
trait8
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX +50)
.attr('y1', milieuY -65)
.attr('x2', milieuX +5)
.attr('y2', milieuY +50)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")

trait9
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX +180)
.attr('y1', milieuY -130)
.attr('x2', milieuX +200)
.attr('y2', milieuY +30)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")

trait10
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX +200)
.attr('y1', milieuY +30)
.attr('x2', milieuX +280)
.attr('y2', milieuY +270)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")

trait11
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")

trait12
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")

trait13
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")

trait14
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")

trait15
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")

trait16
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")

trait17
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")

// les étoiles
étoile1.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
.transition() 
.attr('cx',milieuX-125)
.attr('cy',milieuY-95)
.attr('r', 5)
.transition()
.duration(1000)
.attr("fill", "white")  

étoile2.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
.transition() 
.attr('cx',milieuX+110)
.attr('cy',milieuY-205)
.attr('r', 5)
.transition()
.duration(1000)
.attr("fill", "white")  

étoile3.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
.transition() 
.attr('cx',milieuX+115)
.attr('cy',milieuY-165)
.attr('r', 5)
.transition()
.duration(1000)
.attr("fill", "white")  

étoile4.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
.transition() 
.attr('cx',milieuX-55)
.attr('cy',milieuY-185)
.attr('r', 5)
.transition()
.duration(1000)
.attr("fill", "white")  

étoile5.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
.transition() 
.attr('cx',milieuX+50)
.attr('cy',milieuY-65)
.attr('r', 5)
.transition()
.duration(1000)
.attr("fill", "white")  

étoile6.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
.transition() 
.attr('cx',milieuX+5)
.attr('cy',milieuY+50)
.attr('r', 5)
.transition()
.duration(1000)
.attr("fill", "white")  

étoile7.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
.transition() 
.attr('cx',milieuX+280)
.attr('cy',milieuY+270)
.attr('r', 5)
.transition()
.duration(1000)
.attr("fill", "white")  

étoile8.transition()
.duration(500) 
.attr("fill", "#0f0f3d")

étoile9.transition()
.duration(500) 
.attr("fill", "#0f0f3d")

étoile10.transition()
.duration(500) 
.attr("fill", "#0f0f3d")

étoile11.transition()
.duration(500) 
.attr("fill", "#0f0f3d")

étoile12.transition()
.duration(500) 
.attr("fill", "#0f0f3d")

étoile13.transition()
.duration(500) 
.attr("fill", "#0f0f3d")

étoile14.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
