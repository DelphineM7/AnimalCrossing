function BoutonHobbyOut(){
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
        //variables nécessaires
        const EspeceHobbyPerso = d3.group(donnees, d => d.signe, d=> d.hobbie, d=> d.personnalite)
        let Hobbies = EspeceHobbyPerso.get("Sagittarius")
        
        if (QuelMoisSommesNous == 1) { 
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
                .attr('x', milieuX-300)
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
                .attr('x', milieuX-260)
                .attr('y', milieuY+20) 

            d3.select(`#SpecieTexteVert`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  

            // Diagrammes en babres
            Hobbies = EspeceHobbyPerso.get("Sagittarius")
        } else if(QuelMoisSommesNous == 2){
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

            // Diagrammes en babres
            Hobbies = EspeceHobbyPerso.get("Capricornus")
        } else if(QuelMoisSommesNous == 3){  
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
            
            // Diagrammes en babres
            Hobbies = EspeceHobbyPerso.get("Aquarius")  
        } else if(QuelMoisSommesNous == 4){
            //déplacement des étoiles 
            etoile_jaune.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX + 110-70)
                .attr('y', milieuY + 230)

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX + 290-70)
                .attr('y', milieuY - 140)
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX + 30-70)
                .attr('y', milieuY -180)

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  
            
            etoile_vert.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 270-70)
                .attr('y', milieuY - 270)

            d3.select(`#SpecieTexteVert`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            // Diagrammes en babres
            Hobbies = EspeceHobbyPerso.get("Pisces")     
        } else if(QuelMoisSommesNous == 5){      
             //déplacement des étoiles 
             etoile_jaune.transition()
             .duration(1000) 
             .attr('height', 50 )
             .attr('width', 50 )
             .attr('x', milieuX + 130-150)
             .attr('y', milieuY - 220)

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX + 300-150)
                .attr('y', milieuY - 250)
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 300 -150)
                .attr('y', milieuY + 2)

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  
            
            etoile_vert.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX + 375-150)
                .attr('y', milieuY - 190)

            d3.select(`#SpecieTexteVert`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()

            // Diagrammes en babres
            Hobbies = EspeceHobbyPerso.get("Aries")   
        } else if(QuelMoisSommesNous == 6){ 
             //déplacement des étoiles 
             etoile_jaune.transition()
             .duration(1000) 
             .attr('height', 50 )
             .attr('width', 50 )
             .attr('x', milieuX + 65)
             .attr('y', milieuY + 85)

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 290)
                .attr('y', milieuY - 300)
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 345)
                .attr('y', milieuY - 135)

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  

            // Diagrammes en babres
            Hobbies = EspeceHobbyPerso.get("Taurus")  
        } else if(QuelMoisSommesNous == 7){
             //déplacement des étoiles 
             etoile_jaune.transition()
             .duration(1000) 
             .attr('height', 50 )
             .attr('width', 50 )
             .attr('x', milieuX + 120)
             .attr('y', milieuY + 65)

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX + 100)
                .attr('y', milieuY - 340)  
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 245)
                .attr('y', milieuY - 155)

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  
            
            etoile_vert.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 230)
                .attr('y', milieuY + 100 )

            d3.select(`#SpecieTexteVert`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()    
    
            // Diagrammes en babres
            Hobbies = EspeceHobbyPerso.get("Gemini")  
        } else if(QuelMoisSommesNous == 8){ 
            //déplacement des étoiles 
             etoile_jaune.transition()
             .duration(1000) 
             .attr('height', 50 )
             .attr('width', 50 )
             .attr('x', milieuX + 145)
             .attr('y', milieuY + 65)

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 60)
                .attr('y', milieuY - 380)
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 45)
                .attr('y', milieuY - 135)

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  
            
            etoile_vert.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 190)
                .attr('y', milieuY + 210 )

            d3.select(`#SpecieTexteVert`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()     
        
            // Diagrammes en babres
            Hobbies = EspeceHobbyPerso.get("Cancer")  
        } else if(QuelMoisSommesNous == 9){ 
            //déplacement des étoiles 
             etoile_jaune.transition()
             .duration(1000) 
             .attr('height', 50 )
             .attr('width', 50 )
             .attr('x', milieuX + 228)
             .attr('y', milieuY + 259)

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 295)
                .attr('y', milieuY - 345)
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 140)
                .attr('y', milieuY - 145)

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  
            
            etoile_vert.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 315)
                .attr('y', milieuY + 0 )

            d3.select(`#SpecieTexteVert`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            // Diagrammes en babres  
            Hobbies = EspeceHobbyPerso.get("Leo")      
        } else if(QuelMoisSommesNous == 10){
            //déplacement des étoiles 
             etoile_jaune.transition()
             .duration(1000) 
             .attr('height', 50 )
             .attr('width', 50 )
             .attr('x', milieuX + 42)
             .attr('y', milieuY + 20)

            d3.select(`#SpecieTexteJaune`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            etoile_bleu.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX + 115)
                .attr('y', milieuY - 270)   
            
            d3.select(`#SpecieTexteBleu`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()   

            etoile_rose.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX - 177)
                .attr('y', milieuY - 175)

            d3.select(`#SpecieTexteRose`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()  
            
            etoile_vert.transition()
                .duration(1000) 
                .attr('height', 50 )
                .attr('width', 50 )
                .attr('x', milieuX + 70)
                .attr('y', milieuY + 358)

            d3.select(`#SpecieTexteVert`)
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove() 

            // Diagrammes en babres
            Hobbies = EspeceHobbyPerso.get("Virgo")  
        } else if(QuelMoisSommesNous == 11){ 
            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX + 32)
            .attr('y', milieuY - 85)

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
               .attr('x', milieuX - 152)
               .attr('y', milieuY - 225)

           d3.select(`#SpecieTexteRose`)
               .transition()
               .duration(1000)      
               .attr("opacity", 0)
               .remove()  
           
           etoile_vert.transition()
               .duration(1000) 
               .attr('height', 50 )
               .attr('width', 50 )
               .attr('x', milieuX - 117)
               .attr('y', milieuY + 148)           

           d3.select(`#SpecieTexteVert`)
               .transition()
               .duration(1000)      
               .attr("opacity", 0)
               .remove() 
            
            // Diagrammes en babres
            Hobbies = EspeceHobbyPerso.get("Libra")   
        } else if(QuelMoisSommesNous == 12){
            //déplacement des étoiles 
            etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX + 32 -200)
            .attr('y', milieuY - 105)

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
               .attr('x', milieuX - 152 -200)
               .attr('y', milieuY - 245)

           d3.select(`#SpecieTexteRose`)
               .transition()
               .duration(1000)      
               .attr("opacity", 0)
               .remove()  
            
            // Diagrammes en babres
            Hobbies = EspeceHobbyPerso.get("Scorpio")
        } 
        // DISPARITION DU GRAPHE EN BARRE : SIGNE - HOBBY - PERSONNALITE
        let HobbiesArray = Array.from(Hobbies)
        HobbiesArray.sort(d3.ascending) 
        
        let FondBlancEspece =  d3.select('#FondBlancHobby')
        FondBlancEspece
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        let AxeYEspece =  d3.select('#AxeYHobby')
        AxeYEspece
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        let AxeXEspece =  d3.select('#AxeXHobby')
        AxeXEspece
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        for (let i = 0; i < 6; i++) {
            let HobbyArrayArray = Array.from(HobbiesArray[i][1])
            for (let a = 0; a < HobbyArrayArray.length; a++) {
                let barres =  d3.select(`#rectHobby${i}${a}`)
                barres
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()
            }
        }
        for (let a = 0; a < 8; a++) {
            let reclabels =  d3.select(`#rectHobbylabel${a}`)
                reclabels
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()

            let labels =  d3.select(`#lab1${a}`)
                labels
                .transition()
                .duration(1000)      
                .attr("opacity", 0)
                .remove()
        }   
    })

}