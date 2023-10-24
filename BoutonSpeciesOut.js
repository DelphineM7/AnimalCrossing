function BoutonSpeciesOut(){
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
    //variables pour les disparitions des diagrammes circulaire 
         const EspeceHobby = d3.group(donnees, d => d.signe, d=> d.hobbie, d => d.espece)
         const EspecePersonnalite = d3.group(donnees, d => d.signe, d=> d.personnalite, d => d.espece)
        //Diagramme circulaire selon :  SIGNE - EDUCATION - ESPECE   
            let SignEspeceEducation = EspeceHobby.get("Capricornus").get("Education")

        //Diagramme circulaire selon :  SIGNE - FASHION - ESPECE 
            let SignEspeceFashion = EspeceHobby.get("Capricornus").get("Fashion")

        //Diagramme circulaire selon :  SIGNE - FITNESS - ESPECE
            let SignEspeceFitness = EspeceHobby.get("Capricornus").get("Fitness")

        //Diagramme circulaire selon :  SIGNE - MUSIC - ESPECE
            let SignEspeceMusic = EspeceHobby.get("Capricornus").get("Music")

        //Diagramme circulaire selon :  SIGNE - NATURE - ESPECE
            let SignEspeceNature = EspeceHobby.get("Capricornus").get("Nature")

        //Diagramme circulaire selon :  SIGNE - PLAY - ESPECE
            let SignEspecePlay = EspeceHobby.get("Capricornus").get("Play")

        //Diagramme circulaire selon :  SIGNE - BIG SISTER - ESPECE
            let SignEspeceBigsister = EspecePersonnalite.get("Capricornus").get("Big Sister")

        //Diagramme circulaire selon :  SIGNE - CRANKY - ESPECE
            let SignEspeceCranky = EspecePersonnalite.get("Capricornus").get("Cranky")

        //Diagramme circulaire selon :  SIGNE - JOCK - ESPECE
            let SignEspeceJock = EspecePersonnalite.get("Capricornus").get("Jock")

        //Diagramme circulaire selon :  SIGNE - LAZY - ESPECE
            let SignEspeceLazy = EspecePersonnalite.get("Capricornus").get("Lazy")

        //Diagramme circulaire selon :  SIGNE - NORMAL - ESPECE
            let SignEspeceNormal = EspecePersonnalite.get("Capricornus").get("Normal")  

        //Diagramme circulaire selon :  SIGNE - PEPPY - ESPECE
            let SignEspecePepy = EspecePersonnalite.get("Capricornus").get("Peppy")        
 
        //Diagramme circulaire selon :  SIGNE - SMUG - ESPECE 
            let SignEspeceSmug = EspecePersonnalite.get("Capricornus").get("Smug")    

        //Diagramme circulaire selon :  SIGNE - SNOOTY - ESPECE
            let SignEspeceSnooty = EspecePersonnalite.get("Capricornus").get("Snooty")     

        if (QuelMoisSommesNous == 1) {
            //Diagrammes circulaires
            SignEspeceEducation = EspeceHobby.get("Sagittarius").get("Education")
            SignEspeceFashion = EspeceHobby.get("Sagittarius").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Sagittarius").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Sagittarius").get("Music")
            SignEspeceNature = EspeceHobby.get("Sagittarius").get("Nature")
            SignEspecePlay = EspeceHobby.get("Sagittarius").get("Play")
            d3.select(`#Croix`)
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove() 
            SignEspeceCranky = EspecePersonnalite.get("Sagittarius").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Sagittarius").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Sagittarius").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Sagittarius").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Sagittarius").get("Peppy")
            SignEspeceSmug = EspecePersonnalite.get("Sagittarius").get("Smug")     
            SignEspeceSnooty = EspecePersonnalite.get("Sagittarius").get("Snooty") 

            //déplacement des étoiles 
            etoile_jaune.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX+90)
                .attr('y', milieuY+190)

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX+60 )
                .attr('y', milieuY-190) 
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()      

        } else if(QuelMoisSommesNous == 2){
            SignEspeceEducation = EspeceHobby.get("Capricornus").get("Education")
            SignEspeceFashion = EspeceHobby.get("Capricornus").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Capricornus").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Capricornus").get("Music")
            SignEspeceNature = EspeceHobby.get("Capricornus").get("Nature")
            SignEspecePlay = EspeceHobby.get("Capricornus").get("Play")
            SignEspeceBigsister = EspecePersonnalite.get("Capricornus").get("Big Sister")
            SignEspeceCranky = EspecePersonnalite.get("Capricornus").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Capricornus").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Capricornus").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Capricornus").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Capricornus").get("Peppy")
            SignEspeceSmug = EspecePersonnalite.get("Capricornus").get("Smug")     
            SignEspeceSnooty = EspecePersonnalite.get("Capricornus").get("Snooty") 

            //déplacement des étoiles 
            etoile_jaune.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX+90-90)
                .attr('y', milieuY+190)

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX-40 -90 )
                .attr('y', milieuY-190) 
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX-440-90)
                .attr('y', milieuY-230) 

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  

        } else if(QuelMoisSommesNous == 3){   
            SignEspeceEducation = EspeceHobby.get("Aquarius").get("Education")
            SignEspeceFashion = EspeceHobby.get("Aquarius").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Aquarius").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Aquarius").get("Music")
            SignEspeceNature = EspeceHobby.get("Aquarius").get("Nature")
            SignEspecePlay = EspeceHobby.get("Aquarius").get("Play")
            SignEspeceBigsister = EspecePersonnalite.get("Aquarius").get("Big Sister")
            SignEspeceCranky = EspecePersonnalite.get("Aquarius").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Aquarius").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Aquarius").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Aquarius").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Aquarius").get("Peppy")
            SignEspeceSnooty = EspecePersonnalite.get("Aquarius").get("Snooty") 
            d3.select(`#Croix`)
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove() 

            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+180)
            .attr('y', milieuY+40) 

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX+150)
                .attr('y', milieuY-150) 
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX-300)
                .attr('y', milieuY-90) 

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  
            
            etoile_vert.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX-130)
                .attr('y', milieuY-300)

            d3.select(`#SpecieTexteVert`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 
        } else if(QuelMoisSommesNous == 4){
            SignEspeceEducation = EspeceHobby.get("Pisces").get("Education")
            SignEspeceFashion = EspeceHobby.get("Pisces").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Pisces").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Pisces").get("Music")
            SignEspeceNature = EspeceHobby.get("Pisces").get("Nature")
            SignEspecePlay = EspeceHobby.get("Pisces").get("Play")
            d3.select(`#Croix`)
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove() 
            SignEspeceCranky = EspecePersonnalite.get("Pisces").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Pisces").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Pisces").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Pisces").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Pisces").get("Peppy")
            SignEspeceSmug = EspecePersonnalite.get("Pisces").get("Smug")     
            SignEspeceSnooty = EspecePersonnalite.get("Pisces").get("Snooty")

            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+ 110-70)
            .attr('y', milieuY+230) 

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX+ 290-70)
                .attr('y', milieuY-140) 
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   
        } else if(QuelMoisSommesNous == 5){ 
            SignEspeceEducation = EspeceHobby.get("Aries").get("Education")
            SignEspeceFashion = EspeceHobby.get("Aries").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Aries").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Aries").get("Music")
            SignEspeceNature = EspeceHobby.get("Aries").get("Nature")
            SignEspecePlay = EspeceHobby.get("Aries").get("Play")
            SignEspeceBigsister = EspecePersonnalite.get("Aries").get("Big Sister")
            SignEspeceCranky = EspecePersonnalite.get("Aries").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Aries").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Aries").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Aries").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Aries").get("Peppy")
            SignEspeceSmug = EspecePersonnalite.get("Aries").get("Smug")     
            SignEspeceSnooty = EspecePersonnalite.get("Aries").get("Snooty")  

            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+ 130-150)
            .attr('y', milieuY-220) 

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX+150)
                .attr('y', milieuY-250) 
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX-450)
                .attr('y', milieuY+2) 

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  
            
            etoile_vert.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX+375-150)
                .attr('y', milieuY-190)

            d3.select(`#SpecieTexteVert`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  
        } else if(QuelMoisSommesNous == 6){ 
            SignEspeceEducation = EspeceHobby.get("Taurus").get("Education")
            SignEspeceFashion = EspeceHobby.get("Taurus").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Taurus").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Taurus").get("Music")
            SignEspeceNature = EspeceHobby.get("Taurus").get("Nature")
            SignEspecePlay = EspeceHobby.get("Taurus").get("Play")
            SignEspeceBigsister = EspecePersonnalite.get("Taurus").get("Big Sister")
            SignEspeceCranky = EspecePersonnalite.get("Taurus").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Taurus").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Taurus").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Taurus").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Taurus").get("Peppy")
            SignEspeceSmug = EspecePersonnalite.get("Taurus").get("Smug")     
            SignEspeceSnooty = EspecePersonnalite.get("Taurus").get("Snooty") 

            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+ 65)
            .attr('y', milieuY+85) 

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 
        } else if(QuelMoisSommesNous == 7){
            SignEspeceEducation = EspeceHobby.get("Gemini").get("Education")
            SignEspeceFashion = EspeceHobby.get("Gemini").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Gemini").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Gemini").get("Music")
            SignEspeceNature = EspeceHobby.get("Gemini").get("Nature")
            SignEspecePlay = EspeceHobby.get("Gemini").get("Play")
            SignEspeceBigsister = EspecePersonnalite.get("Gemini").get("Big Sister")
            SignEspeceCranky = EspecePersonnalite.get("Gemini").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Gemini").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Gemini").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Gemini").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Gemini").get("Peppy")
            SignEspeceSmug = EspecePersonnalite.get("Gemini").get("Smug")     
            SignEspeceSnooty = EspecePersonnalite.get("Gemini").get("Snooty") 

            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+ 120)
            .attr('y', milieuY+65) 

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX+100)
                .attr('y', milieuY-340) 
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()     
        } else if(QuelMoisSommesNous == 8){
            SignEspeceEducation = EspeceHobby.get("Cancer").get("Education")
            SignEspeceFashion = EspeceHobby.get("Cancer").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Cancer").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Cancer").get("Music")
            SignEspeceNature = EspeceHobby.get("Cancer").get("Nature")
            SignEspecePlay = EspeceHobby.get("Cancer").get("Play")
            SignEspeceBigsister = EspecePersonnalite.get("Cancer").get("Big Sister")
            SignEspeceCranky = EspecePersonnalite.get("Cancer").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Cancer").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Cancer").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Cancer").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Cancer").get("Peppy")
            SignEspeceSmug = EspecePersonnalite.get("Cancer").get("Smug")     
            SignEspeceSnooty = EspecePersonnalite.get("Cancer").get("Snooty") 
            
            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+ 145)
            .attr('y', milieuY+65) 

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX-60)
                .attr('y', milieuY-380) 
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  
        } else if(QuelMoisSommesNous == 9){ 
            SignEspeceEducation = EspeceHobby.get("Leo").get("Education")
            SignEspeceFashion = EspeceHobby.get("Leo").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Leo").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Leo").get("Music")
            SignEspeceNature = EspeceHobby.get("Leo").get("Nature")
            SignEspecePlay = EspeceHobby.get("Leo").get("Play")
            d3.select(`#Croix`)
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove() 
            SignEspeceCranky = EspecePersonnalite.get("Leo").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Leo").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Leo").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Leo").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Leo").get("Peppy")
            SignEspeceSmug = EspecePersonnalite.get("Leo").get("Smug")     
            SignEspeceSnooty = EspecePersonnalite.get("Leo").get("Snooty") 
            
            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+ 228)
            .attr('y', milieuY+259) 

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX-295)
                .attr('y', milieuY-345) 
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX-140)
                .attr('y', milieuY-145) 

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   
        } else if(QuelMoisSommesNous == 10){
            SignEspeceEducation = EspeceHobby.get("Virgo").get("Education")
            SignEspeceFashion = EspeceHobby.get("Virgo").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Virgo").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Virgo").get("Music")
            SignEspeceNature = EspeceHobby.get("Virgo").get("Nature")
            SignEspecePlay = EspeceHobby.get("Virgo").get("Play")
            SignEspeceBigsister = EspecePersonnalite.get("Virgo").get("Big Sister")
            SignEspeceCranky = EspecePersonnalite.get("Virgo").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Virgo").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Virgo").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Virgo").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Virgo").get("Peppy")
            SignEspeceSmug = EspecePersonnalite.get("Virgo").get("Smug")     
            SignEspeceSnooty = EspecePersonnalite.get("Virgo").get("Snooty")  

            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+ 42)
            .attr('y', milieuY+20) 

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX+115)
                .attr('y', milieuY-270) 
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   
        } else if(QuelMoisSommesNous == 11){ 
            SignEspeceEducation = EspeceHobby.get("Libra").get("Education")
            SignEspeceFashion = EspeceHobby.get("Libra").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Libra").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Libra").get("Music")
            SignEspeceNature = EspeceHobby.get("Libra").get("Nature")
            SignEspecePlay = EspeceHobby.get("Libra").get("Play")
            SignEspeceBigsister = EspecePersonnalite.get("Libra").get("Big Sister")
            SignEspeceCranky = EspecePersonnalite.get("Libra").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Libra").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Libra").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Libra").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Libra").get("Peppy")
            SignEspeceSmug = EspecePersonnalite.get("Libra").get("Smug")     
            SignEspeceSnooty = EspecePersonnalite.get("Libra").get("Snooty")  

            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+ 32)
            .attr('y', milieuY-85) 

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX+166)
                .attr('y', milieuY+40) 
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX-152)
                .attr('y', milieuY-225) 

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   
        } else if(QuelMoisSommesNous == 12){
            SignEspeceEducation = EspeceHobby.get("Scorpio").get("Education")
            SignEspeceFashion = EspeceHobby.get("Scorpio").get("Fashion")
            SignEspeceFitness = EspeceHobby.get("Scorpio").get("Fitness")
            SignEspeceMusic = EspeceHobby.get("Scorpio").get("Music")
            SignEspeceNature = EspeceHobby.get("Scorpio").get("Nature")
            SignEspecePlay = EspeceHobby.get("Scorpio").get("Play")
            d3.select(`#Croix`)
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove() 
            SignEspeceCranky = EspecePersonnalite.get("Scorpio").get("Cranky")
            SignEspeceJock = EspecePersonnalite.get("Scorpio").get("Jock")
            SignEspeceLazy = EspecePersonnalite.get("Scorpio").get("Lazy")
            SignEspeceNormal = EspecePersonnalite.get("Scorpio").get("Normal")  
            SignEspecePepy = EspecePersonnalite.get("Scorpio").get("Peppy")
            SignEspeceSmug = EspecePersonnalite.get("Scorpio").get("Smug")     
            SignEspeceSnooty = EspecePersonnalite.get("Scorpio").get("Snooty") 
            
            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+ 32 -200)
            .attr('y', milieuY-105) 

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 
        } 

    //disparition des diagrammes circulaire 
    d3.select(`#TitreHobbies`)
    .transition()
    .duration(1000)      
    .attr("opacity", 0)
    .remove()  
    
    // Education
        let SignEspeceEducationArray = Array.from(SignEspeceEducation)
        SignEspeceEducationArray.sort(d3.ascending)

        d3.select(`#TitreEducation`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        for (let i = 0; i < SignEspeceEducationArray.length; i++) {
            let variable1 = d3.select(`#EducationFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#EducationFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#EducationFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        }   
    //Fashion
        let SignEspeceFashionArray = Array.from(SignEspeceFashion)
        SignEspeceFashionArray.sort(d3.ascending)

        d3.select(`#TitreFashion`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        for (let i = 0; i < SignEspeceFashionArray.length; i++) {
            let variable1 = d3.select(`#FashionFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#FashionFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#FashionFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        }  
    //Fitness
        let SignEspeceFitnessArray = Array.from(SignEspeceFitness)
        SignEspeceFitnessArray.sort(d3.ascending)

        d3.select(`#TitreFitness`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        for (let i = 0; i < SignEspeceFitnessArray.length; i++) {
            let variable1 = d3.select(`#FitnessFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#FitnessFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#FitnessFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        } 
    //Music
        let SignEspeceMusicArray = Array.from(SignEspeceMusic)
        SignEspeceMusicArray.sort(d3.ascending)

        d3.select(`#TitreMusic`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        for (let i = 0; i < SignEspeceMusicArray.length; i++) {
            let variable1 = d3.select(`#MusicFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#MusicFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#MusicFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        } 
    //Nature
        let SignEspeceNatureArray = Array.from(SignEspeceNature)
        SignEspeceNatureArray.sort(d3.ascending)
        
        d3.select(`#TitreNature`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        for (let i = 0; i < SignEspeceNatureArray.length; i++) {
            let variable1 = d3.select(`#NatureFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#NatureFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#NatureFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        } 
    //Play
        let SignEspecePlayArray = Array.from(SignEspecePlay)
        SignEspecePlayArray.sort(d3.ascending)
        
        d3.select(`#TitrePlay`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove() 
        for (let i = 0; i < SignEspecePlayArray.length; i++) {
            let variable1 = d3.select(`#PlayFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#PlayFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#PlayFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        } 
    //BIG SISTER 
        let SignEspeceBigSisterArray = Array.from(SignEspeceBigsister)
        SignEspeceBigSisterArray.sort(d3.ascending)

        d3.select(`#TitrePersonnalities`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        d3.select(`#TitreBigSister`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        for (let i = 0; i < SignEspeceBigSisterArray.length; i++) {
            let variable1 = d3.select(`#BigSisterFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#BigSisterFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#BigSisterFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        }        
    //CRANKY
        let SignEspeceCrankyArray = Array.from(SignEspeceCranky)
        SignEspeceCrankyArray.sort(d3.ascending)

        d3.select(`#TitreCranky`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove() 
        for (let i = 0; i < SignEspeceCrankyArray.length; i++) {
            let variable1 = d3.select(`#CrankyFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#CrankyFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#CrankyFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        }  
    //JOCK
        let SignEspeceJockArray = Array.from(SignEspeceJock)
        SignEspeceJockArray.sort(d3.ascending)

        d3.select(`#TitreJock`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        for (let i = 0; i < SignEspeceJockArray.length; i++) {
            let variable1 = d3.select(`#JockFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#JockFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#JockFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        }  
    //LAZY
        let SignEspeceLazyArray = Array.from(SignEspeceLazy)
        SignEspeceLazyArray.sort(d3.ascending)

        d3.select(`#TitreLazy`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        for (let i = 0; i < SignEspeceLazyArray.length; i++) {
            let variable1 = d3.select(`#LazyFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#LazyFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#LazyFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        }  
    //NORMAL
        let SignEspeceNormalArray = Array.from(SignEspeceNormal)
        SignEspeceNormalArray.sort(d3.ascending)

        d3.select(`#TitreNormal`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        for (let i = 0; i < SignEspeceNormalArray.length; i++) {
            let variable1 = d3.select(`#NormalFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#NormalFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#NormalFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        } 
    //PEPPY
        let SignEspecePepyArray = Array.from(SignEspecePepy)
        SignEspecePepyArray.sort(d3.ascending)

        d3.select(`#TitrePeppy`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        for (let i = 0; i < SignEspecePepyArray.length; i++) {
            let variable1 = d3.select(`#PepyFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#PepyFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#PepyFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        }          
    //SMUG
        let SignEspeceSmugArray = Array.from(SignEspeceSmug)
        SignEspeceSmugArray.sort(d3.ascending)
        
        d3.select(`#TitreSmug`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
        for (let i = 0; i < SignEspeceSmugArray.length; i++) {
            let variable1 = d3.select(`#SmugFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#SmugFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#SmugFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        }
    //SNOOTY
        let SignEspeceSnootyArray = Array.from(SignEspeceSnooty)
        SignEspeceSnootyArray.sort(d3.ascending)

        d3.select(`#TitreSnooty`)
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        for (let i = 0; i < SignEspeceSnootyArray.length; i++) {
            let variable1 = d3.select(`#SnootyFromage${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#SnootyFromageText1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable3 = d3.select(`#SnootyFromageText2${i}`)
            variable3
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        }
    })
}
