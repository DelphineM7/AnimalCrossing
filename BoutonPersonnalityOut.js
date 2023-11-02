function BoutonPersonnalityOut(){
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
        //variables 
        const Signgender = d3.group(donnees, d => d.signe, d => d.personnalite,d=> d.espece,)
        const EspeceHobby = d3.group(donnees, d => d.signe, d=> d.personnalite, d => d.hobbie)
        const Personnalite = [["Education", "#FF949D"],["Music", "#6460FF" ],["Fashion", "#40FF84"],["Nature", "#23C4B7"],["Fitness", "#FFBC40"],["Play", "#FF40DC"]]
      
        //Big Sister
            let SigngenderBigSister = Signgender.get("Capricornus").get("Big Sister")
            let SigngenderHobbyBigSister = EspeceHobby.get("Capricornus").get("Big Sister")

        //Normal
            let SigngenderNormal = Signgender.get("Capricornus").get("Normal")
            let SigngenderHobbyNormal = EspeceHobby.get("Capricornus").get("Normal")

        //Cranky
            let SigngenderCranky = Signgender.get("Capricornus").get("Cranky")
            let SigngenderHobbyCranky = EspeceHobby.get("Capricornus").get("Cranky")

        //Peppy
            let SigngenderPeppy = Signgender.get("Capricornus").get("Peppy")
            let SigngenderHobbyPeppy = EspeceHobby.get("Capricornus").get("Peppy")

        //Jock
            let SigngenderJock = Signgender.get("Capricornus").get("Jock")
            let SigngenderHobbyJock = EspeceHobby.get("Capricornus").get("Jock")

        //Smug
            let SigngenderSmug = Signgender.get("Capricornus").get("Smug")
            let SigngenderHobbySmug = EspeceHobby.get("Capricornus").get("Smug")

        //Lazy
            let SigngenderLazy = Signgender.get("Capricornus").get("Lazy")
            let SigngenderHobbyLazy = EspeceHobby.get("Capricornus").get("Lazy")

        //Snooty
            let SigngenderSnooty = Signgender.get("Capricornus").get("Snooty")
            let SigngenderHobbySnooty = EspeceHobby.get("Capricornus").get("Snooty")
        
            if (QuelMoisSommesNous == 1) {
                //Big Sister
                    d3.select(`#Croix`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove() 
                //Normal
                    SigngenderNormal = Signgender.get("Sagittarius").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Sagittarius").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Sagittarius").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Sagittarius").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Sagittarius").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Sagittarius").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Sagittarius").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Sagittarius").get("Jock")
                //Smug
                    SigngenderSmug = Signgender.get("Sagittarius").get("Smug")
                    SigngenderHobbySmug = EspeceHobby.get("Sagittarius").get("Smug")
                //Lazy
                    SigngenderLazy = Signgender.get("Sagittarius").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Sagittarius").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Sagittarius").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Sagittarius").get("Snooty")

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
                    
                    etoile_rose.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX-300 )
                        .attr('y', milieuY-310) 
                    
                    d3.select(`#SpecieTexteRose`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove()     

                    etoile_vert.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX-260 )
                        .attr('y', milieuY+20) 
                    
                    d3.select(`#SpecieTexteVert`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove() 

            } else if(QuelMoisSommesNous == 2){
                //Big Sister
                    SigngenderBigSister = Signgender.get("Capricornus").get("Big Sister")
                    SigngenderHobbyBigSister = EspeceHobby.get("Capricornus").get("Big Sister")
                //Normal
                    SigngenderNormal = Signgender.get("Capricornus").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Capricornus").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Capricornus").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Capricornus").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Capricornus").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Capricornus").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Capricornus").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Capricornus").get("Jock")
                //Smug
                    SigngenderSmug = Signgender.get("Capricornus").get("Smug")
                    SigngenderHobbySmug = EspeceHobby.get("Capricornus").get("Smug")
                //Lazy
                    SigngenderLazy = Signgender.get("Capricornus").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Capricornus").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Capricornus").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Capricornus").get("Snooty")

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
                        .attr('x', milieuX-40-90 )
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

                    etoile_vert.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX-270-90 )
                        .attr('y', milieuY-10) 
                    
                    d3.select(`#SpecieTexteVert`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove() 
            } else if(QuelMoisSommesNous == 3){
                //Big Sister
                    SigngenderBigSister = Signgender.get("Aquarius").get("Big Sister")
                    SigngenderHobbyBigSister = EspeceHobby.get("Aquarius").get("Big Sister")
                //Normal
                    SigngenderNormal = Signgender.get("Aquarius").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Aquarius").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Aquarius").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Aquarius").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Aquarius").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Aquarius").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Aquarius").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Aquarius").get("Jock")
                //Smug
                    d3.select(`#Croix`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove() 
                //Lazy
                    SigngenderLazy = Signgender.get("Aquarius").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Aquarius").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Aquarius").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Aquarius").get("Snooty")   
                    
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
                        .attr('x', milieuX-130 )
                        .attr('y', milieuY-300) 
                    
                    d3.select(`#SpecieTexteVert`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove() 
            } else if(QuelMoisSommesNous == 4){
                //Big Sister
                    d3.select(`#Croix`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove() 
                //Normal
                    SigngenderNormal = Signgender.get("Pisces").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Pisces").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Pisces").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Pisces").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Pisces").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Pisces").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Pisces").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Pisces").get("Jock")
                //Smug
                    SigngenderSmug = Signgender.get("Pisces").get("Smug")
                    SigngenderHobbySmug = EspeceHobby.get("Pisces").get("Smug")
                //Lazy
                    SigngenderLazy = Signgender.get("Pisces").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Pisces").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Pisces").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Pisces").get("Snooty") 
                    
                 //déplacement des étoiles 
                    etoile_jaune.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX+ 110-70)
                        .attr('y', milieuY+ 230)

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
                    
                    etoile_rose.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX+ 30-70)
                        .attr('y', milieuY-180) 
                    
                    d3.select(`#SpecieTexteRose`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove()     

                    etoile_vert.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX- 270-70 )
                        .attr('y', milieuY-270) 
                    
                    d3.select(`#SpecieTexteVert`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove() 
            } else if(QuelMoisSommesNous == 5){
                //Big Sister
                    SigngenderBigSister = Signgender.get("Aries").get("Big Sister")
                    SigngenderHobbyBigSister = EspeceHobby.get("Aries").get("Big Sister")
                //Normal
                    SigngenderNormal = Signgender.get("Aries").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Aries").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Aries").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Aries").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Aries").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Aries").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Aries").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Aries").get("Jock")
                //Smug
                    SigngenderSmug = Signgender.get("Aries").get("Smug")
                    SigngenderHobbySmug = EspeceHobby.get("Aries").get("Smug")
                //Lazy
                    SigngenderLazy = Signgender.get("Aries").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Aries").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Aries").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Aries").get("Snooty") 
                    
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
                        .attr('x', milieuX+ 300-150)
                        .attr('y', milieuY-250) 
                    
                    d3.select(`#SpecieTexteBleu`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove()  
            } else if(QuelMoisSommesNous == 6){
                //Big Sister
                    SigngenderBigSister = Signgender.get("Taurus").get("Big Sister")
                    SigngenderHobbyBigSister = EspeceHobby.get("Taurus").get("Big Sister")
                //Normal
                    SigngenderNormal = Signgender.get("Taurus").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Taurus").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Taurus").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Taurus").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Taurus").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Taurus").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Taurus").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Taurus").get("Jock")
                //Smug
                    SigngenderSmug = Signgender.get("Taurus").get("Smug")
                    SigngenderHobbySmug = EspeceHobby.get("Taurus").get("Smug")
                //Lazy
                    SigngenderLazy = Signgender.get("Taurus").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Taurus").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Taurus").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Taurus").get("Snooty") 
                    
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

                    etoile_bleu.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX-290)
                        .attr('y', milieuY-300) 
                    
                    d3.select(`#SpecieTexteBleu`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove()  
            } else if(QuelMoisSommesNous == 7){
                 //Big Sister
                    SigngenderBigSister = Signgender.get("Gemini").get("Big Sister")
                    SigngenderHobbyBigSister = EspeceHobby.get("Gemini").get("Big Sister")
                //Normal
                    SigngenderNormal = Signgender.get("Gemini").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Gemini").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Gemini").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Gemini").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Gemini").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Gemini").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Gemini").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Gemini").get("Jock")
                //Smug
                    SigngenderSmug = Signgender.get("Gemini").get("Smug")
                    SigngenderHobbySmug = EspeceHobby.get("Gemini").get("Smug")
                //Lazy
                    SigngenderLazy = Signgender.get("Gemini").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Gemini").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Gemini").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Gemini").get("Snooty")  

                 //déplacement des étoiles 
                 etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 )
                    .attr('width', 50 )
                    .attr('x', milieuX+ 120)
                    .attr('y', milieuY+ 65)

                d3.select(`#SpecieTexteJaune`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove() 

                etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 )
                    .attr('width', 50 )
                    .attr('x', milieuX+ 100)
                    .attr('y', milieuY-340) 
                
                d3.select(`#SpecieTexteBleu`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove()      
                
                etoile_rose.transition()
                    .duration(1000) 
                    .attr('height', 50 )
                    .attr('width', 50 )
                    .attr('x', milieuX-245)
                    .attr('y', milieuY-155) 
                
                d3.select(`#SpecieTexteRose`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove()     

                etoile_vert.transition()
                    .duration(1000) 
                    .attr('height', 50 )
                    .attr('width', 50 )
                    .attr('x', milieuX- 230 )
                    .attr('y', milieuY+100) 
                
                d3.select(`#SpecieTexteVert`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove() 
            } else if(QuelMoisSommesNous == 8){ 
                //Big Sister
                    SigngenderBigSister = Signgender.get("Cancer").get("Big Sister")
                    SigngenderHobbyBigSister = EspeceHobby.get("Cancer").get("Big Sister")
                //Normal
                    SigngenderNormal = Signgender.get("Cancer").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Cancer").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Cancer").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Cancer").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Cancer").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Cancer").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Cancer").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Cancer").get("Jock")
                //Smug
                    SigngenderSmug = Signgender.get("Cancer").get("Smug")
                    SigngenderHobbySmug = EspeceHobby.get("Cancer").get("Smug")
                //Lazy
                    SigngenderLazy = Signgender.get("Cancer").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Cancer").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Cancer").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Cancer").get("Snooty")

                //déplacement des étoiles 
                 etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 )
                    .attr('width', 50 )
                    .attr('x', milieuX+ 145)
                    .attr('y', milieuY+ 65)

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
                
                etoile_rose.transition()
                    .duration(1000) 
                    .attr('height', 50 )
                    .attr('width', 50 )
                    .attr('x', milieuX-45)
                    .attr('y', milieuY-135) 
                
                d3.select(`#SpecieTexteRose`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove()     

                etoile_vert.transition()
                    .duration(1000) 
                    .attr('height', 50 )
                    .attr('width', 50 )
                    .attr('x', milieuX- 190 )
                    .attr('y', milieuY+210) 
                
                d3.select(`#SpecieTexteVert`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove() 
            } else if(QuelMoisSommesNous == 9){ 
                //Big Sister
                    d3.select(`#Croix`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove() 
                //Normal
                    SigngenderNormal = Signgender.get("Leo").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Leo").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Leo").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Leo").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Leo").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Leo").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Leo").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Leo").get("Jock")
                //Smug
                    SigngenderSmug = Signgender.get("Leo").get("Smug")
                    SigngenderHobbySmug = EspeceHobby.get("Leo").get("Smug")
                //Lazy
                    SigngenderLazy = Signgender.get("Leo").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Leo").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Leo").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Leo").get("Snooty")

                //déplacement des étoiles 
                    etoile_jaune.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX+ 228)
                        .attr('y', milieuY+ 259)

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
                //Big Sister
                    SigngenderBigSister = Signgender.get("Virgo").get("Big Sister")
                    SigngenderHobbyBigSister = EspeceHobby.get("Virgo").get("Big Sister")
                //Normal
                    SigngenderNormal = Signgender.get("Virgo").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Virgo").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Virgo").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Virgo").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Virgo").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Virgo").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Virgo").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Virgo").get("Jock")
                //Smug
                    SigngenderSmug = Signgender.get("Virgo").get("Smug")
                    SigngenderHobbySmug = EspeceHobby.get("Virgo").get("Smug")
                //Lazy
                    SigngenderLazy = Signgender.get("Virgo").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Virgo").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Virgo").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Virgo").get("Snooty")

                //déplacement des étoiles 
                    etoile_jaune.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX+ 42)
                        .attr('y', milieuY+ 20)

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
                    
                    etoile_rose.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX-177)
                        .attr('y', milieuY-175) 
                    
                    d3.select(`#SpecieTexteRose`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove()     
            } else if(QuelMoisSommesNous == 11){ 
                //Big Sister
                    SigngenderBigSister = Signgender.get("Libra").get("Big Sister")
                    SigngenderHobbyBigSister = EspeceHobby.get("Libra").get("Big Sister")
                //Normal
                    SigngenderNormal = Signgender.get("Libra").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Libra").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Libra").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Libra").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Libra").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Libra").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Libra").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Libra").get("Jock")
                //Smug
                    SigngenderSmug = Signgender.get("Libra").get("Smug")
                    SigngenderHobbySmug = EspeceHobby.get("Libra").get("Smug")
                //Lazy
                    SigngenderLazy = Signgender.get("Libra").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Libra").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Libra").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Libra").get("Snooty")

                //déplacement des étoiles 
                    etoile_jaune.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX+ 32)
                        .attr('y', milieuY- 85)

                    d3.select(`#SpecieTexteJaune`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove() 

                    etoile_bleu.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX + 166)
                        .attr('y', milieuY + 40) 
                    
                    d3.select(`#SpecieTexteBleu`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove()      
                    
                    etoile_rose.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX- 152)
                        .attr('y', milieuY- 225) 
                    
                    d3.select(`#SpecieTexteRose`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove()     

                    etoile_vert.transition()
                        .duration(1000) 
                        .attr('height', 50 )
                        .attr('width', 50 )
                        .attr('x', milieuX- 117 )
                        .attr('y', milieuY +148) 
                    
                    d3.select(`#SpecieTexteVert`)
                        .transition()
                        .duration(1000)      
                        .attr("opacity", 0)
                        .remove() 
            } else if(QuelMoisSommesNous == 12){
                //Big Sister
                    d3.select(`#Croix`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                .remove() 
                //Normal
                    SigngenderNormal = Signgender.get("Scorpio").get("Normal")
                    SigngenderHobbyNormal = EspeceHobby.get("Scorpio").get("Normal")
                //Cranky
                    SigngenderCranky = Signgender.get("Scorpio").get("Cranky")
                    SigngenderHobbyCranky = EspeceHobby.get("Scorpio").get("Cranky")
                //Peppy
                    SigngenderPeppy = Signgender.get("Scorpio").get("Peppy")
                    SigngenderHobbyPeppy = EspeceHobby.get("Scorpio").get("Peppy")
                //Jock
                    SigngenderJock = Signgender.get("Scorpio").get("Jock")
                    SigngenderHobbyJock = EspeceHobby.get("Scorpio").get("Jock")
                //Smug
                    SigngenderSmug = Signgender.get("Scorpio").get("Smug")
                    SigngenderHobbySmug = EspeceHobby.get("Scorpio").get("Smug")
                //Lazy
                    SigngenderLazy = Signgender.get("Scorpio").get("Lazy")
                    SigngenderHobbyLazy = EspeceHobby.get("Scorpio").get("Lazy")
                //Snooty
                    SigngenderSnooty = Signgender.get("Scorpio").get("Snooty")
                    SigngenderHobbySnooty = EspeceHobby.get("Scorpio").get("Snooty")
    
                //déplacement des étoiles 
                etoile_jaune.transition()
                    .duration(1000) 
                    .attr('height', 50 )
                    .attr('width', 50 )
                    .attr('x', milieuX+ 32 -200)
                    .attr('y', milieuY- 105)

                d3.select(`#SpecieTexteJaune`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove() 

                etoile_bleu.transition()
                    .duration(1000) 
                    .attr('height', 50 )
                    .attr('width', 50 )
                    .attr('x', milieuX + 106 -200)
                    .attr('y', milieuY + 60) 
                
                d3.select(`#SpecieTexteBleu`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove()      
                
                etoile_rose.transition()
                    .duration(1000) 
                    .attr('height', 50 )
                    .attr('width', 50 )
                    .attr('x', milieuX- 152 -200)
                    .attr('y', milieuY- 245) 
                
                d3.select(`#SpecieTexteRose`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove()     
            } 
        //enlever les titre + les fromages
            //Big Sister
            let SigngenderBigSisterArray = Array.from(SigngenderBigSister)
            SigngenderBigSisterArray.sort(d3.ascending)

            let SigngenderHobbyBigSisterArray = Array.from(SigngenderHobbyBigSister)
            SigngenderHobbyBigSisterArray.sort(d3.ascending)
        //Normal
            let SigngenderNormalArray = Array.from(SigngenderNormal)
            SigngenderNormalArray.sort(d3.ascending)

            let SigngenderHobbyNormalArray = Array.from(SigngenderHobbyNormal)
            SigngenderHobbyNormalArray.sort(d3.ascending)
        //Cranky
            let SigngenderCrankyArray = Array.from(SigngenderCranky)
            SigngenderCrankyArray.sort(d3.ascending)

            let SigngenderHobbyCrankyArray = Array.from(SigngenderHobbyCranky)
            SigngenderHobbyCrankyArray.sort(d3.ascending)
        //Peppy
            let SigngenderPeppyArray = Array.from(SigngenderPeppy)
            SigngenderPeppyArray.sort(d3.ascending)

            let SigngenderHobbyPeppyArray = Array.from(SigngenderHobbyPeppy)
            SigngenderHobbyPeppyArray.sort(d3.ascending)
        //Jock
            let SigngenderJockArray = Array.from(SigngenderJock)
            SigngenderJockArray.sort(d3.ascending)

            let SigngenderHobbyJockArray = Array.from(SigngenderHobbyJock)
            SigngenderHobbyJockArray.sort(d3.ascending)
        //Smug
            let SigngenderSmugArray = Array.from(SigngenderSmug)
            SigngenderSmugArray.sort(d3.ascending)

            let SigngenderHobbySmugArray = Array.from(SigngenderHobbySmug)
            SigngenderHobbySmugArray.sort(d3.ascending)
        //Lazy
            let SigngenderLazyArray = Array.from(SigngenderLazy)
            SigngenderLazyArray.sort(d3.ascending)

            let SigngenderHobbyLazyArray = Array.from(SigngenderHobbyLazy)
            SigngenderHobbyLazyArray.sort(d3.ascending)
        //Snooty
            let SigngenderSnootyArray = Array.from(SigngenderSnooty)
            SigngenderSnootyArray.sort(d3.ascending)

            let SigngenderHobbySnootyArray = Array.from(SigngenderHobbySnooty)
            SigngenderHobbySnootyArray.sort(d3.ascending)

            function RemoveFromage(ArrayEspece, idFromage){
                for (let a = 0; a < ArrayEspece.length; a++) {

                    d3.select(`#Titre${idFromage}`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove()  

                    d3.select(`#Fromage${idFromage}${a}`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove() 
                    
                    d3.select(`#FromageLabel1${idFromage}${a}`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove()   

                    d3.select(`#FromageLabel2${idFromage}${a}`)
                    .transition()
                    .duration(1000)      
                    .attr("opacity", 0)
                    .remove() 
                }
            }
            RemoveFromage(SigngenderBigSisterArray, 'BigSister');
            RemoveFromage(SigngenderSnootyArray, 'Snooty');
            RemoveFromage(SigngenderSmugArray, 'Smug');
            RemoveFromage(SigngenderPeppyArray, 'Peppy');
            RemoveFromage(SigngenderNormalArray, 'Normal');
            RemoveFromage(SigngenderLazyArray, 'Lazy');
            RemoveFromage(SigngenderJockArray, 'Jock');
            RemoveFromage(SigngenderCrankyArray, 'Cranky');

        //enlever les pluies
            function RemovePluie(ArrayHobby, idFromage){
                for (let a = 0; a < ArrayHobby.length; a++) {
                    d3.select(`#Trait${idFromage}${a}`)
                    .transition()
                    .duration(1000)      
                    .attr("stroke-opacity", 0)
                    .remove()  
                }
            }
            RemovePluie(SigngenderHobbyBigSisterArray, 'BigSister');
            RemovePluie(SigngenderHobbyNormalArray, 'Normal');
            RemovePluie(SigngenderHobbyCrankyArray, 'Cranky');
            RemovePluie(SigngenderHobbyPeppyArray, 'Peppy');
            RemovePluie(SigngenderHobbyJockArray, 'Jock');
            RemovePluie(SigngenderHobbySmugArray, 'Smug');
            RemovePluie(SigngenderHobbyLazyArray, 'Lazy');
            RemovePluie(SigngenderHobbySnootyArray, 'Snooty');

        //enlever les labels 
            for (let i = 0; i < 3; i++) {
                d3.select(`#TraitLabel0${i}`)
                .transition()
                .duration(1000)      
                .attr("stroke-opacity", 0)
                .remove()  

                d3.select(`#TraitLabelText0${i}`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  

                d3.select(`#TraitLabel1${i}`)
                .transition()
                .duration(1000)      
                .attr("stroke-opacity", 0)
                .remove()  

                d3.select(`#TraitLabelText1${i}`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  
            }
    })
}