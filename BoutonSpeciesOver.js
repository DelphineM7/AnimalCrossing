function BoutonSpeciesOver(){
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
    //variables utilisées pour les diagrammes circulaire
        const EspeceHobby = d3.group(donnees, d => d.signe, d=> d.hobbie, d => d.espece)
        const EspecePersonnalite = d3.group(donnees, d => d.signe, d=> d.personnalite, d => d.espece)
        const EEspece = d3.groups(donnees, d => d.espece)
        let EspeceListe = []
            for (let i = 0; i < EEspece.length; i++) {
                EspeceListe.push(EEspece[i].shift())
            }
        Couleur = [ '#E74C3C', '#3498DB', '#9B59B6', '#2980B9', '#16A085',
            '#8E44AD', '#D35400', '#C0392B', '#FF00FF', '#D2B4DE',
            '#E67E22', '#2C3E50', '#FF5733', '#D98880', '#FFC300',
            '#AED6F1', '#C39BD3', '#F1948A', '#CB4335', '#FAD02E',
            '#AF7AC5', '#FF1493', '#FF69B4', '#DFFF00', '#FF4500',
            '#8A2BE2', '#FF6347', '#B22222', '#FFA07A', '#F5B041',
            '#FFD700', '#20B2AA', '#FF1493', '#FFC0CB']

        let ecran_width = window.innerWidth;
        let ecran_height = window.innerHeight;
        let milieuX = ecran_width/2 -275
        let milieuY = ecran_height/2
        let posXDiag1 = milieuX + 400
        let posXDiag2 = milieuX + 650
        let posXDiag3 = milieuX + 900
        let posXDiag4 = milieuX + 1150

        let posYDiag1 = milieuY - 260
        let posYDiag1_2 = milieuY - 245

        let posYDiag2 = milieuY - 10
        let posYDiag2_2 = milieuY +5

        let posYDiag3 = milieuY + 240
        let posYDiag3_2 = milieuY + 225

        let posYDiag4 = milieuY
        let posYDiag4_2 = milieuY - 200

        const color = d3.scaleOrdinal()
            .domain(EspeceListe)
            .range(Couleur);
        const arcGenerator = d3.arc()
            .outerRadius(95)
            .innerRadius(50)
        const pie = d3.pie()
            .value(d => d[1].length);
            
        // variable pour Diagramme circulaire selon :  SIGNE - EDUCATION - ESPECE
            let SignEspeceEducation = EspeceHobby.get("Capricornus").get("Education")

        // variable pour Diagramme circulaire selon :  SIGNE - FASHION - ESPECE
            let SignEspeceFashion = EspeceHobby.get("Capricornus").get("Fashion")

        // variable pour Diagramme circulaire selon :  SIGNE - FITNESS - ESPECE
            let SignEspeceFitness = EspeceHobby.get("Capricornus").get("Fitness")

        // variable pour Diagramme circulaire selon :  SIGNE - MUSIC - ESPECE
            let SignEspeceMusic = EspeceHobby.get("Capricornus").get("Music")

        // variable pour Diagramme circulaire selon :  SIGNE - NATURE - ESPECE
            let SignEspeceNature = EspeceHobby.get("Capricornus").get("Nature")

        // variable pour Diagramme circulaire selon :  SIGNE - PLAY - ESPECE
            let SignEspecePlay = EspeceHobby.get("Capricornus").get("Play")
        
        // variable pour Diagramme circulaire selon :  SIGNE - BIG SISTER - ESPECE
            let SignEspeceBigsister = EspecePersonnalite.get("Capricornus").get("Big Sister")

        // variable pour Diagramme circulaire selon :  SIGNE - CRANKY - ESPECE
            let SignEspeceCranky = EspecePersonnalite.get("Capricornus").get("Cranky")
        
        // variable pour Diagramme circulaire selon :  SIGNE - JOCK - ESPECE
            let SignEspeceJock = EspecePersonnalite.get("Capricornus").get("Jock")

        // variable pour Diagramme circulaire selon :  SIGNE - LAZY - ESPECE
            let SignEspeceLazy = EspecePersonnalite.get("Capricornus").get("Lazy")

        // variable pour Diagramme circulaire selon :  SIGNE - NORMAL - ESPECE
            let SignEspeceNormal = EspecePersonnalite.get("Capricornus").get("Normal")  

        // variable pour Diagramme circulaire selon :  SIGNE -  PEPY - ESPECE
            let SignEspecePepy = EspecePersonnalite.get("Capricornus").get("Peppy")
          
        // variable pour Diagramme circulaire selon :  SIGNE -  SMUG - ESPECE
            let SignEspeceSmug = EspecePersonnalite.get("Capricornus").get("Smug")     
            
        // variable pour Diagramme circulaire selon :  SIGNE -  SNOOTY - ESPECE
            let SignEspeceSnooty = EspecePersonnalite.get("Capricornus").get("Snooty") 

        if (QuelMoisSommesNous == 1) {
        } else if(QuelMoisSommesNous == 2){
        } else if(QuelMoisSommesNous == 3){     
        } else if(QuelMoisSommesNous == 4){
        } else if(QuelMoisSommesNous == 5){         
        } else if(QuelMoisSommesNous == 6){ 
        } else if(QuelMoisSommesNous == 7){
        } else if(QuelMoisSommesNous == 8){ 
        } else if(QuelMoisSommesNous == 9){ 
        } else if(QuelMoisSommesNous == 10){
        } else if(QuelMoisSommesNous == 11){ 
        } else if(QuelMoisSommesNous == 12){
        } 
        
    // apparition des diagrammes circulaires
    const TitreHobbies = MonEspaceSVG.append('text')
        .text("Hobbies") 
        .attr("id", `TitreHobbies`)
        .attr('x', milieuX +470)
        .attr('y', 100)
        .attr('fill', "white")
        .attr('opacity', "0")
        .attr('font-size', "30")
        .attr('font-family', "AnimalCrossing")
        .attr("opacity", 0)
        .transition()
            .duration(1050) 
            .attr("opacity", 0.5)
    
    const TitrePersonnalities = MonEspaceSVG.append('text')
        .text("Personalities") 
        .attr("id", `TitrePersonnalities`)
        .attr('x', milieuX +870)
        .attr('y', 100)
        .attr('fill', "white")
        .attr('opacity', "0")
        .attr('font-size', "30")
        .attr('font-family', "AnimalCrossing")
        .attr("opacity", 0)
        .transition()
            .duration(1050) 
            .attr("opacity", 0.5)

        // Diagramme circulaire selon :  SIGNE - EDUCATION - ESPECE
        const TitreEducation = MonEspaceSVG.append('text')
        .text("Education") 
        .attr("id", `TitrePersonnalities`)
        .attr('x', posXDiag1-50)
        .attr('y', posYDiag1-110)
        .attr('fill', "white")
        .attr('opacity', "0")
        .attr('font-size', "25")
        .attr('font-family', "AnimalCrossing")
        .attr("opacity", 0)
        .transition()
            .duration(1050) 
            .attr("opacity", 0.5)   

            let SignEspeceEducationArray = Array.from(SignEspeceEducation)
            SignEspeceEducationArray.sort(d3.ascending)
            let pieDataEducation = pie(SignEspeceEducationArray) 
            let EducationSignCompte = 0

            for (let i = 0; i < pieDataEducation.length; i++) {
                    EducationSignCompte += pieDataEducation[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataEducation)
                    .enter()
                    .append("path")
                    .attr("id", d => `EducationFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("opacity", 0)
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform",`translate(${posXDiag1},${posYDiag1})`)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspeceEducation = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataEducation)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `EducationFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(${posXDiag1},${posYDiag1}) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsCompteEducation = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataEducation)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + EducationSignCompte) 
                    .attr("id", d => `EducationFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(${posXDiag1},${posYDiag1_2}) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

        // Diagramme circulaire selon :  SIGNE - FASHION - ESPECE
            const TitreFashion = MonEspaceSVG.append('text')
            .text("Fashion") 
            .attr("id", `TitreFashion`)
            .attr('x', posXDiag1-40)
            .attr('y', posYDiag2-110)
            .attr('fill', "white")
            .attr('opacity', "0")
            .attr('font-size', "25")
            .attr('font-family', "AnimalCrossing")
            .attr("opacity", 0)
            .transition()
                .duration(1050) 
                .attr("opacity", 0.5)   

            let SignEspeceFashionArray = Array.from(SignEspeceFashion)
            SignEspeceFashionArray.sort(d3.ascending)
            let pieDataFashion = pie(SignEspeceFashionArray)  
            let FashionSignCompte = 0

            for (let i = 0; i < pieDataFashion.length; i++) {
                    FashionSignCompte += pieDataFashion[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataFashion)
                    .enter()
                    .append("path")
                    .attr("id", d => `FashionFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", `translate(${posXDiag1},${posYDiag2})`)
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspeceFashion = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataFashion)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `FashionFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(${posXDiag1},${posYDiag2}) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8) 

                const labelsCompteFasion = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataFashion)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + FashionSignCompte) 
                    .attr("id", d => `FashionFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(${posXDiag1},${posYDiag2_2}) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)   

        //Diagramme circulaire selon :  SIGNE - FITNESS - ESPECE
            const TitreFitness = MonEspaceSVG.append('text')
            .text("Fitness") 
            .attr("id", `TitreFitness`)
            .attr('x', posXDiag1-40)
            .attr('y', posYDiag3-110)
            .attr('fill', "white")
            .attr('opacity', "0")
            .attr('font-size', "25")
            .attr('font-family', "AnimalCrossing")
            .attr("opacity", 0)
            .transition()
                .duration(1050) 
                .attr("opacity", 0.5)   

            let SignEspeceFitnessArray = Array.from(SignEspeceFitness)
            SignEspeceFitnessArray.sort(d3.ascending)
            let pieDataFitness = pie(SignEspeceFitnessArray)  
            let FitnessSignCompte = 0

            for (let i = 0; i < pieDataFitness.length; i++) {
                FitnessSignCompte += pieDataFitness[i].value 
            }

            MonEspaceSVG.selectAll("arc")
                .data(pieDataFitness)
                .enter()
                .append("path")
                .attr("id", d => `FitnessFromage${d.index}`)
                .attr("d", arcGenerator)
                .attr("fill", (d, i) => color(i))
                .attr("stroke", "white")
                .attr("stroke-width", 1)
                .attr("transform", `translate(${posXDiag1},${posYDiag3})`)
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.8)

            const labelsEspeceFitness = MonEspaceSVG.selectAll(".label-espece")
                .data(pieDataFitness)
                .enter()
                .append("text")
                .text((d) =>  d.data[0]) 
                .attr("id", d => `FitnessFromageText1${d.index}`)
                .attr("transform", (d) => `translate(${posXDiag1},${posYDiag3}) translate(${arcGenerator.centroid(d)})`)
                .attr('fill', "white")
                .attr('font-family', "AnimalCrossing")
                .style("text-anchor", "middle") 
                .style("font-size", "10px")
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.8) 

            const labelsCompteFitness = MonEspaceSVG.selectAll(".label-Compte")
                .data(pieDataFitness)
                .enter()
                .append("text")
                .text((d) =>  d.value + "/" + FitnessSignCompte) 
                .attr("id", d => `FitnessFromageText2${d.index}`)
                .attr("transform", (d) => `translate(${posXDiag1},${posYDiag3_2}) translate(${arcGenerator.centroid(d)})`)
                .attr('fill', "white")
                .attr('font-family', "AnimalCrossing")
                .style("text-anchor", "middle") 
                .style("font-size", "10px")
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.8)  

        //Diagramme circulaire selon :  SIGNE - MUSIC - ESPECE
            let SignEspeceMusicArray = Array.from(SignEspeceMusic)
            SignEspeceMusicArray.sort(d3.ascending)
            let pieDataMusic = pie(SignEspeceMusicArray)  
            let MusicSignCompte = 0

            for (let i = 0; i < pieDataMusic.length; i++) {
            MusicSignCompte += pieDataMusic[i].value 
            }

            MonEspaceSVG.selectAll("arc")
                .data(pieDataMusic)
                .enter()
                .append("path")
                .attr("id", d => `MusicFromage${d.index}`)
                .attr("d", arcGenerator)
                .attr("fill", (d, i) => color(i))
                .attr("stroke", "white")
                .attr("stroke-width", 1)
                .attr("transform", "translate(1250,1025)")
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.8)

            const labelsEspeceMusic = MonEspaceSVG.selectAll(".label-espece")
                .data(pieDataMusic)
                .enter()
                .append("text")
                .text((d) =>  d.data[0]) 
                .attr("id", d => `MusicFromageText1${d.index}`)
                .attr("transform", (d) => `translate(1250,1025) translate(${arcGenerator.centroid(d)})`)
                .attr('fill', "white")
                .attr('font-family', "AnimalCrossing")
                .style("text-anchor", "middle") 
                .style("font-size", "10px")
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.8) 

            const labelsCompteMusic = MonEspaceSVG.selectAll(".label-Compte")
                .data(pieDataMusic)
                .enter()
                .append("text")
                .text((d) =>  d.value + "/" + MusicSignCompte) 
                .attr("id", d => `MusicFromageText2${d.index}`)
                .attr("transform", (d) => `translate(1250,1040) translate(${arcGenerator.centroid(d)})`)
                .attr('fill', "white")
                .attr('font-family', "AnimalCrossing")
                .style("text-anchor", "middle") 
                .style("font-size", "10px")
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.8)  

        //Diagramme circulaire selon :  SIGNE - NATURE - ESPECE
            let SignEspeceNatureArray = Array.from(SignEspeceNature)
            SignEspeceNatureArray.sort(d3.ascending)
            let pieDataNature = pie(SignEspeceNatureArray)  
            let NatureSignCompte = 0

            for (let i = 0; i < pieDataNature.length; i++) {
                NatureSignCompte += pieDataNature[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataNature)
                    .enter()
                    .append("path")
                    .attr("id", d => `NatureFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", "translate(1250,750)")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspeceNature = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataNature)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `NatureFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(1250,750) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8) 

                const labelsCompteNature = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataNature)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + NatureSignCompte) 
                    .attr("id", d => `NatureFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(1250,765) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)  

        //Diagramme circulaire selon :  SIGNE - PLAY - ESPECE
            let SignEspecePlayArray = Array.from(SignEspecePlay)
            SignEspecePlayArray.sort(d3.ascending)
            let pieDataPlay = pie(SignEspecePlayArray)  
            let PlaySignCompte = 0

            for (let i = 0; i < pieDataPlay.length; i++) {
                PlaySignCompte += pieDataPlay[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataPlay)
                    .enter()
                    .append("path")
                    .attr("id", d => `PlayFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", "translate(1250,900)")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspecePlay = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataPlay)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `PlayFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(1250,900) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8) 

                const labelsComptePlay = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataPlay)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + PlaySignCompte) 
                    .attr("id", d => `PlayFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(1250,915) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

        //Diagramme circulaire selon :  SIGNE - BIG SISTER - ESPECE
            let SignEspeceBigSisterArray = Array.from(SignEspeceBigsister)
            SignEspeceBigSisterArray.sort(d3.ascending)
            let pieDataBigSister = pie(SignEspeceBigSisterArray)  
            let BigSisterSignCompte = 0

            for (let i = 0; i < pieDataBigSister.length; i++) {
                BigSisterSignCompte += pieDataBigSister[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataBigSister)
                    .enter()
                    .append("path")
                    .attr("id", d => `BigSisterFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", "translate(1500, 300)")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspeceBigSister = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataBigSister)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `BigSisterFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(1500, 300) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8) 

                const labelsCompteBigSister = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataBigSister)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + BigSisterSignCompte) 
                    .attr("id", d => `BigSisterFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(1500,315) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)
                
        //Diagramme circulaire selon :  SIGNE - CRANKY - ESPECE
            let SignEspeceCrankyArray = Array.from(SignEspeceCranky)
            SignEspeceCrankyArray.sort(d3.ascending)
            let pieDataCranky = pie(SignEspeceCrankyArray)  
            let CrankySignCompte = 0

            for (let i = 0; i < pieDataCranky.length; i++) {
                CrankySignCompte += pieDataCranky[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataCranky)
                    .enter()
                    .append("path")
                    .attr("id", d => `CrankyFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", "translate(1500,375)")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspeceCranky = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataCranky)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `CrankyFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(1500,375) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8) 

                const labelsCompteBigCranky = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataCranky)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + CrankySignCompte) 
                    .attr("id", d => `CrankyFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(1500,390) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

        //Diagramme circulaire selon :  SIGNE - JOCK - ESPECE
            let SignEspeceJockArray = Array.from(SignEspeceJock)
            SignEspeceJockArray.sort(d3.ascending)
            let pieDataJock = pie(SignEspeceJockArray)  
            let JockSignCompte = 0

            for (let i = 0; i < pieDataJock.length; i++) {
                CrankySignCompte += pieDataJock[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataJock)
                    .enter()
                    .append("path")
                    .attr("id", d => `JockFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", "translate(1500,525)")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspeceJock = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataJock)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `JockFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(1500,525) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8) 

                const labelsCompteJock = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataJock)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + JockSignCompte) 
                    .attr("id", d => `JockFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(1500,540) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

        //Diagramme circulaire selon :  SIGNE - LAZY - ESPECE
            let SignEspeceLazyArray = Array.from(SignEspeceLazy)
            SignEspeceLazyArray.sort(d3.ascending)
            let pieDataLazy = pie(SignEspeceLazyArray)  
            let LazySignCompte = 0

            for (let i = 0; i < pieDataLazy.length; i++) {
                LazySignCompte += pieDataLazy[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataLazy)
                    .enter()
                    .append("path")
                    .attr("id", d => `LazyFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", "translate(1500,675)")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspeceLazy = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataLazy)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `LazyFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(1500,675) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8) 

                const labelsCompteLazy = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataLazy)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + LazySignCompte) 
                    .attr("id", d => `LazyFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(1500,690) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

        //Diagramme circulaire selon :  SIGNE - NORMAL - ESPECE
            let SignEspeceNormalArray = Array.from(SignEspeceNormal)
            SignEspeceNormalArray.sort(d3.ascending)
            let pieDataNormal = pie(SignEspeceNormalArray)  
            let NormalSignCompte = 0

            for (let i = 0; i < pieDataNormal.length; i++) {
                NormalSignCompte += pieDataNormal[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataNormal)
                    .enter()
                    .append("path")
                    .attr("id", d => `NormalFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", "translate(1700, 300)")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspeceNormal = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataNormal)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `NormalFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(1700, 300) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8) 

                const labelsCompteNormal = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataNormal)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + NormalSignCompte) 
                    .attr("id", d => `NormalFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(1700,315) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

        //Diagramme circulaire selon :  SIGNE - PEPPY - ESPECE        
            let SignEspecePepyArray = Array.from(SignEspecePepy)
            SignEspecePepyArray.sort(d3.ascending)
            let pieDataPeppy = pie(SignEspecePepyArray)  
            let PeppySignCompte = 0

            for (let i = 0; i < pieDataPeppy.length; i++) {
                PeppySignCompte += pieDataPeppy[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataPeppy)
                    .enter()
                    .append("path")
                    .attr("id", d => `PepyFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", "translate(1700,375)")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspecePepy = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataPeppy)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `PepyFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(1700,375) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8) 

                const labelsComptePepy = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataPeppy)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + PeppySignCompte) 
                    .attr("id", d => `PepyFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(1700,390) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

        //Diagramme circulaire selon :  SIGNE - SMUG - ESPECE    
            let SignEspeceSmugArray = Array.from(SignEspeceSmug)
            SignEspeceSmugArray.sort(d3.ascending)
            let pieDataSmug = pie(SignEspeceSmugArray)  
            let SmugSignCompte = 0

            for (let i = 0; i < pieDataSmug.length; i++) {
                SmugSignCompte += pieDataSmug[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataSmug)
                    .enter()
                    .append("path")
                    .attr("id", d => `SmugFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", "translate(1700,525)")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspeceSmug = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataSmug)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `SmugFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(1700,525) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8) 

                const labelsCompteSmug = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataSmug)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + SmugSignCompte) 
                    .attr("id", d => `SmugFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(1700,540) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

        //Diagramme circulaire selon :  SIGNE - SNOOTY - ESPECE    
            let SignEspeceSnootyArray = Array.from(SignEspeceSnooty)
            SignEspeceSnootyArray.sort(d3.ascending)
            let pieDataSnooty = pie(SignEspeceSnootyArray)  
            let SnnotySignCompte = 0

            for (let i = 0; i < pieDataSmug.length; i++) {
                SnnotySignCompte += pieDataSmug[i].value 
                }

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataSnooty)
                    .enter()
                    .append("path")
                    .attr("id", d => `SnootyFromage${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", (d, i) => color(i))
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", "translate(1700,675)")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                const labelsEspeceSnooty = MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataSnooty)
                    .enter()
                    .append("text")
                    .text((d) =>  d.data[0]) 
                    .attr("id", d => `SnootyFromageText1${d.index}`)
                    .attr("transform", (d) => `translate(1700,675) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8) 

                const labelsCompteSnooty = MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataSnooty)
                    .enter()
                    .append("text")
                    .text((d) =>  d.value + "/" + SnnotySignCompte) 
                    .attr("id", d => `SnootyFromageText2${d.index}`)
                    .attr("transform", (d) => `translate(1700,690) translate(${arcGenerator.centroid(d)})`)
                    .attr('fill', "white")
                    .attr('font-family', "AnimalCrossing")
                    .style("text-anchor", "middle") 
                    .style("font-size", "10px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

console.log(SignEspeceEducationArray,SignEspeceFashionArray,SignEspeceFitnessArray,SignEspeceMusicArray,SignEspeceNatureArray,SignEspecePlayArray, SignEspeceCrankyArray, SignEspeceJockArray)
    })
}
