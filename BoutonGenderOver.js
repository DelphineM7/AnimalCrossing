function BoutonGenderOver(){
        
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
        
//variables utilisées pour les diagrammes en barre
                const SigneGenre = d3.group(donnees, (d) => d.signe, (d) => d.genre)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                const Hobby = d3.group(donnees, d => d.signe, d=> d.genre, d => d.hobbie )
                const chiffreHobbies = [1,2,3,4,5,6,7,8]
                let PlacementXHobby = ecran_width/2 + ecran_width/10 //1200
                let PlacementYHobby = ecran_height/3//350

                //Male
                let MaleHobbies = Hobby.get("Sagittarius").get("Male")
                let MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion", []])             
                MaleHobbiesArray.sort(d3.ascending)
                let MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)
                  
                //Female
                let FemaleHobbies = Hobby.get("Sagittarius").get("Female")
                let FemaleHobbiesArray = Array.from(FemaleHobbies)
                FemaleHobbiesArray.sort(d3.ascending) 
                let FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITES
                const Signe = d3.group(donnees, d => d.signe, d=> d.genre, d => d.personnalite )
                const chiffreSigne = [1,2,3,4,5,6,7,8]
                let PlacementXSigne = ecran_width/2 + ecran_width/10//1200
                let PlacementYSigne = PlacementYHobby + 240///600
                    
                //Male
                let MalePersonnalite = Signe.get("Sagittarius").get("Male")
                let MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                let MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                let FemalePersonnalite = Signe.get("Sagittarius").get("Female")
                let FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Big Sister", []],["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                let FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)

        //variables pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE 
                const Espece = d3.group(donnees, d => d.signe, d=> d.genre, d => d.espece)
                let PlacementXEspece = ecran_width/2 + ecran_width/10 //1200
                let PlacementYEspece = PlacementYSigne + 260  //550

                //Male
                let MaleEspece = Espece.get("Sagittarius").get("Male")

                //Female
                let FemaleEspece = Espece.get("Sagittarius").get("Female")
                                        
                //couleurs associées à une espèce
                var Couleur = [
                        '#FF1493', '#0000FF', '#FFC0CB', '#2A661F', '#BF7C00', 
                        '#20B2AA', '#04D9FF', '#9F0058', '#E5EC17', '#324B76', 
                        '#87CEEB', '#A6A6A6', '#800000', '#FFFF80', '#FFFF00',
                        '#CFEFEF', '#80A779', '#00FF00', '#FF0000', '#DC143C',
                        '#993A6E', '#5C009F', '#9932CC', '#A1009B', '#00FF7F',
                        '#FFA500', '#D36BFF', '#FF69B4', '#E2CAF8', '#FFD280',
                        '#9F9F00', '#500050', '#1E90FF', '#9FB7FF', '#FCABEA'
                    ];
                
                const EEspece = d3.groups(donnees, d => d.espece)
                let EspeceListe = []
                for (let i = 0; i < 35; i++) {
                        EspeceListe.push(EEspece[i].shift())
                }
                CouleurETEspeceListe = d3.zip(EspeceListe,Couleur)
                
                //fond blanc
                let FondBlanc = MonEspaceSVG.append("rect")
                .attr("id", "FondBlancEspece")
                .attr("x", PlacementXEspece-45)
                .attr("y", PlacementYEspece-200)
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
                let yEspece = d3.scaleBand()
                .domain(["Female", "Male"])
                .range([300, 150]) 

                let xEspece= d3.scaleLinear()
                .domain([0,20])
                .range([0, 350])  

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
        if (QuelMoisSommesNous == 1) {
            let MaleCompte = SigneGenre.get("Sagittarius").get("Male").length
            let FemaleCompte = SigneGenre.get("Sagittarius").get("Female").length
           
            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height',(50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x', ((milieuX+85 - MaleCompte*1.5) *addaptation) + addaptationX)
                    .attr('y', ((milieuY+185 -  MaleCompte*1.5) *addaptation) + addaptationY)              

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX+60 - FemaleCompte *1.5 )*addaptation) + addaptationX)
                    .attr('y', ((milieuY-190 - FemaleCompte *1.5) *addaptation) + addaptationY)
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', ((milieuX+90 + 50+MaleCompte)*addaptation) + addaptationX)
                    .attr('y', ((milieuY+190 +50 )*addaptation) + addaptationY)
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX+60 + 50 + FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY-190 + 50 ) *addaptation) + addaptationY)   
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5") 

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Sagittarius").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion", []])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)

                //Female
                FemaleHobbies = Hobby.get("Sagittarius").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies)
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Sagittarius").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Sagittarius").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Big Sister", []],["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Sagittarius").get("Male")

                //Female
                FemaleEspece = Espece.get("Sagittarius").get("Female")                                   
   
        } else if(QuelMoisSommesNous == 2){

        //changement des étoiles en fonction des données Genre
            let MaleCompte = SigneGenre.get("Capricornus").get("Male").length
            let FemaleCompte = SigneGenre.get("Capricornus").get("Female").length
        
            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', (50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x', ((milieuX+90 - MaleCompte*1.5 -90)*addaptation) + addaptationX +50)
                    .attr('y', ((milieuY+190 -  MaleCompte*1.5)  *addaptation) + addaptationY)              

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX-40 - FemaleCompte *1.5 -90 )*addaptation) + addaptationX+45)
                    .attr('y', ((milieuY-190 - FemaleCompte *1.5)*addaptation) + addaptationY-5)  
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', ((milieuX+90 + 50+MaleCompte -90 )*addaptation) + addaptationX+50)
                    .attr('y',  ((milieuY+190 +50 )*addaptation) + addaptationY) 
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX-40 + 50 + FemaleCompte *1.5 -90)*addaptation) + addaptationX+45)
                    .attr('y', ((milieuY-190 + 50 )*addaptation) + addaptationY-5)   
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Capricornus").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion", []])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)
                 
                //Female
                FemaleHobbies = Hobby.get("Capricornus").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies)
                FemaleHobbiesArray.push(["Fitness", []])
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)
       
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Capricornus").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Capricornus").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Capricornus").get("Male")

                //Female
                FemaleEspece = Espece.get("Capricornus").get("Female")

        } else if(QuelMoisSommesNous == 3){
            let MaleCompte = SigneGenre.get("Aquarius").get("Male").length
            let FemaleCompte = SigneGenre.get("Aquarius").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', (50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x', ((milieuX+180 - MaleCompte*1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY+40 -  MaleCompte*1.5)*addaptation) + addaptationY)              

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX+150 - FemaleCompte *1.5 )*addaptation) + addaptationX)
                    .attr('y', ((milieuY-150 - FemaleCompte *1.5)*addaptation) + addaptationY)  
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', ((milieuX+180 + 50+MaleCompte )*addaptation) + addaptationX)
                    .attr('y', ((milieuY+40 +50 )*addaptation) + addaptationY) 
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX+150 + 50 + FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY-150 + 50 )*addaptation) + addaptationY)     
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")
                    
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Aquarius").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion",[]],["Education",[]],["Music",[]])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)

                //Female
                FemaleHobbies = Hobby.get("Aquarius").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies)
                FemaleHobbiesArray.push(["Fitness",[]])  
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)
                
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Aquarius").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []],["Smug", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Aquarius").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Aquarius").get("Male")

                //Female
                FemaleEspece = Espece.get("Aquarius").get("Female")

                //variation de l'axe X et du fondblanc et des labels
                xEspece
                .domain([0,21])
                .range([0, 362]) 

                FondBlanc
                        .attr("x", PlacementXEspece-45)
                        .attr("y", PlacementYEspece-200)
                        .attr("width", 570)
                        .attr("height", 200)
                        .transition()
                        .duration(1000) 
                        .style('fill','white')
                        .style('stroke','#4B4B6E')
                        .style('stroke-width','3')
                        .attr("rx", 8)
                        .attr("ry", 8)
                        .attr("opacity", 0.8)

                for (let i = 0; i < 18; i++) {
                        
                        let variable = d3.select(`#rectlab1${i}`)
                        variable    
                        .attr("x", PlacementXEspece +380)
                        .attr("y", PlacementYEspece +140 + 9*i + i*1.5)
                        .attr("width", 9)
                        .attr("height", 9)
                        .style('fill',CouleurETEspeceListe[i][1])
                        .attr("opacity", 0.8)
                        .transition()
                        .duration(1000)
                        .attr("x", PlacementXEspece +380+20)

                        let variable2 = d3.select(`#lab1${i}`)
                        variable2
                        .attr("x", PlacementXEspece + 395)
                        .attr("y", PlacementYEspece + 148 + 9*i + i*1.5)
                        .attr("opacity", 0) 
                        .text(CouleurETEspeceListe[i][0])
                        .style("font-size", "10px")  
                        .attr('font-family', "AnimalCrossing")    
                        .attr("opacity", 1)
                        .transition()
                        .duration(1000)
                        .attr("x", PlacementXEspece +395+20)     
                }
                for (let i = 17; i < 35; i++) {
                        
                        let variable = d3.select(`#rectlab2${i}`)
                        variable
                        .attr("x", PlacementXEspece + 440)
                        .attr("y", PlacementYEspece -38 + 9*i + i*1.5)
                        .attr("width", 9)
                        .attr("height", 9)
                        .style('fill',CouleurETEspeceListe[i][1])
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 0.8)
                        .attr("x", PlacementXEspece +440+20) 

                        let variable2 = d3.select(`#lab2${i}`)
                        variable2
                        .attr("x",  PlacementXEspece + 455)
                        .attr("y", PlacementYEspece -30 + 9*i + i*1.5)
                        .attr("opacity", 0) 
                        .text(CouleurETEspeceListe[i][0])
                        .style("font-size", "10px")
                        .attr('font-family', "AnimalCrossing")   
                        .attr("opacity", 1)
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 0.8)
                        .attr("x", PlacementXEspece +455+20)    
                }        
        } else if(QuelMoisSommesNous == 4){
            let MaleCompte = SigneGenre.get("Pisces").get("Male").length
            let FemaleCompte = SigneGenre.get("Pisces").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', (50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x', ((milieuX + 110 - MaleCompte*1.5 -70)*addaptation) + addaptationX)
                    .attr('y', ((milieuY + 230 -  MaleCompte*1.5)*addaptation) + addaptationY)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX + 290 - FemaleCompte *1.5 -70)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 140 - FemaleCompte *1.5)*addaptation) + addaptationY) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', ((milieuX + 110 + 50+MaleCompte -70 )*addaptation) + addaptationX)
                    .attr('y', ((milieuY + 230 +50 )*addaptation) + addaptationY)
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX + 290 + 50 + FemaleCompte *1.5 -70)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 140 + 50 )*addaptation) + addaptationY)    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Pisces").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion",[]])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)

                //Female
                FemaleHobbies = Hobby.get("Pisces").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies)
                FemaleHobbiesArray.push(["Fitness",[]])  
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)
                
                // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Pisces").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Pisces").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Cranky", []],["Jock", []],["Lazy", []],["Smug", []],["Big Sister", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)

                // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Pisces").get("Male")

                //Female
                FemaleEspece = Espece.get("Pisces").get("Female")

        } else if(QuelMoisSommesNous == 5){ 
            let MaleCompte = SigneGenre.get("Aries").get("Male").length
            let FemaleCompte = SigneGenre.get("Aries").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', (50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x', ((milieuX + 130 - MaleCompte*1.5 -150)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 220 -  MaleCompte*1.5)*addaptation) + addaptationY)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX + 300 - FemaleCompte *1.5 -150)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 250 - FemaleCompte *1.5)*addaptation) + addaptationY) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', ((milieuX + 130 + 50+MaleCompte -150)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 220 +50 )*addaptation) + addaptationY)
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX + 300 + 50 + FemaleCompte *1.5 -150)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 250 + 50 )*addaptation) + addaptationY)    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")  
                    
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Aries").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion",[]])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)

                //Female
                FemaleHobbies = Hobby.get("Aries").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies) 
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Aries").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Aries").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Aries").get("Male")

                //Female
                FemaleEspece = Espece.get("Aries").get("Female")
                
        } else if(QuelMoisSommesNous == 6){ 
            
            let MaleCompte = SigneGenre.get("Taurus").get("Male").length
            let FemaleCompte = SigneGenre.get("Taurus").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', (50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x', ((milieuX + 65 - MaleCompte*1.5) *addaptation) + addaptationX)
                    .attr('y', ((milieuY + 85 -  MaleCompte*1.5) *addaptation) + addaptationY)            

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX - 290 - FemaleCompte *1.5 )*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 300 - FemaleCompte *1.5)*addaptation) + addaptationY)
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', ((milieuX + 65 + 50+MaleCompte)*addaptation) + addaptationX)
                    .attr('y', ((milieuY + 85 ) *addaptation) + addaptationY)
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX - 290 + 50 + FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 300 + 50 ) *addaptation) + addaptationY)   
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Taurus").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion",[]],["Music",[]])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)

                //Female
                FemaleHobbies = Hobby.get("Taurus").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies) 
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Taurus").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Taurus").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Taurus").get("Male")

                //Female
                FemaleEspece = Espece.get("Taurus").get("Female")         

        } else if(QuelMoisSommesNous == 7){
            let MaleCompte = SigneGenre.get("Gemini").get("Male").length
            let FemaleCompte = SigneGenre.get("Gemini").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', (50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x',  ((milieuX + 120 - MaleCompte*1.5)*addaptation) + addaptationX)
                    .attr('y',  ((milieuY + 65 -  MaleCompte*1.5)*addaptation) + addaptationY)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX + 100 - FemaleCompte *1.5 )*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 340 - FemaleCompte *1.5) *addaptation) + addaptationY)
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', ((milieuX + 120 + 50+MaleCompte)*addaptation) + addaptationX)
                    .attr('y', ((milieuY + 65 +50 )*addaptation) + addaptationY)
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX + 100 + 50 + FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 340 + 50 )*addaptation) + addaptationY)    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Gemini").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion",[]])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)

                //Female
                FemaleHobbies = Hobby.get("Gemini").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies) 
                FemaleHobbiesArray.push(["Fitness",[]])  
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Gemini").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Gemini").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Gemini").get("Male")

                //Female
                FemaleEspece = Espece.get("Gemini").get("Female")    

        } else if(QuelMoisSommesNous == 8){ 
            let MaleCompte = SigneGenre.get("Cancer").get("Male").length
            let FemaleCompte = SigneGenre.get("Cancer").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', (50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x', ((milieuX + 145 - MaleCompte*1.5)*addaptation) + addaptationX)
                    .attr('y',  ((milieuY + 65 -  MaleCompte*1.5)*addaptation) + addaptationY)              

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX - 60 - FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 380 - FemaleCompte *1.5)*addaptation) + addaptationY)  
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', ((milieuX + 145 + 50+MaleCompte)*addaptation) + addaptationX)
                    .attr('y', ((milieuY + 65 +50 )*addaptation) + addaptationY) 
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX - 60 + 50 + FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 380 + 50 )*addaptation) + addaptationY)     
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Cancer").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion",[]])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)

                //Female
                FemaleHobbies = Hobby.get("Cancer").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies)   
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Cancer").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Cancer").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Cancer").get("Male")

                //Female
                FemaleEspece = Espece.get("Cancer").get("Female")    

        } else if(QuelMoisSommesNous == 9){ 
            let MaleCompte = SigneGenre.get("Leo").get("Male").length
            let FemaleCompte = SigneGenre.get("Leo").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', (50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x',  ((milieuX + 228 - MaleCompte*1.5)*addaptation) + addaptationX)
                    .attr('y',  ((milieuY + 259 -  MaleCompte*1.5)*addaptation) + addaptationY)           

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX - 295 - FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 345 - FemaleCompte *1.5)*addaptation) + addaptationY) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x',  ((milieuX + 228 + 50+MaleCompte )*addaptation) + addaptationX)
                    .attr('y',  ((milieuY + 259 +50 )*addaptation) + addaptationY)
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX - 295 + 50 + FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 345 + 50 )*addaptation) + addaptationY)    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Leo").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion",[]])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)

                //Female
                FemaleHobbies = Hobby.get("Leo").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies) 
                FemaleHobbiesArray.push(["Fitness",[]],["Nature",[]])    
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Leo").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Leo").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Big Sister", []],["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Leo").get("Male")

                //Female
                FemaleEspece = Espece.get("Leo").get("Female") 
                
                //variation de l'axe X et du fondblanc et des labels
                xEspece
                .domain([0,27])
                .range([0, 460]) 

                FondBlanc
                        .attr("x", PlacementXEspece-25)
                        .attr("y", PlacementYEspece-200)
                        .attr("width", 650)
                        .attr("height", 200)
                        .transition()
                        .duration(1000) 
                        .style('fill','white')
                        .style('stroke','#4B4B6E')
                        .style('stroke-width','3')
                        .attr("rx", 8)
                        .attr("ry", 8)
                        .attr("opacity", 0.8)

                for (let i = 0; i < 18; i++) {
                        
                        let variable = d3.select(`#rectlab1${i}`)
                        variable    
                        .attr("x", PlacementXEspece +380)
                        .attr("y", PlacementYEspece +140 + 9*i + i*1.5)
                        .attr("width", 9)
                        .attr("height", 9)
                        .style('fill',CouleurETEspeceListe[i][1])
                        .attr("opacity", 0.8)
                        .transition()
                        .duration(1000)
                        .attr("x", PlacementXEspece +380+100)

                        let variable2 = d3.select(`#lab1${i}`)
                        variable2
                        .attr("x", PlacementXEspece + 395)
                        .attr("y", PlacementYEspece + 148 + 9*i + i*1.5)
                        .attr("opacity", 0) 
                        .text(CouleurETEspeceListe[i][0])
                        .style("font-size", "10px")  
                        .attr('font-family', "AnimalCrossing")    
                        .attr("opacity", 1)
                        .transition()
                        .duration(1000)
                        .attr("x", PlacementXEspece +395+100)     
                }
                for (let i = 17; i < 35; i++) {
                        
                        let variable = d3.select(`#rectlab2${i}`)
                        variable
                        .attr("x", PlacementXEspece + 440)
                        .attr("y", PlacementYEspece -38 + 9*i + i*1.5)
                        .attr("width", 9)
                        .attr("height", 9)
                        .style('fill',CouleurETEspeceListe[i][1])
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 0.8)
                        .attr("x", PlacementXEspece +440+100) 

                        let variable2 = d3.select(`#lab2${i}`)
                        variable2
                        .attr("x",  PlacementXEspece + 455)
                        .attr("y", PlacementYEspece -30 + 9*i + i*1.5)
                        .attr("opacity", 0) 
                        .text(CouleurETEspeceListe[i][0])
                        .style("font-size", "10px")
                        .attr('font-family', "AnimalCrossing")   
                        .attr("opacity", 1)
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 0.8)
                        .attr("x", PlacementXEspece +455+100)    

                }
        } else if(QuelMoisSommesNous == 10){
            let MaleCompte = SigneGenre.get("Virgo").get("Male").length
            let FemaleCompte = SigneGenre.get("Virgo").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', (50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x', ((milieuX  + 42 - MaleCompte*1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY + 20 -  MaleCompte*1.5)*addaptation) + addaptationY)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX + 115 - FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 270 - FemaleCompte *1.5)*addaptation) + addaptationY) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', ((milieuX  + 42 + 50+MaleCompte +10)*addaptation) + addaptationX)
                    .attr('y', ((milieuY + 20 +50 -5)*addaptation) + addaptationY)
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX + 115 + 50 + FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 270 + 50 )*addaptation) + addaptationY)    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Virgo").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion",[]])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)

                //Female
                FemaleHobbies = Hobby.get("Virgo").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies)   
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Virgo").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Virgo").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Virgo").get("Male")

                //Female
                FemaleEspece = Espece.get("Virgo").get("Female")    

        } else if(QuelMoisSommesNous == 11){ 
            let MaleCompte = SigneGenre.get("Libra").get("Male").length
            let FemaleCompte = SigneGenre.get("Libra").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', (50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x', ((milieuX  + 32 - MaleCompte*1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 85 -  MaleCompte*1.5)*addaptation) + addaptationY)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX + 166 - FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY + 40 - FemaleCompte *1.5)*addaptation) + addaptationY) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', ((milieuX  + 32 + 50+MaleCompte)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 85 +50 )*addaptation) + addaptationY)
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX + 166 + 50 + FemaleCompte *1.5)*addaptation) + addaptationX)
                    .attr('y', ((milieuY + 40 + 50 ) *addaptation) + addaptationY)   
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Libra").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion",[]])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)

                //Female
                FemaleHobbies = Hobby.get("Libra").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies)
                FemaleHobbiesArray.push(["Music",[]])    
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Libra").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Libra").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Cranky", []],["Jock", []],["Lazy", []],["Smug", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Libra").get("Male")

                //Female
                FemaleEspece = Espece.get("Libra").get("Female")
                
                //variation de l'axe X et du fondblanc et des labels
                xEspece
                .domain([0,23])
                .range([0, 400]) 

                FondBlanc
                        .attr("x", PlacementXEspece-45)
                        .attr("y", PlacementYEspece-200)
                        .attr("width", 600)
                        .attr("height", 200)
                        .transition()
                        .duration(1000) 
                        .style('fill','white')
                        .style('stroke','#4B4B6E')
                        .style('stroke-width','3')
                        .attr("rx", 8)
                        .attr("ry", 8)
                        .attr("opacity", 0.8)

                for (let i = 0; i < 18; i++) {
                        
                        let variable = d3.select(`#rectlab1${i}`)
                        variable    
                        .attr("x", PlacementXEspece +380)
                        .attr("y", PlacementYEspece +140 + 9*i + i*1.5)
                        .attr("width", 9)
                        .attr("height", 9)
                        .style('fill',CouleurETEspeceListe[i][1])
                        .attr("opacity", 0.8)
                        .transition()
                        .duration(1000)
                        .attr("x", PlacementXEspece +380+50)

                        let variable2 = d3.select(`#lab1${i}`)
                        variable2
                        .attr("x", PlacementXEspece + 395)
                        .attr("y", PlacementYEspece + 148 + 9*i + i*1.5)
                        .attr("opacity", 0) 
                        .text(CouleurETEspeceListe[i][0])
                        .style("font-size", "10px")  
                        .attr('font-family', "AnimalCrossing")    
                        .attr("opacity", 1)
                        .transition()
                        .duration(1000)
                        .attr("x", PlacementXEspece +395+50)     
                }
                for (let i = 17; i < 35; i++) {
                        
                        let variable = d3.select(`#rectlab2${i}`)
                        variable
                        .attr("x", PlacementXEspece + 440)
                        .attr("y", PlacementYEspece -38 + 9*i + i*1.5)
                        .attr("width", 9)
                        .attr("height", 9)
                        .style('fill',CouleurETEspeceListe[i][1])
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 0.8)
                        .attr("x", PlacementXEspece +440+50) 

                        let variable2 = d3.select(`#lab2${i}`)
                        variable2
                        .attr("x",  PlacementXEspece + 455)
                        .attr("y", PlacementYEspece -30 + 9*i + i*1.5)
                        .attr("opacity", 0) 
                        .text(CouleurETEspeceListe[i][0])
                        .style("font-size", "10px")
                        .attr('font-family', "AnimalCrossing")   
                        .attr("opacity", 1)
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 0.8)
                        .attr("x", PlacementXEspece +455+50)    
                }
        } else if(QuelMoisSommesNous == 12){
            let MaleCompte = SigneGenre.get("Scorpio").get("Male").length
            let FemaleCompte = SigneGenre.get("Scorpio").get("Female").length

            etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', (50 + MaleCompte*3)*addaptation)
                    .attr('width', (50 + MaleCompte*3)*addaptation)
                    .attr('x', ((milieuX  + 32 - MaleCompte*1.5-200)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 105 -  MaleCompte*1.5)*addaptation) + addaptationY)             

            etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', (50 + FemaleCompte*3)*addaptation)
                    .attr('width', (50 + FemaleCompte*3)*addaptation)
                    .attr('x', ((milieuX + 106 - FemaleCompte *1.5 -200)*addaptation) + addaptationX)
                    .attr('y', ((milieuY + 40 - FemaleCompte *1.5)*addaptation) + addaptationY) 
        
            GenderTexteMale
                    .transition()
                    .duration(0)       
                    .attr('x', ((milieuX  + 32 + 50+MaleCompte-200)*addaptation) + addaptationX)
                    .attr('y', ((milieuY - 105 +50 )*addaptation) + addaptationY)
                    .transition()
                    .duration(1000) 
                    .attr('fill', "white")
                    .attr('opacity', "0.5")
                    .attr('font-family', "AnimalCrossing")
                    .text(MaleCompte + " Males") 
            
            GenderTexteFemale
                    .transition()
                    .duration(0)
                    .attr('x', ((milieuX + 106 + 50 + FemaleCompte *1.5 -200)*addaptation) + addaptationX)
                    .attr('y', ((milieuY + 40 + 50 )*addaptation) + addaptationY)    
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .text(FemaleCompte + " Females")
                    .transition() 
                    .duration(1000)
                    .attr('opacity', "0.5")

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - HOBBY
                //Male
                MaleHobbies = Hobby.get("Scorpio").get("Male")
                MaleHobbiesArray = Array.from(MaleHobbies)
                MaleHobbiesArray.push(["Fashion",[]])             
                MaleHobbiesArray.sort(d3.ascending)
                MaleHobbiesArrayEtChiffre = d3.zip(MaleHobbiesArray,chiffreHobbies)

                //Female
                FemaleHobbies = Hobby.get("Scorpio").get("Female")
                FemaleHobbiesArray = Array.from(FemaleHobbies)
                FemaleHobbiesArray.push(["Play",[]])    
                FemaleHobbiesArray.sort(d3.ascending) 
                FemaleHobbiesArrayEtChiffre = d3.zip(FemaleHobbiesArray,chiffreHobbies)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE   
                //Male
                MalePersonnalite = Signe.get("Scorpio").get("Male")
                MalePersonnaliteArray = Array.from(MalePersonnalite) 
                MalePersonnaliteArray.push(["Big Sister", []],["Peppy", []],["Normal", []],["Snooty", []])
                MalePersonnaliteArray.sort(d3.ascending)
                MalePersonnaliteArrayEtChiffre = d3.zip(MalePersonnaliteArray,chiffreSigne)

                //Female
                FemalePersonnalite = Signe.get("Scorpio").get("Female")
                FemalePersonnaliteArray = Array.from(FemalePersonnalite) 
                FemalePersonnaliteArray.push(["Cranky", []],["Jock", []],["Lazy", []],["Smug", []],["Big Sister", []])
                FemalePersonnaliteArray.sort(d3.ascending) 
                FemalePersonnaliteArrayEtChiffre = d3.zip(FemalePersonnaliteArray,chiffreSigne)
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
                //Male
                MaleEspece = Espece.get("Scorpio").get("Male")

                //Female
                FemaleEspece = Espece.get("Scorpio").get("Female")  

        }  
        // apparition des diagrammes en barre
        // Diagramme en barre selon :  SIGNE - SEXE - HOBBY
       
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
                  .data(FemaleHobbiesArrayEtChiffre)
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
                 .data(MaleHobbiesArrayEtChiffre)
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
                
        // Diagramme en barre selon :  SIGNE - SEXE - PERSONNALITE     
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
                 
                 //les barres 
                 MonEspaceSVG.selectAll("rect")
                 .exit()
                 .data(FemalePersonnaliteArrayEtChiffre)
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
                 .data(MalePersonnaliteArrayEtChiffre)
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
                //variables nécessaire à l'apparition 
                        //Male
                        let MaleEspeceArray = Array.from(MaleEspece)
                        MaleEspeceArray.sort(d3.ascending)

                        //Female
                        
                        let FemaleEspecesArray = Array.from(FemaleEspece)
                        FemaleEspecesArray.sort(d3.ascending)  

                //les axes 
                MonEspaceSVG.append("g")
                .attr("id", "AxeYEspece")
                .attr("transform", `translate(${PlacementXEspece},${PlacementYEspece-325})`)
                .call(d3.axisLeft(yEspece))
                .attr('font-family', "AnimalCrossing")
                .attr("opacity", 0) 
                .transition()
                  .duration(1000) 
                  .attr("opacity",1)     

                MonEspaceSVG.append("g")
                .attr("id", "AxeXEspece")
                .attr("transform", `translate(${PlacementXEspece},${PlacementYEspece-25})`)
                .call(d3.axisBottom(xEspece))
                .attr('font-family', "AnimalCrossing") 
                .attr("opacity", 0) 
                .transition()
                  .duration(1000) 
                  .attr("opacity",1)   
                
                // Les barres 
                let AvanceFemale = 0
                for (let i = 0; i < FemaleEspecesArray.length; i++) {
                        MonEspaceSVG.append("rect")
                        .attr("id", "rectfl" + i)
                        .attr("x", PlacementXEspece + AvanceFemale  + 0.5*i)
                        .attr("y", PlacementYEspece-80)
                        .attr("width", FemaleEspecesArray[i][1].length*17)
                        .attr("height", 30)
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 0.8)

                        AvanceFemale += FemaleEspecesArray[i][1].length*17                        
                        for (let j = 0; j < CouleurETEspeceListe.length; j++) {
                                if (FemaleEspecesArray[i][0] == CouleurETEspeceListe[j][0]) {
                                let rectanglefe = document.getElementById(`rectfl${i}`) 
                                rectanglefe.style = `fill : ${CouleurETEspeceListe[j][1]}`;  
                        }}
                        }
                let AvanceMale = 0
                for (let a = 0; a < MaleEspeceArray.length; a++) {
                        MonEspaceSVG.append("rect")
                        .attr("id", "rect" + a)
                        .attr("x", PlacementXEspece + AvanceMale  + 0.5*a)
                        .attr("y", PlacementYEspece -155)
                        .attr("width", MaleEspeceArray[a][1].length*17)
                        .attr("height", 30)
                        .transition()
                        .duration(1000) 
                        .attr("opacity", 0.8)
                        
                        AvanceMale += MaleEspeceArray[a][1].length*17 
                        for (let c = 0; c < CouleurETEspeceListe.length; c++) {
                                if (MaleEspeceArray[a][0] == CouleurETEspeceListe[c][0]) {
                                let rectangle = document.getElementById(`rect${a}`) 
                                rectangle.style = `fill : ${CouleurETEspeceListe[c][1]}`;                             
                        }}
                } 
    })
}