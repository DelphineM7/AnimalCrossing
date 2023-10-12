function BoutonGenderOut(){

    GenderTexteFemale
        .transition()
        .duration(1000)    
        .attr('opacity', "0")
                
    GenderTexteMale
        .transition()
        .duration(1000)    
        .attr('opacity', "0")

    //disparition des tableaux
    //diagramme en barres Constelation - Genre - Hobby
        let FondBlancHobby =  d3.select('#FondBlancHobby')
        FondBlancHobby
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        let AxeYHobby =  d3.select('#AxeYHobby')
        AxeYHobby
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        let AxeXHobby =  d3.select('#AxeXHobby')
        AxeXHobby
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        for (let i = 1; i < 7; i++) {
            let variable1 = d3.select(`#rectFemHobby${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#rectMalHobby${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove() 
        }   

    //diagramme en barres Constelation - Genre - Personnalite  
        let FondBlancSign =  d3.select('#FondBlancSign')
        FondBlancSign
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        let AxeXSign =  d3.select('#AxeXSign')
        AxeXSign
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        let AxeYSign =  d3.select('#AxeYSign')
        AxeYSign
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        for (let i = 1; i < 9; i++) {
            let variable1 = d3.select(`#rectFemSign${i}`)
            variable1
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  

            let variable2 = d3.select(`#rectMalSign${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove() 
        }

    //diagramme en barres Constelation - Genre - Espece
        let FondBlancEspece =  d3.select('#FondBlancEspece')
        FondBlancEspece
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        let AxeYEspece =  d3.select('#AxeYEspece')
        AxeYEspece
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        let AxeXEspece =  d3.select('#AxeXEspece')
        AxeXEspece
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()
        for (let i = 0; i < 9; i++) {
            let variable = d3.select(`#rectfl${i}`)
            variable
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()  
        }
        for (let i = 0; i < 14; i++) {
            let variable = d3.select(`#rect${i}`)
            variable
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()
        }
        for (let i = 0; i < 18; i++) {
            let variable = d3.select(`#rectlab1${i}`)
            variable
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()

            let variable2 = d3.select(`#lab1${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()
        }
        for (let i = 17; i < 35; i++) {
            let variable = d3.select(`#rectlab2${i}`)
            variable
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()

            let variable2 = d3.select(`#lab2${i}`)
            variable2
            .transition()
            .duration(1000)      
            .attr("opacity", 0)
            .remove()
        }

    if (QuelMoisSommesNous == 1) {
            
        etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50)
            .attr('x', milieuX+90 )
            .attr('y', milieuY+190 ) 
                
        etoile_bleu.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+60 )
            .attr('y', milieuY-190 ) 
            

    } else if (QuelMoisSommesNous == 2){

    //transition sur les étoiles
        etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', milieuX+90 )
            .attr('y', milieuY+190)             

        etoile_bleu.transition()
            .duration(1000) 
            .attr('height', 50)
            .attr('width', 50)
            .attr('x', milieuX-40)
            .attr('y', milieuY-190) 

    } else if(QuelMoisSommesNous == 3){ 

        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX+180)
        .attr('y', milieuY+40) 

        etoile_bleu.transition()
        .duration(1000) 
        .attr('height', 50)
        .attr('width', 50)
        .attr('x', milieuX+150)
        .attr('y', milieuY-150) 
        
    } else if(QuelMoisSommesNous == 4){
        etoile_jaune.transition()
        .duration(1000) 
        .attr('height', 50)
        .attr('width', 50)
        .attr('x', milieuX + 110)
        .attr('y', milieuY + 230)

        etoile_bleu.transition()
        .duration(1000) 
        .attr('height', 50)
        .attr('width', 50)
        .attr('x', milieuX + 290)
        .attr('y', milieuY - 140)

    } else if(QuelMoisSommesNous == 5){ 
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 130)
        .attr('y', milieuY - 220)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 300)
        .attr('y', milieuY - 250)

    } else if(QuelMoisSommesNous == 6){ 
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 65)
        .attr('y', milieuY + 85)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX - 290)
        .attr('y', milieuY - 300)

    } else if(QuelMoisSommesNous == 7){
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 120)
        .attr('y', milieuY + 65)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 100)
        .attr('y', milieuY - 340) 

    } else if(QuelMoisSommesNous == 8){ 
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 145)
        .attr('y', milieuY + 65)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX - 60)
        .attr('y', milieuY - 380)

    } else if(QuelMoisSommesNous == 9){
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 228)
        .attr('y', milieuY + 259)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX - 295)
        .attr('y', milieuY - 345)

    } else if(QuelMoisSommesNous == 10){
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 42)
        .attr('y', milieuY + 20)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 115)
        .attr('y', milieuY - 270)  

    } else if(QuelMoisSommesNous == 11){
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 32)
        .attr('y', milieuY - 85)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 166)
        .attr('y', milieuY + 40)  

    } else if(QuelMoisSommesNous == 12){ 
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 32)
        .attr('y', milieuY - 105)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', milieuX + 106)
        .attr('y', milieuY + 60) 
    }           
}