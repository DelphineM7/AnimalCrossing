function BoutonGenderOver(){
    d3.csv('villagers.csv',function(d){
        return {
        nom : d.Name,
        espece : d.Species,
        genre : d.Gender,
        personnalité : d.Personality,
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