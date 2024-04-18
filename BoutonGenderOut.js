function BoutonGenderOut(){
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

    GenderTexteFemale
        .transition()
        .duration(1000)    
        .attr('opacity', "0")
                
    GenderTexteMale
        .transition()
        .duration(1000)    
        .attr('opacity', "0")

    //disparition des tableaux; variables nécessaires
    const Espece = d3.group(donnees, d => d.signe, d=> d.genre, d => d.espece)  
    //Male
        let MaleEspece = Espece.get("Sagittarius").get("Male")

    //Female
        let FemaleEspece = Espece.get("Sagittarius").get("Female")

    if (QuelMoisSommesNous == 1) {
            
        etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50)
            .attr('x', ((milieuX+85) *addaptation) + addaptationX)
            .attr('y', ((milieuY+185) *addaptation) + addaptationY) 
                
        etoile_bleu.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', ((milieuX+60) *addaptation) + addaptationX)
            .attr('y', ((milieuY-190) *addaptation) + addaptationY)         
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Sagittarius").get("Male")

            //Female
            FemaleEspece = Espece.get("Sagittarius").get("Female")
            

    } else if (QuelMoisSommesNous == 2){
        
        etoile_jaune.transition()
            .duration(1000) 
            .attr('height', 50 )
            .attr('width', 50 )
            .attr('x', ((milieuX+90-90)*addaptation) + addaptationX +add10)
            .attr('y', ((milieuY+190)*addaptation) + addaptationY)            

        etoile_bleu.transition()
            .duration(1000) 
            .attr('height', 50)
            .attr('width', 50)
            .attr('x', ((milieuX-40-90)*addaptation) + addaptationX -5+add10)
            .attr('y', ((milieuY-190)*addaptation) + addaptationY-5) 

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Capricornus").get("Male")

            //Female
            FemaleEspece = Espece.get("Capricornus").get("Female")

    } else if(QuelMoisSommesNous == 3){ 

        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX+180)*addaptation) + addaptationX)
        .attr('y', ((milieuY+40)*addaptation) + addaptationY)

        etoile_bleu.transition()
        .duration(1000) 
        .attr('height', 50)
        .attr('width', 50)
        .attr('x', ((milieuX+150)*addaptation) + addaptationX)
        .attr('y', ((milieuY-150)*addaptation) + addaptationY)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Aquarius").get("Male")

            //Female
            FemaleEspece = Espece.get("Aquarius").get("Female")
        
    } else if(QuelMoisSommesNous == 4){
        etoile_jaune.transition()
        .duration(1000) 
        .attr('height', 50)
        .attr('width', 50)
        .attr('x', ((milieuX + 110-70)*addaptation) + addaptationX) 
        .attr('y', ((milieuY + 230)*addaptation) + addaptationY) 

        etoile_bleu.transition()
        .duration(1000) 
        .attr('height', 50)
        .attr('width', 50)
        .attr('x', ((milieuX + 290-70)*addaptation) + addaptationX)
        .attr('y', ((milieuY - 140)*addaptation) + addaptationY)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Pisces").get("Male")

            //Female
            FemaleEspece = Espece.get("Pisces").get("Female")

    } else if(QuelMoisSommesNous == 5){ 
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 130-150)*addaptation) + addaptationX)
        .attr('y', ((milieuY - 220)*addaptation) + addaptationY)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 300-150)*addaptation) + addaptationX)
        .attr('y', ((milieuY - 250)*addaptation) + addaptationY)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Aries").get("Male")

            //Female
            FemaleEspece = Espece.get("Aries").get("Female")

    } else if(QuelMoisSommesNous == 6){ 
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 65)*addaptation) + addaptationX)
        .attr('y', ((milieuY + 85)*addaptation) + addaptationY)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX - 290)*addaptation) + addaptationX)
        .attr('y', ((milieuY - 300)*addaptation) + addaptationY)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Taurus").get("Male")

            //Female
            FemaleEspece = Espece.get("Taurus").get("Female")
        
    } else if(QuelMoisSommesNous == 7){
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 120)*addaptation) + addaptationX)
        .attr('y', ((milieuY + 65)*addaptation) + addaptationY)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 100)*addaptation) + addaptationX)
        .attr('y', ((milieuY - 340)*addaptation) + addaptationY) 
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Gemini").get("Male")

            //Female
            FemaleEspece = Espece.get("Gemini").get("Female")

    } else if(QuelMoisSommesNous == 8){ 
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 145)*addaptation) + addaptationX)
        .attr('y', ((milieuY + 65)*addaptation) + addaptationY)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX - 60)*addaptation) + addaptationX)
        .attr('y', ((milieuY - 380)*addaptation) + addaptationY)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Cancer").get("Male")

            //Female
            FemaleEspece = Espece.get("Cancer").get("Female")

    } else if(QuelMoisSommesNous == 9){
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 228)*addaptation) + addaptationX)
        .attr('y', ((milieuY + 259)*addaptation) + addaptationY)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX - 295)*addaptation) + addaptationX)
        .attr('y', ((milieuY - 345)*addaptation) + addaptationY)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Leo").get("Male")

            //Female
            FemaleEspece = Espece.get("Leo").get("Female")

    } else if(QuelMoisSommesNous == 10){
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 42)*addaptation) + addaptationX -5)
        .attr('y', ((milieuY + 20)*addaptation) + addaptationY -5)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 115)*addaptation) + addaptationX)
        .attr('y', ((milieuY - 270)*addaptation) + addaptationY) 
        
        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Virgo").get("Male")

            //Female
            FemaleEspece = Espece.get("Virgo").get("Female")

    } else if(QuelMoisSommesNous == 11){
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 32)*addaptation) + addaptationX)
        .attr('y', ((milieuY - 85)*addaptation) + addaptationY)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 166)*addaptation) + addaptationX)
        .attr('y', ((milieuY + 40)*addaptation) + addaptationY) 

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Libra").get("Male")

            //Female
            FemaleEspece = Espece.get("Libra").get("Female")

    } else if(QuelMoisSommesNous == 12){ 
        etoile_jaune.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 32 -200) *addaptation) + addaptationX)
        .attr('y', ((milieuY - 105)*addaptation) + addaptationY)

        etoile_bleu.transition()
        .duration(1000)
        .attr('height', 50)
        .attr('width', 50) 
        .attr('x', ((milieuX + 106 -200)*addaptation) + addaptationX)
        .attr('y', ((milieuY + 60)*addaptation) + addaptationY)

        // variable pour Diagramme en barre selon :  SIGNE - SEXE - ESPECE
            //Male
            MaleEspece = Espece.get("Scorpio").get("Male")

            //Female
            FemaleEspece = Espece.get("Scorpio").get("Female")
    }
    
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
    //variables nécessaires à la disparition 
        //Male
        let MaleEspeceArray = Array.from(MaleEspece)
        MaleEspeceArray.sort(d3.ascending)

        ///Female
        let FemaleEspecesArray = Array.from(FemaleEspece)
        FemaleEspecesArray.sort(d3.ascending)     

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
    for (let i = 0; i < FemaleEspecesArray.length; i++) {
        let variable = d3.select(`#rectfl${i}`)
        variable
        .transition()
        .duration(1000)      
        .attr("opacity", 0)
        .remove()  
    }
    for (let i = 0; i < MaleEspeceArray.length; i++) {
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
    })
    //enlever le fond blanc du texte
    let FondBlancTexteExpGender=d3.select('#FondBlancTexteExpGender')
    FondBlancTexteExpGender
    .transition()
    .duration(1000)
    .attr("opacity", 0)
    .remove()
        // texte d'explication 
        d3.select(texteExpGender)
        .transition()
        .duration(1000)
        .attr("opacity", 0)
        .remove()
}