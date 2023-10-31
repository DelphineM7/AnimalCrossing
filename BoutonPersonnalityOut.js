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
            let SigngenderBigSisterArray = Array.from(SigngenderBigSister)
            SigngenderBigSisterArray.sort(d3.ascending)

            let SigngenderHobbyBigSister = EspeceHobby.get("Capricornus").get("Big Sister")
            let SigngenderHobbyBigSisterArray = Array.from(SigngenderHobbyBigSister)
            SigngenderHobbyBigSisterArray.sort(d3.ascending)
        //Normal
            let SigngenderNormal = Signgender.get("Capricornus").get("Normal")
            let SigngenderNormalArray = Array.from(SigngenderNormal)
            SigngenderNormalArray.sort(d3.ascending)

            let SigngenderHobbyNormal = EspeceHobby.get("Capricornus").get("Normal")
            let SigngenderHobbyNormalArray = Array.from(SigngenderHobbyNormal)
            SigngenderHobbyNormalArray.sort(d3.ascending)
        //Cranky
            let SigngenderCranky = Signgender.get("Capricornus").get("Cranky")
            let SigngenderCrankyArray = Array.from(SigngenderCranky)
            SigngenderCrankyArray.sort(d3.ascending)

            let SigngenderHobbyCranky = EspeceHobby.get("Capricornus").get("Cranky")
            let SigngenderHobbyCrankyArray = Array.from(SigngenderHobbyCranky)
            SigngenderHobbyCrankyArray.sort(d3.ascending)
        //Peppy
            let SigngenderPeppy = Signgender.get("Capricornus").get("Peppy")
            let SigngenderPeppyArray = Array.from(SigngenderPeppy)
            SigngenderPeppyArray.sort(d3.ascending)

            let SigngenderHobbyPeppy = EspeceHobby.get("Capricornus").get("Peppy")
            let SigngenderHobbyPeppyArray = Array.from(SigngenderHobbyPeppy)
            SigngenderHobbyPeppyArray.sort(d3.ascending)
        //Jock
            let SigngenderJock = Signgender.get("Capricornus").get("Jock")
            let SigngenderJockArray = Array.from(SigngenderJock)
            SigngenderJockArray.sort(d3.ascending)

            let SigngenderHobbyJock = EspeceHobby.get("Capricornus").get("Jock")
            let SigngenderHobbyJockArray = Array.from(SigngenderHobbyJock)
            SigngenderHobbyJockArray.sort(d3.ascending)
        //Smug
            let SigngenderSmug = Signgender.get("Capricornus").get("Smug")
            let SigngenderSmugArray = Array.from(SigngenderSmug)
            SigngenderSmugArray.sort(d3.ascending)

            let SigngenderHobbySmug = EspeceHobby.get("Capricornus").get("Smug")
            let SigngenderHobbySmugArray = Array.from(SigngenderHobbySmug)
            SigngenderHobbySmugArray.sort(d3.ascending)
        //Lazy
            let SigngenderLazy = Signgender.get("Capricornus").get("Lazy")
            let SigngenderLazyArray = Array.from(SigngenderLazy)
            SigngenderLazyArray.sort(d3.ascending)

            let SigngenderHobbyLazy = EspeceHobby.get("Capricornus").get("Lazy")
            let SigngenderHobbyLazyArray = Array.from(SigngenderHobbyLazy)
            SigngenderHobbyLazyArray.sort(d3.ascending)
        //Snooty
            let SigngenderSnooty = Signgender.get("Capricornus").get("Snooty")
            let SigngenderSnootyArray = Array.from(SigngenderSnooty)
            SigngenderSnootyArray.sort(d3.ascending)

            let SigngenderHobbySnooty = EspeceHobby.get("Capricornus").get("Snooty")
            let SigngenderHobbySnootyArray = Array.from(SigngenderHobbySnooty)
            SigngenderHobbySnootyArray.sort(d3.ascending)

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

        //enlever les titre + les fromages
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

    })
}