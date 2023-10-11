function BoutonGenderOver(){
        BoutonCompte += 1
        console.log(BoutonCompte)
    d3.csv('villagers.csv',function(d){
        return {
        nom : d.Name,
        espece : d.Species,
        genre : d.Gender,
        personnalite : d.Personality,
        hobbie : d.Hobby,
        signe : d.Sign,
        style : d.Style1,
    }

    }).then(donnees =>{ 
        const SigneGenre = d3.group(donnees, (d) => d.signe, (d) => d.genre)
        if (QuelMoisSommesNous == 1) {
            let MaleCompte = SigneGenre.get("Sagittarius").get("Male").length
            let FemaleCompte = SigneGenre.get("Sagittarius").get("Female").length
           
            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x', milieuX+90 - MaleCompte*1.5)
                    .attr('y', milieuY+190 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX+60 - FemaleCompte *1.5 )
                    .attr('y', milieuY-190 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX+90 + 50+MaleCompte )
                    .attr('y',  milieuY+190 +50 )
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX+60 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY-190 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5") 
        } else if(QuelMoisSommesNous == 2){

        //changement des étoiles en fonction des données Genre
            let MaleCompte = SigneGenre.get("Capricornus").get("Male").length
            let FemaleCompte = SigneGenre.get("Capricornus").get("Female").length
        
            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x', milieuX+90 - MaleCompte*1.5)
                    .attr('y', milieuY+190 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX-40 - FemaleCompte *1.5 )
                    .attr('y', milieuY-190 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX+90 + 50+MaleCompte )
                    .attr('y',  milieuY+190 +50 )
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX-40 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY-190 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        // apparition des diagrammes en barre
        // Diagramme en barre selon :  SIGNE - SEXE - HOBBY

                 //variables utilisées 
                 const Hobby = d3.group(donnees, d => d.signe, d=> d.genre, d => d.hobbie )
                 const chiffreHobbies = [1,2,3,4,5,6,7,8]
                 let PlacementXHobby = 1200
                 let PlacementYHobby = 350
 
                     //Male
                     const CapricornusMaleHobbies = Hobby.get("Capricornus").get("Male")
                     const CapricornusMaleHobbiesArray = Array.from(CapricornusMaleHobbies)
                     CapricornusMaleHobbiesArray.push(["Fashion", []])             
                     CapricornusMaleHobbiesArray.sort(d3.ascending)
                     const CapricornusMaleHobbiesArrayEtChiffre = d3.zip(CapricornusMaleHobbiesArray,chiffreHobbies)
 
                     //Female
                     const CapricornusFemaleHobbies = Hobby.get("Capricornus").get("Female")
                     const CapricornusFemaleHobbiesArray = Array.from(CapricornusFemaleHobbies)
                     CapricornusFemaleHobbiesArray.push(["Fitness", []])
                     CapricornusFemaleHobbiesArray.sort(d3.ascending) 
                     const CapricornusFemaleHobbiesArrayEtChiffre = d3.zip(CapricornusFemaleHobbiesArray,chiffreHobbies)
                              
                //fond blanc
                MonEspaceSVG.append("rect")
                .attr("id", "FondBlancHobby")
                .attr("x", PlacementXHobby-45)
                .attr("y", PlacementYHobby-170)
                .attr("width", 430)
                .attr("height", 200)
                .transition()
                .duration(1000) 
                .style('fill','white')
                .style('stroke','#4B4B6E')
                .style('stroke-width','3')
                .attr("rx", 8)
                .attr("ry", 8)
                .attr("opacity", 0.8)
                

                 // Les axes
                  const xHobby = d3.scaleBand()
                  .domain(["Education", "Fashion","Fitness",  "Music", "Nature", "Play"])
                  .range([0, 350])
  
                  const yHobby = d3.scaleLinear()
                  .domain([0, 10])
                  .range([300, 150]);
  
                  MonEspaceSVG.append("g") 
                        .attr("id", "AxeXHobby")
                      .attr("transform", `translate(${PlacementXHobby},${PlacementYHobby})`)
                      .call(d3.axisBottom(xHobby))
                      .attr('font-family', "AnimalCrossing")
                      .attr("opacity", 0) 
                      .transition()
                        .duration(1000) 
                        .attr("opacity",1)       

                  MonEspaceSVG.append("g") 
                        .attr("id", "AxeYHobby")
                      .attr("transform", `translate(${PlacementXHobby},${PlacementYHobby - 300})`)
                      .call(d3.axisLeft(yHobby))
                      .attr('font-family', "AnimalCrossing") 
                      .attr("opacity", 0) 
                      .transition()
                      .duration(1000) 
                      .attr("opacity",1)
                     
                 // les barres
                  MonEspaceSVG.selectAll("rect")
                  .exit()
                  .data(CapricornusFemaleHobbiesArrayEtChiffre)
                  .enter()
                  .append("rect")
                        .attr("id", d => `rectFemHobby${d[1]}`)
                      .attr("x", d => PlacementXHobby - xHobby.bandwidth() + d[1]*xHobby.bandwidth()+ xHobby.bandwidth()/2)
                      .attr("y", d => PlacementYHobby - yHobby(20- d[0][1].length))
                      .attr("width", xHobby.bandwidth()/2)
                      .attr("height", d => yHobby(20 - d[0][1].length))
                      .transition()
                      .duration(1000) 
                      .style('fill','#57ebff')
                      .attr("opacity", 0.8)
                      //.style('stroke','#57ebff')
                
                MonEspaceSVG.selectAll("rect")
                 .exit()
                 .data(CapricornusMaleHobbiesArrayEtChiffre)
                 .enter()
                 .append("rect")
                        .attr("id", d => `rectMalHobby${d[1]}`)
                     .attr("x", d => PlacementXHobby -xHobby.bandwidth() + d[1]*xHobby.bandwidth())
                     .attr("y", d => PlacementYHobby - yHobby(20- d[0][1].length))
                     .attr("width", xHobby.bandwidth()/2)
                     .attr("height", d => yHobby(20 - d[0][1].length))
                     .transition()
                     .duration(1000) 
                     .style('fill','#ffe75c')
                     .attr("opacity", 0.8)
                     //.style('stroke','#ffe75c');
                
        // Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITES

                //variables utilisées 
                const Signe = d3.group(donnees, d => d.signe, d=> d.genre, d => d.personnalite )
                const chiffreSigne = [1,2,3,4,5,6,7,8]
                let PlacementXSigne = 1200
                let PlacementYSigne = 600
                    
                    //Male
                    const CapricornusMalePersonnalite = Signe.get("Capricornus").get("Male")
                    const CapricornusMalePersonnaliteArray = Array.from(CapricornusMalePersonnalite) 
                    CapricornusMalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                    CapricornusMalePersonnaliteArray.sort(d3.ascending)
                    const CapricornusMalePersonnaliteArrayEtChiffre = d3.zip(CapricornusMalePersonnaliteArray,chiffreSigne)

                    //Female
                    const CapricornusFemalePersonnalite = Signe.get("Capricornus").get("Female")
                    const CapricornusFemalePersonnaliteArray = Array.from(CapricornusFemalePersonnalite) 
                    CapricornusFemalePersonnaliteArray.push(["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                    CapricornusFemalePersonnaliteArray.sort(d3.ascending) 
                    const CapricornusFemalePersonnaliteArrayEtChiffre = d3.zip(CapricornusFemalePersonnaliteArray,chiffreSigne)
                        
                //fond blanc
                MonEspaceSVG.append("rect")
                .attr("id", "FondBlancSign")
                .attr("x", PlacementXSigne-45)
                .attr("y", PlacementYSigne-170)
                .attr("width", 430)
                .attr("height", 200)
                .transition()
                .duration(1000) 
                .style('fill','white')
                .style('stroke','#4B4B6E')
                .style('stroke-width','3')
                .attr("rx", 8)
                .attr("ry", 8)
                .attr("opacity", 0.8)

                //les Axes
                const xSigne = d3.scaleBand()
                .domain(["Big Sister", "Cranky", "Jock", "Lazy",  "Normal", "Peppy", "Smug", "Snooty"])
                .range([0, 350])

                const ySign = d3.scaleLinear()
                .domain([0, 10])
                .range([300, 150]);

                MonEspaceSVG.append("g")
                        .attr("id", "AxeXSign")
                    .attr("transform", `translate(${PlacementXSigne},${PlacementYSigne})`)
                    .call(d3.axisBottom(xSigne))
                    .attr('font-family', "AnimalCrossing")
                    .attr("opacity", 0) 
                    .transition()
                      .duration(1000) 
                      .attr("opacity",1)   
                    
                MonEspaceSVG.append("g")
                        .attr("id", "AxeYSign")
                    .attr("transform", `translate(${PlacementXSigne},${PlacementYSigne-300})`)
                    .call(d3.axisLeft(ySign))
                    .attr('font-family', "AnimalCrossing")
                    .attr("opacity", 0) 
                    .transition()
                      .duration(1000) 
                      .attr("opacity",1)   
                
                console.log(CapricornusFemalePersonnaliteArrayEtChiffre, CapricornusMalePersonnaliteArrayEtChiffre)
                //les barres 
                MonEspaceSVG.selectAll("rect")
                .exit()
                .data(CapricornusFemalePersonnaliteArrayEtChiffre)
                .enter()
                .append("rect")
                        .attr("id", d => `rectFemSign${d[1]}`)
                    .attr("x", d => PlacementXSigne -xSigne.bandwidth() + d[1]*xSigne.bandwidth() + xSigne.bandwidth()/2)
                    .attr("y", d => PlacementYSigne - ySign(20- d[0][1].length))
                    .attr("width", xSigne.bandwidth()/2)
                    .attr("height", d => ySign(20 - d[0][1].length))
                    .transition()
                    .duration(1000) 
                    .style('fill','#57ebff')
                      .attr("opacity", 0.8)
                    //.style('stroke','#57ebff')

                MonEspaceSVG.selectAll("rect")    
                .exit()
                .data(CapricornusMalePersonnaliteArrayEtChiffre)
                .enter()
                .append("rect")
                        .attr("id", d => `rectMalSign${d[1]}`)
                    .attr("x", d => PlacementXSigne -xSigne.bandwidth() + d[1]*xSigne.bandwidth())
                    .attr("y", d => PlacementYSigne - ySign(20- d[0][1].length))
                    .attr("width", xSigne.bandwidth()/2)
                    .attr("height", d => ySign(20 - d[0][1].length))
                    .transition()
                    .duration(1000) 
                    .style('fill','#ffe75c')
                     .attr("opacity", 0.8)
                    //.style('stroke','#ffe75c')
                

        // Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //variables utilisées 
                const Espece = d3.group(donnees, d => d.signe, d=> d.genre, d => d.espece)
                let PlacementXEspece = 1200
                let PlacementYEspece = 550

                //Male
                const CapricornusMaleEspece = Espece.get("Capricornus").get("Male")
                const CapricornusMaleEspeceArray = Array.from(CapricornusMaleEspece)
                CapricornusMaleEspeceArray.sort(d3.ascending)

                //Female
                const CapricornusFemaleEspece = Espece.get("Capricornus").get("Female")
                const CapricornusFemaleEspecesArray = Array.from(CapricornusFemaleEspece)
                CapricornusFemaleEspecesArray.sort(d3.ascending) 
                                        
                //couleurs associées à une espèce
                Couleur = [ '#E74C3C', '#3498DB', '#9B59B6', '#2980B9', '#16A085',
                '#8E44AD', '#D35400', '#C0392B', '#FF00FF', '#D2B4DE',
                '#E67E22', '#2C3E50', '#FF5733', '#D98880', '#FFC300',
                '#AED6F1', '#C39BD3', '#F1948A', '#CB4335', '#FAD02E',
                '#AF7AC5', '#FF1493', '#FF69B4', '#DFFF00', '#FF4500',
                '#8A2BE2', '#FF6347', '#B22222', '#FFA07A', '#F5B041',
                '#FFD700', '#20B2AA', '#FF1493', '#FFC0CB', "#8ADF87"]
                const EEspece = d3.groups(donnees, d => d.espece)
                let EspeceListe = []
                for (let i = 0; i < 35; i++) {
                        EspeceListe.push(EEspece[i].shift())
                }
                CouleurETEspeceListe = d3.zip(EspeceListe,Couleur)
                
                //fond blanc
                MonEspaceSVG.append("rect")
                .attr("id", "FondBlancEspece")
                .attr("x", PlacementXEspece-45)
                .attr("y", PlacementYEspece+135)
                .attr("width", 550)
                .attr("height", 200)
                .transition()
                .duration(1000) 
                .style('fill','white')
                .style('stroke','#4B4B6E')
                .style('stroke-width','3')
                .attr("rx", 8)
                .attr("ry", 8)
                .attr("opacity", 0.8)
                
                // Les axes
                const yEspece = d3.scaleBand()
                .domain(["Female", "Male"])
                .range([300, 150]) 

                const xEspece= d3.scaleLinear()
                .domain([0,20])
                .range([0, 350]) 

                MonEspaceSVG.append("g")
                .attr("id", "AxeYEspece")
                .attr("transform", `translate(${PlacementXEspece},${PlacementYEspece})`)
                .call(d3.axisLeft(yEspece))
                .attr('font-family', "AnimalCrossing")
                .attr("opacity", 0) 
                .transition()
                  .duration(1000) 
                  .attr("opacity",1)     

                MonEspaceSVG.append("g")
                .attr("id", "AxeXEspece")
                .attr("transform", `translate(${PlacementXEspece},${PlacementYEspece+300})`)
                .call(d3.axisBottom(xEspece))
                .attr('font-family', "AnimalCrossing") 
                .attr("opacity", 0) 
                .transition()
                  .duration(1000) 
                  .attr("opacity",1)   
                
                // Les barres 
                        let AvanceFemale = 0
                        for (let i = 0; i < CapricornusFemaleEspecesArray.length; i++) {
                                MonEspaceSVG.append("rect")
                                .attr("id", "rectfl" + i)
                                .attr("x", PlacementXEspece + AvanceFemale  + 0.5*i)
                                .attr("y", PlacementYEspece+250)
                                .attr("width", CapricornusFemaleEspecesArray[i][1].length*17)
                                .attr("height", 30)
                                .transition()
                                .duration(1000) 
                                .attr("opacity", 0.8)

                                AvanceFemale += CapricornusFemaleEspecesArray[i][1].length*17                        
                                for (let j = 0; j < CouleurETEspeceListe.length; j++) {
                                        if (CapricornusFemaleEspecesArray[i][0] == CouleurETEspeceListe[j][0]) {
                                        let rectanglefe = document.getElementById(`rectfl${i}`) 
                                        rectanglefe.style = `fill : ${CouleurETEspeceListe[j][1]}`;  
                                }}
                        }
                let AvanceMale = 0
                for (let a = 0; a < CapricornusMaleEspeceArray.length; a++) {
                        MonEspaceSVG.append("rect")
                        .attr("id", "rect" + a)
                        .attr("x", PlacementXEspece + AvanceMale  + 0.5*a)
                        .attr("y", PlacementYEspece + 170)
                        .attr("width", CapricornusMaleEspeceArray[a][1].length*17)
                        .attr("height", 30)
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 0.8)
                        
                        AvanceMale += CapricornusMaleEspeceArray[a][1].length*17 
                        for (let c = 0; c < CouleurETEspeceListe.length; c++) {
                                if (CapricornusMaleEspeceArray[a][0] == CouleurETEspeceListe[c][0]) {
                                let rectangle = document.getElementById(`rect${a}`) 
                                rectangle.style = `fill : ${CouleurETEspeceListe[c][1]}`;     
                        
                        console.log(CapricornusMaleEspeceArray[a][0],CouleurETEspeceListe[c][0],CouleurETEspeceListe[c][1])                           
                        }}
                } 
                // Les labels
                for (let h = 0; h < CouleurETEspeceListe.length/2; h++) {
                        MonEspaceSVG.append("rect")
                        .attr("id", "rectlab1" + h)
                        .attr("x", PlacementXEspece +380)
                        .attr("y", PlacementYEspece +140 + 9*h + h*1.5)
                        .attr("width", 9)
                        .attr("height", 9)
                        .style('fill',CouleurETEspeceListe[h][1])
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 0.8)

                        MonEspaceSVG.append("text")
                        .attr("id", "lab1" + h)
                        .attr("x", PlacementXEspece + 395)
                        .attr("y", PlacementYEspece + 148 + 9*h + h*1.5)
                        .attr("opacity", 0) 
                        .text(CouleurETEspeceListe[h][0])
                        .style("font-size", "10px")  
                        .attr('font-family', "AnimalCrossing")    
                        .transition()
                        .duration(1000)
                        .attr("opacity", 1)                             
                }
                for (let v = 17; v < CouleurETEspeceListe.length; v++) {
                        MonEspaceSVG.append("rect")
                        .attr("id", "rectlab2" + v)
                        .attr("x", PlacementXEspece + 440)
                        .attr("y", PlacementYEspece -38 + 9*v + v*1.5)
                        .attr("width", 9)
                        .attr("height", 9)
                        .style('fill',CouleurETEspeceListe[v][1])
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 0.8)
                        
                        MonEspaceSVG.append("text")
                        .attr("id", "lab2" + v)
                        .attr("x",  PlacementXEspece + 455)
                        .attr("y", PlacementYEspece -30 + 9*v + v*1.5)
                        .attr("opacity", 0) 
                        .text(CouleurETEspeceListe[v][0])
                        .style("font-size", "10px")
                        .attr('font-family', "AnimalCrossing")   
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 1)                              
                }
                
        } else if(QuelMoisSommesNous == 3){
            let MaleCompte = SigneGenre.get("Aquarius").get("Male").length
            let FemaleCompte = SigneGenre.get("Aquarius").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x',  milieuX+180 - MaleCompte*1.5)
                    .attr('y', milieuY+40 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX+150 - FemaleCompte *1.5 )
                    .attr('y', milieuY-150 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX+180 + 50+MaleCompte )
                    .attr('y', milieuY+40 +50 )
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX+150 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY-150 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5") 
        } else if(QuelMoisSommesNous == 4){
            let MaleCompte = SigneGenre.get("Pisces").get("Male").length
            let FemaleCompte = SigneGenre.get("Pisces").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x',  milieuX + 110 - MaleCompte*1.5)
                    .attr('y', milieuY + 230 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX + 290 - FemaleCompte *1.5 )
                    .attr('y', milieuY - 140 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX + 110 + 50+MaleCompte )
                    .attr('y', milieuY + 230 +50 )
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX + 290 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY - 140 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")     

        } else if(QuelMoisSommesNous == 5){ 
            let MaleCompte = SigneGenre.get("Aries").get("Male").length
            let FemaleCompte = SigneGenre.get("Aries").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x',  milieuX + 130 - MaleCompte*1.5)
                    .attr('y', milieuY - 220 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX + 300 - FemaleCompte *1.5 )
                    .attr('y', milieuY - 250 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX + 130 + 50+MaleCompte )
                    .attr('y', milieuY - 220 +50 )
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX + 300 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY - 250 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")   
        } else if(QuelMoisSommesNous == 6){ 
            
            let MaleCompte = SigneGenre.get("Taurus").get("Male").length
            let FemaleCompte = SigneGenre.get("Taurus").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x',  milieuX + 65 - MaleCompte*1.5)
                    .attr('y', milieuY + 85 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX - 290 - FemaleCompte *1.5 )
                    .attr('y', milieuY - 300 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX + 65 + 50+MaleCompte )
                    .attr('y', milieuY + 85 )
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX - 290 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY - 300 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        } else if(QuelMoisSommesNous == 7){
            let MaleCompte = SigneGenre.get("Gemini").get("Male").length
            let FemaleCompte = SigneGenre.get("Gemini").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x',  milieuX + 120 - MaleCompte*1.5)
                    .attr('y',  milieuY + 65 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX + 100 - FemaleCompte *1.5 )
                    .attr('y', milieuY - 340 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX + 120 + 50+MaleCompte )
                    .attr('y',  milieuY + 65 +50 )
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX + 100 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY - 340 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5") 

        } else if(QuelMoisSommesNous == 8){ 
            let MaleCompte = SigneGenre.get("Cancer").get("Male").length
            let FemaleCompte = SigneGenre.get("Cancer").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x',  milieuX + 145 - MaleCompte*1.5)
                    .attr('y',  milieuY + 65 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX - 60 - FemaleCompte *1.5 )
                    .attr('y', milieuY - 380 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX + 145 + 50+MaleCompte )
                    .attr('y',  milieuY + 65 +50 )
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX - 60 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY - 380 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        } else if(QuelMoisSommesNous == 9){ 
            let MaleCompte = SigneGenre.get("Leo").get("Male").length
            let FemaleCompte = SigneGenre.get("Leo").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x',  milieuX + 228 - MaleCompte*1.5)
                    .attr('y',  milieuY + 259 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX - 295 - FemaleCompte *1.5 )
                    .attr('y', milieuY - 345 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX + 228 + 50+MaleCompte )
                    .attr('y',  milieuY + 259 +50 )
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX - 295 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY - 345 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        } else if(QuelMoisSommesNous == 10){
            let MaleCompte = SigneGenre.get("Virgo").get("Male").length
            let FemaleCompte = SigneGenre.get("Virgo").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x',  milieuX  + 42 - MaleCompte*1.5)
                    .attr('y',  milieuY + 20 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX + 115 - FemaleCompte *1.5 )
                    .attr('y', milieuY - 270 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX  + 42 + 50+MaleCompte +10 )
                    .attr('y',  milieuY + 20 +50 -5)
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX + 115 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY - 270 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        } else if(QuelMoisSommesNous == 11){ 
            let MaleCompte = SigneGenre.get("Libra").get("Male").length
            let FemaleCompte = SigneGenre.get("Libra").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x',  milieuX  + 32 - MaleCompte*1.5)
                    .attr('y',  milieuY - 85 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX + 166 - FemaleCompte *1.5 )
                    .attr('y', milieuY + 40 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX  + 32 + 50+MaleCompte )
                    .attr('y',  milieuY - 85 +50 )
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX + 166 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY + 40 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        } else if(QuelMoisSommesNous == 12){
            let MaleCompte = SigneGenre.get("Scorpio").get("Male").length
            let FemaleCompte = SigneGenre.get("Scorpio").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 + MaleCompte*3)
                    .attr('width', 50 + MaleCompte*3)
                    .attr('x',  milieuX  + 32 - MaleCompte*1.5)
                    .attr('y',  milieuY - 105 -  MaleCompte*1.5)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 + FemaleCompte*3)
                    .attr('width', 50 + FemaleCompte*3)
                    .attr('x', milieuX + 106 - FemaleCompte *1.5 )
                    .attr('y', milieuY + 40 - FemaleCompte *1.5) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', milieuX  + 32 + 50+MaleCompte )
                    .attr('y',  milieuY - 105 +50 )
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', milieuX + 106 + 50 + FemaleCompte *1.5)
                    .attr('y', milieuY + 40 + 50 )    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5") 
        }                 
    })
}