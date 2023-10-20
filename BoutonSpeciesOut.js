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
            let SignEspeceEducationArray = Array.from(SignEspeceEducation)
            SignEspeceEducationArray.sort(d3.ascending)

        //Diagramme circulaire selon :  SIGNE - FASHION - ESPECE 
            let SignEspeceFashion = EspeceHobby.get("Capricornus").get("Fashion")
            let SignEspeceFashionArray = Array.from(SignEspeceFashion)
            SignEspeceFashionArray.sort(d3.ascending)

        //Diagramme circulaire selon :  SIGNE - FITNESS - ESPECE
            let SignEspeceFitness = EspeceHobby.get("Capricornus").get("Fitness")
            let SignEspeceFitnessArray = Array.from(SignEspeceFitness)
            SignEspeceFitnessArray.sort(d3.ascending)

        //Diagramme circulaire selon :  SIGNE - MUSIC - ESPECE
            let SignEspeceMusic = EspeceHobby.get("Capricornus").get("Music")
            let SignEspeceMusicArray = Array.from(SignEspeceMusic)
            SignEspeceMusicArray.sort(d3.ascending)

        //Diagramme circulaire selon :  SIGNE - NATURE - ESPECE
            let SignEspeceNature = EspeceHobby.get("Capricornus").get("Nature")
            let SignEspeceNatureArray = Array.from(SignEspeceNature)
            SignEspeceNatureArray.sort(d3.ascending)

        //Diagramme circulaire selon :  SIGNE - PLAY - ESPECE
            let SignEspecePlay = EspeceHobby.get("Capricornus").get("Play")
            let SignEspecePlayArray = Array.from(SignEspecePlay)
            SignEspecePlayArray.sort(d3.ascending)
        
        //Diagramme circulaire selon :  SIGNE - BIG SISTER - ESPECE
            let SignEspeceBigsister = EspecePersonnalite.get("Capricornus").get("Big Sister")
            let SignEspeceBigSisterArray = Array.from(SignEspeceBigsister)
            SignEspeceBigSisterArray.sort(d3.ascending)

        //Diagramme circulaire selon :  SIGNE - CRANKY - ESPECE
            let SignEspeceCranky = EspecePersonnalite.get("Capricornus").ge
            let SignEspeceCrankyArray = Array.from(SignEspeceCranky)
            SignEspeceCrankyArray.sort(d3.ascending)

        //Diagramme circulaire selon :  SIGNE - JOCK - ESPECE
            let SignEspeceJock = EspecePersonnalite.get("Capricornus").get("Jock")
            let SignEspeceJockArray = Array.from(SignEspeceJock)
            SignEspeceJockArray.sort(d3.ascending)

        //Diagramme circulaire selon :  SIGNE - LAZY - ESPECE
            let SignEspeceLazy = EspecePersonnalite.get("Capricornus").get("Lazy")
            let SignEspeceLazyArray = Array.from(SignEspeceLazy)
            SignEspeceLazyArray.sort(d3.ascending)

        //Diagramme circulaire selon :  SIGNE - NORMAL - ESPECE
            let SignEspeceNormal = EspecePersonnalite.get("Capricornus").get("Normal")  
            let SignEspeceNormalArray = Array.from(SignEspeceNormal)
            SignEspeceNormalArray.sort(d3.ascending)

        //Diagramme circulaire selon :  SIGNE - PEPPY - ESPECE
            let SignEspecePepy = EspecePersonnalite.get("Capricornus").get("Peppy")        
            let SignEspecePepyArray = Array.from(SignEspecePepy)
            SignEspecePepyArray.sort(d3.ascending)
 
        //Diagramme circulaire selon :  SIGNE - SMUG - ESPECE 
            let SignEspeceSmug = EspecePersonnalite.get("Capricornus").get("Smug")    
            let SignEspeceSmugArray = Array.from(SignEspeceSmug)
            SignEspeceSmugArray.sort(d3.ascending)

        //Diagramme circulaire selon :  SIGNE - SNOOTY - ESPECE
            let SignEspeceSnooty = EspecePersonnalite.get("Capricornus").get("Snooty")     
            let SignEspeceSnootyArray = Array.from(SignEspeceSnooty)
            SignEspeceSnootyArray.sort(d3.ascending)

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

    //disparition des diagrammes circulaire 
    // Education
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