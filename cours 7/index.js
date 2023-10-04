/*
let Données = [23,45,160,425,376];

let espaceDessin = d3.select("body")
    .append('svg')
    .attr('width', 800)
    .attr('height', 800);

//rééfrence aux canevas
espaceDessin
// sélection des éléments à créer 
.selectAll('circle')
    // liaison des données 
    .data(Données)
    // signalement des ajouts 
    .enter()
    // ajout de chaque cercle, ForEach intégré 
    .append('circle')
        // pour injecter les données, on utilise une fonction 
        // premier paramètre(d) = donnée, deuxième(i) = l'index ( comemnce à 1 dans d3)
        .attr('cx', (d) => d )  // si plusieurs paramètre on met (d,i) => (let t = d+i; return t)
        .attr('cy', window.innerHeight/2)
        .attr('r',30)
        .attr('opacity', 0.2)
        .attr('fill', "black");
*/
const largeur = window.innerWidth;
const hauteur = window.innerHeight;
d3.csv('dataTransports.csv',function(d){
    // renommer les variables et définir leur type
    // voire en créer d'autres : cf ligne 28
    return {
        attente : +d.tempsAttente,
        dureeTrajet : +d.dureeTrajet,
        dureeTotale : +d.tempsAttente + +d.dureeTrajet,
        vehicule : d.typeTransport
    }
}).then(donnees =>{
    // vérfier que les données ont bien été importées
    console.log(donnees)

    // création de notre premier espace de dessin

    let canevas1 = d3.select("body")
    .append("svg")
    .attr("width", largeur)
    .attr("height", 500);

    // ajouter les cercles qui montrent le temps passé dans le transport
            // de chaque type de transport durant cette semaine
            canevas1.selectAll('circle')
            .data(donnees)
            .enter()
            .append('circle')
                .attr('cx',(d,i) => 50 + i * 25) 
                .attr('cy',50)
                .attr('r', d => d.dureeTotale)
                .attr('fill', d =>{
                    if(d.vehicule == 'bus'){return 'green'}
                    else if(d.vehicule == 'train'){return 'red'}
                    else if(d.vehicule == 'pied'){return 'pink'}
                    else if(d.vehicule == 'metro'){return 'blue'}
                })
                .attr('opacity',0.8)
    
    
    // ajouter le second canevas
    let canevas2 = d3.select("body")
        .append("svg")
        .attr("width", largeur)
        .attr("height", 500)

    // dessiner les temps d'attentes
    //composer des donées (faire la sommes des durée par type), on a pas les temps cumulés 
    // on va utilise d3.rollup : returne un object fancy / d3.rollups : return un tableau
    // La différence avec le canevas1 : dans le canevas 1 on fait autant de cercle qu'il y a de jour, avec rollups on aura un cercle par véhicule
    let donneesParVehicule = d3.rollups (donnees, v => d3.sum(v,d=>d.
    dureeTrajet), d => d.vehicule)
    
    //durée d'attente par véhicule
    let donneesAttenteParVehicule = d3.rollups (donnees, v => d3.sum(v,d => d.attente),
    d => d.vehicule)
    console.log(donneesAttenteParVehicule, donneesParVehicule)

    })
/*
    // ajouter les cercles cumulés 
    // attentionm on va avoir deux fois des cercles qui correspondent à des données différentes 
    canevas2.append('g').selectAll('circle')// On définit un groupe comem ca on peut tout déplacer en même temps (groupe svg)
        .data(donneesParVehicule)
        .enter()
        .append('circle')
            // découper l'espace en 4 ( nbr de type de véhicule) et les placer de manière équidistance sur la largeur
            .attr('cx', (d,i)=> 200 + (largeur - 40)/4 *i) 
            .attr('cy', 200)
            .attr('r', d => d[1])
            .attr('fill', d =>{
                if(d[0] == 'bus'){return 'green'}
                else if(d[0] == 'train'){return 'red'}
                else if(d[0] == 'pied'){return 'pink'}
                else if(d[0] == 'metro'){return 'blue'}
            })
            .attr('opacity',0.4)
    
    // temps d'atttente 
    canevas2.append('g').selectAll('circle')// On définit un groupe comem ca on peut tout déplacer en même temps (groupe svg)
    .data(donneesAttenteParVehicule)
    .enter()
    .append('circle')
        // découper l'espace en 4 ( nbr de type de véhicule) et les placer de manière équidistance sur la largeur
        .attr('cx', (d,i)=> 200 + (largeur - 40)/4 *i) 
        .attr('cy', 200)
        .attr('r', d => d[1]) // d[1] dans le tableau la position 1 corresspond aux temps cumulés 
        .attr('fill', d =>{
            if(d[0] == 'bus'){return 'green'}
            else if(d[0] == 'train'){return 'red'}
            else if(d[0] == 'pied'){return 'pink'}
            else if(d[0] == 'metro'){return 'blue'}
        })
        .attr('opacity',0.8)
       
    // créer un troisième caneva
    let canevas3 = d3.select('body')
    .append("svg")
    .attr("width", largeur)
    .attr("height", 1000)

    // ajoute des objets 
    //Cercle d'attentes 
    canevas3.append('g').selectAll('circle')
        .data(donnees)
        .enter()
        .append('circle')
            .attr('cx', 80)
            .attr('cy', (d,i)=>20 + i*20)
            .attr('r', d=> d.attente/1.5)
            .attr('opacity', 0.8)
            .attr('fill', d =>{
                if(d.vehicule == 'bus'){return 'green'}
                    else if(d.vehicule == 'train'){return 'red'}
                    else if(d.vehicule == 'pied'){return 'pink'}
                    else if(d.vehicule == 'metro'){return 'blue'}
            })
    canevas3.append('g').selectAll('line')
        .data(donnees)
        .enter()
        .append('line')
            .attr('x1',80 )
            .attr('y1',(d,i)=>20 + i*20 )
            .attr('x2', d=> 80 + d.dureeTrajet * 2)
            .attr('y2', (d,i)=>20 + i*20)
            .attr('stroke', d =>{
                if(d.vehicule == 'bus'){return 'green'}
                    else if(d.vehicule == 'train'){return 'red'}
                    else if(d.vehicule == 'pied'){return 'pink'}
                    else if(d.vehicule == 'metro'){return 'blue'}
            })
            .attr('opacity', 0.8)
 
    // maintenant, mettons ces éléments en cercle !
    let canevas4 = d3.select("body")
    .append("svg")
    .attr("width", largeur)
    .attr("height", 400); 

    // ajoutons les lignes de durée de trajet
    canevas4.append('g').selectAll('line')
        .data(donnees)
        .enter()
        .append('line')
            .attr('x1',largeur/2)
            .attr('y1',largeur/2 -200)
            .attr('x2',(d,i) => largeur/2 + (7*d.dureeTrajet * Math.cos(((2 * Math.PI)/donnees.length) * i)))
            .attr('y2',(d,i) => largeur/2 -200 + (7*d.dureeTrajet * Math.sin(((2 * Math.PI)/donnees.length) * i)))
            .attr('stroke', d => retourneCouleur(d))
            
    canevas4.append('g').selectAll('circle')
    .data(donnees)
        .enter()
        .append('circle')
            .attr('cx', (d,i) => largeur/2 + (7*d.dureeTrajet * Math.cos(((2 * Math.PI)/donnees.length) * i)))
            .attr('cy', (d,i) => largeur/2 -200 + (7*d.dureeTrajet * Math.sin(((2 * Math.PI)/donnees.length) * i)))
            .attr('r', d=> d.attente/1.5)
            .attr('opacity', 0.8)
            .attr('fill', d =>{
                if(d.vehicule == 'bus'){return 'green'}
                    else if(d.vehicule == 'train'){return 'red'}
                    else if(d.vehicule == 'pied'){return 'pink'}
                    else if(d.vehicule == 'metro'){return 'blue'}
            })    
})

function retourneCouleur(d){
    if(d.vehicule === 'bus'){return 'green'}
    else if(d.vehicule === 'train'){return 'red'}
    else if(d.vehicule === 'metro'){return 'blue'}
    else if(d.vehicule === 'pied'){return 'pink'}
    else if(d.vehicule === 'voiture'){return 'yellow'}             
}

*/
