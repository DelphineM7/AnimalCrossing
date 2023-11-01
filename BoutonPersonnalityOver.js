function BoutonPersonnalityOver(){
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
    // diagrammes en fleurs
        // variables
        const EEspece = d3.groups(donnees, d => d.espece)
        let EspeceListe = []
            for (let i = 0; i < EEspece.length; i++) {
                EspeceListe.push(EEspece[i].shift())
            }
            var Couleur = [
            '#FF1493', '#0000FF', '#FFC0CB', '#2A661F', '#BF7C00', 
            '#20B2AA', '#04D9FF', '#9F0058', '#E5EC17', '#324B76', 
            '#87CEEB', '#A6A6A6', '#800000', '#FFFF80', '#FFFF00',
            '#CFEFEF', '#80A779', '#00FF00', '#FF0000', '#DC143C',
            '#993A6E', '#5C009F', '#9932CC', '#A1009B', '#00FF7F',
            '#FFA500', '#D36BFF', '#FF69B4', '#E2CAF8', '#FFD280',
            '#9F9F00', '#500050', '#1E90FF', '#9FB7FF', '#FCABEA'
            ];

        CouleurETEspeceListe = d3.zip(EspeceListe,Couleur)

        let PositionX1 = 1200
        let PositionX2 = 1600
        let PositionY1 = 200
        let PositionY2 = 420
        let PositionY3 = 675
        let PositionY4 = 900

        const color = d3.scaleOrdinal()
            .domain(EspeceListe)
            .range(Couleur);

        const arcGenerator = d3.arc()
            .outerRadius(120)
            .innerRadius(0)
            .cornerRadius(50)
        
        const arcGeneratorPetit = d3.arc()
            .outerRadius(120)
            .innerRadius(0)
            .cornerRadius(40)

        const arcGeneratorlabel = d3.arc()
            .outerRadius(120) 
            .innerRadius(30)

        const arcGeneratorlabelMulti = d3.arc()
            .outerRadius(140) 
            .innerRadius(55)

        const pie = d3.pie()
            .startAngle(-Math.PI/2)
            .endAngle(Math.PI/2)
            .value(d => d[1].length);

        const Signgender = d3.group(donnees, d => d.signe, d => d.personnalite,d=> d.espece,)
        const EspeceHobby = d3.group(donnees, d => d.signe, d=> d.personnalite, d => d.hobbie)
        const Personnalite = [["Education", "#40FF84"],["Music", "#6460FF" ],["Fashion", "#FF949D"],["Nature", "#23C4B7"],["Fitness", "#FFBC40"],["Play", "#FF40DC"]]
       
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

        //Pour les variations d'ID dans les fromages
            function applyIDcorrectely(PieData) {
                for (let i = 0; i < PieData.length; i++) {
                    PieData[i].index=i 
                }
            }   

        if (QuelMoisSommesNous == 1) {
            //Big Sister
                SigngenderBigSister = []
                SigngenderHobbyBigSister = []
                let Croix = MonEspaceSVG.append('image')
                .attr('id', 'Croix')
                .attr('xlink:href', 'Croix.svg')
                .attr('width', 130)
                .attr('height', 130)
                .attr('x', PositionX1 -60)
                .attr('y', PositionY1 -100 ) 
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.7)
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
                SigngenderSmug = []
                SigngenderHobbySmug = []
                let Croix = MonEspaceSVG.append('image')
                .attr('id', 'Croix')
                .attr('xlink:href', 'Croix.svg')
                .attr('width', 130)
                .attr('height', 130)
                .attr('x', PositionX2 -60)
                .attr('y', PositionY3 -100 ) 
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.7)
            //Lazy
                SigngenderLazy = Signgender.get("Aquarius").get("Lazy")
                SigngenderHobbyLazy = EspeceHobby.get("Aquarius").get("Lazy")
            //Snooty
                SigngenderSnooty = Signgender.get("Aquarius").get("Snooty")
                SigngenderHobbySnooty = EspeceHobby.get("Aquarius").get("Snooty")     
        } else if(QuelMoisSommesNous == 4){
            //Big Sister
                SigngenderBigSister = []
                SigngenderHobbyBigSister = []
                let Croix = MonEspaceSVG.append('image')
                .attr('id', 'Croix')
                .attr('xlink:href', 'Croix.svg')
                .attr('width', 130)
                .attr('height', 130)
                .attr('x', PositionX1 -60)
                .attr('y', PositionY1 -100 ) 
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.7)
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
        } else if(QuelMoisSommesNous == 9){ 
            //Big Sister
                SigngenderBigSister = []
                SigngenderHobbyBigSister = []
                let Croix = MonEspaceSVG.append('image')
                .attr('id', 'Croix')
                .attr('xlink:href', 'Croix.svg')
                .attr('width', 130)
                .attr('height', 130)
                .attr('x', PositionX1 -60)
                .attr('y', PositionY1 -100 ) 
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.7)
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
        } else if(QuelMoisSommesNous == 12){
            //Big Sister
                SigngenderBigSister = []
                SigngenderHobbyBigSister = []
                let Croix = MonEspaceSVG.append('image')
                .attr('id', 'Croix')
                .attr('xlink:href', 'Croix.svg')
                .attr('width', 130)
                .attr('height', 130)
                .attr('x', PositionX1 -60)
                .attr('y', PositionY1 -100 ) 
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.7)
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
        } 

        //Diagramme Fleur
            //variables 
            //Big Sister
            let SigngenderBigSisterArray = Array.from(SigngenderBigSister)
            SigngenderBigSisterArray.sort(d3.ascending)
            let pieDataSigngenderBigSisterArray = pie(SigngenderBigSisterArray)
            applyIDcorrectely(pieDataSigngenderBigSisterArray)
            let SignCompteBigSister = 0
            for (let i = 0; i < pieDataSigngenderBigSisterArray.length; i++) {
                SignCompteBigSister += pieDataSigngenderBigSisterArray[i].value 
            }
            let SigngenderHobbyBigSisterArray = Array.from(SigngenderHobbyBigSister)
            SigngenderHobbyBigSisterArray.sort(d3.ascending)
        //Normal
            let SigngenderNormalArray = Array.from(SigngenderNormal)
            SigngenderNormalArray.sort(d3.ascending)
            let pieDataSigngenderNormalArray = pie(SigngenderNormalArray)
            applyIDcorrectely(pieDataSigngenderNormalArray)
            let SignCompteNormal = 0
            for (let i = 0; i < pieDataSigngenderNormalArray.length; i++) {
                SignCompteNormal += pieDataSigngenderNormalArray[i].value 
            }
            let SigngenderHobbyNormalArray = Array.from(SigngenderHobbyNormal)
            SigngenderHobbyNormalArray.sort(d3.ascending)
        //Cranky
            let SigngenderCrankyArray = Array.from(SigngenderCranky)
            SigngenderCrankyArray.sort(d3.ascending)
            let pieDataSigngenderCrankyArray = pie(SigngenderCrankyArray)
            applyIDcorrectely(pieDataSigngenderCrankyArray)
            let SignCompteCranky = 0
            for (let i = 0; i < pieDataSigngenderCrankyArray.length; i++) {
                SignCompteCranky += pieDataSigngenderCrankyArray[i].value 
            }
            let SigngenderHobbyCrankyArray = Array.from(SigngenderHobbyCranky)
            SigngenderHobbyCrankyArray.sort(d3.ascending)
        //Peppy
            let SigngenderPeppyArray = Array.from(SigngenderPeppy)
            SigngenderPeppyArray.sort(d3.ascending)
            let pieDataSigngenderPeppyArray = pie(SigngenderPeppyArray)
            applyIDcorrectely(pieDataSigngenderPeppyArray)
            let SignComptePeppy  = 0
            for (let i = 0; i < pieDataSigngenderPeppyArray.length; i++) {
                SignComptePeppy += pieDataSigngenderPeppyArray[i].value 
            }
            let SigngenderHobbyPeppyArray = Array.from(SigngenderHobbyPeppy)
            SigngenderHobbyPeppyArray.sort(d3.ascending)
        //Jock
            let SigngenderJockArray = Array.from(SigngenderJock)
            SigngenderJockArray.sort(d3.ascending)
            let pieDataSigngenderJockArray = pie(SigngenderJockArray)
            applyIDcorrectely(pieDataSigngenderJockArray)
            let SignCompteJock  = 0
            for (let i = 0; i < pieDataSigngenderJockArray.length; i++) {
                SignCompteJock += pieDataSigngenderJockArray[i].value 
            }
            let SigngenderHobbyJockArray = Array.from(SigngenderHobbyJock)
            SigngenderHobbyJockArray.sort(d3.ascending)
        //Smug
            let SigngenderSmugArray = Array.from(SigngenderSmug)
            SigngenderSmugArray.sort(d3.ascending)
            let pieDataSigngenderSmugArray = pie(SigngenderSmugArray)
            applyIDcorrectely(pieDataSigngenderSmugArray)
            let SignCompteSmug  = 0
            for (let i = 0; i < pieDataSigngenderSmugArray.length; i++) {
                SignCompteSmug += pieDataSigngenderSmugArray[i].value 
            }
            let SigngenderHobbySmugArray = Array.from(SigngenderHobbySmug)
            SigngenderHobbySmugArray.sort(d3.ascending)
        //Lazy
            let SigngenderLazyArray = Array.from(SigngenderLazy)
            SigngenderLazyArray.sort(d3.ascending)
            let pieDataSigngenderLazyArray = pie(SigngenderLazyArray)
            applyIDcorrectely(pieDataSigngenderLazyArray)
            let SignCompteLazy  = 0
            for (let i = 0; i < pieDataSigngenderLazyArray.length; i++) {
                SignCompteLazy += pieDataSigngenderLazyArray[i].value 
            }
            let SigngenderHobbyLazyArray = Array.from(SigngenderHobbyLazy)
            SigngenderHobbyLazyArray.sort(d3.ascending)
        //Snooty
            let SigngenderSnootyArray = Array.from(SigngenderSnooty)
            SigngenderSnootyArray.sort(d3.ascending)
            let pieDataSigngenderSnootyArray = pie(SigngenderSnootyArray)
            applyIDcorrectely(pieDataSigngenderSnootyArray)
            let SignCompteSnooty  = 0
            for (let i = 0; i < pieDataSigngenderSnootyArray.length; i++) {
                SignCompteSnooty += pieDataSigngenderSnootyArray[i].value 
            }
            let SigngenderHobbySnootyArray = Array.from(SigngenderHobbySnooty)
            SigngenderHobbySnootyArray.sort(d3.ascending)

            //Fleur Big sister
                MonEspaceSVG.append('text')
                .text("Big Sister") 
                .attr("id", `TitreBigSister`)
                .attr('x', PositionX1-50)
                .attr('y', PositionY1-130)
                .attr('fill', "white")
                .attr('opacity', "0")
                .attr('font-size', "25")
                .attr('font-family', "AnimalCrossing")
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.5)

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataSigngenderBigSisterArray)
                    .enter()
                    .append("path")
                    .attr("id", d => `FromageBigSister${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", "blue")
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", `translate(${PositionX1},${PositionY1})`)
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataSigngenderBigSisterArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel1BigSister${d.index}`)
                    .text((d) =>  d.data[0]) 
                    .attr("transform", (d) => `translate(${PositionX1},${PositionY1}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)

                MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataSigngenderBigSisterArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel2BigSister${d.index}`)
                    .text((d) =>  d.value + "/" + SignCompteBigSister) 
                    .attr("transform", (d) => `translate(${PositionX1},${PositionY1+15}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)

                for (let i = 0; i < SigngenderHobbyBigSisterArray.length; i++) {
                    MonEspaceSVG.append('line')
                        .attr("id", `TraitBigSister${i}`)
                        .attr('x1', PositionX1 -60 + i*28)
                        .attr('y1', PositionY1 +3)
                        .attr('x2', PositionX1 -60 + i*28)
                        .attr('y2', PositionY1 + SigngenderHobbyBigSisterArray[i][1].length *14)
                        .attr('stroke-linecap', "round")
                        .attr("stroke", "white")
                        .attr('stroke-width', 6)
                        .attr('stroke-dasharray', 7)
                        .attr('stroke-opacity', 0) 
                    
                    for (let a = 0; a < Personnalite.length; a++) {
                        if (SigngenderHobbyBigSisterArray[i][0] == Personnalite[a][0]) {
                            d3.select(`#TraitBigSister${i}`)
                                .attr('x1', PositionX1 -60 + a*28)
                                .attr('x2', PositionX1 -60 + a*28)
                                .attr("stroke", `${Personnalite[a][1]}`)
                                .transition()
                                    .duration(1050) 
                                    .attr("stroke-opacity", 0.8)
                        }   
                    }
                }           

            //Fleur Normal
                MonEspaceSVG.append('text')
                    .text("Normal") 
                    .attr("id", `TitreNormal`)
                    .attr('x', PositionX2-40)
                    .attr('y', PositionY1-130)
                    .attr('fill', "white")
                    .attr('opacity', "0")
                    .attr('font-size', "25")
                    .attr('font-family', "AnimalCrossing")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.5)

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataSigngenderNormalArray)
                    .enter()
                    .append("path")
                    .attr("id", d => `FromageNormal${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", "blue")
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", `translate(${PositionX2},${PositionY1})`)
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataSigngenderNormalArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel1Normal${d.index}`)
                    .text((d) =>  d.data[0]) 
                    .attr("transform", (d) => `translate(${PositionX2},${PositionY1}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)

                MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataSigngenderNormalArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel2Normal${d.index}`)
                    .text((d) =>  d.value + "/" + SignCompteNormal) 
                    .attr("transform", (d) => `translate(${PositionX2},${PositionY1+15}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)
                
                for (let i = 0; i < SigngenderHobbyNormalArray.length; i++) {
                    MonEspaceSVG.append('line')
                        .attr("id", `TraitNormal${i}`)
                        .attr('x1', PositionX2 -60 + i*28)
                        .attr('y1', PositionY1 +3 )
                        .attr('x2', PositionX2 -60 + i*28)
                        .attr('y2', PositionY1 + SigngenderHobbyNormalArray[i][1].length *14)
                        .attr('stroke-linecap', "round")
                        .attr("stroke", `white`)
                        .attr('stroke-width', 6)
                        .attr('stroke-dasharray', 7)
                        .attr('stroke-opacity', 0) 
                        
                        for (let a = 0; a < Personnalite.length; a++) {
                            if (SigngenderHobbyNormalArray[i][0] == Personnalite[a][0]) {
                                d3.select(`#TraitNormal${i}`)
                                    .attr('x1', PositionX2 -60 + a*28)
                                    .attr('x2', PositionX2 -60 + a*28)
                                    .attr("stroke", `${Personnalite[a][1]}`)
                                    .transition()
                                        .duration(1050) 
                                        .attr("stroke-opacity", 0.8)
                            }   
                    }
                }
            //Fleur Cranky
                MonEspaceSVG.append('text')
                    .text("Cranky") 
                    .attr("id", `TitreCranky`)
                    .attr('x', PositionX1-40)
                    .attr('y', PositionY2-130)
                    .attr('fill', "white")
                    .attr('opacity', "0")
                    .attr('font-size', "25")
                    .attr('font-family', "AnimalCrossing")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.5)

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataSigngenderCrankyArray)
                    .enter()
                    .append("path")
                    .attr("id", d => `FromageCranky${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", "blue")
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", `translate(${PositionX1},${PositionY2})`)
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataSigngenderCrankyArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel1Cranky${d.index}`)
                    .text((d) =>  d.data[0]) 
                    .attr("transform", (d) => `translate(${PositionX1},${PositionY2}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)

                MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataSigngenderCrankyArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel2Cranky${d.index}`)
                    .text((d) =>  d.value + "/" + SignCompteCranky) 
                    .attr("transform", (d) => `translate(${PositionX1},${PositionY2+15}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)

                for (let i = 0; i < SigngenderHobbyCrankyArray.length; i++) {
                    MonEspaceSVG.append('line')
                    .attr("id", `TraitCranky${i}`)
                    .attr('x1', PositionX1 -60 + i*28)
                    .attr('y1', PositionY2 +3)
                    .attr('x2', PositionX1 -60 + i*28)
                    .attr('y2', PositionY2 + SigngenderHobbyCrankyArray[i][1].length *14)
                    .attr('stroke-linecap', "round")
                    .attr("stroke", `white`)
                    .attr('stroke-width', 6)
                    .attr('stroke-dasharray', 7)
                    .attr('stroke-opacity', 0) 

                    for (let a = 0; a < Personnalite.length; a++) {
                        if (SigngenderHobbyCrankyArray[i][0] == Personnalite[a][0]) {
                            d3.select(`#TraitCranky${i}`)
                                .attr('x1', PositionX1 -60 + a*28)
                                .attr('x2', PositionX1 -60 + a*28)
                                .attr("stroke", `${Personnalite[a][1]}`)
                                .transition()
                                    .duration(1050) 
                                    .attr("stroke-opacity", 0.8)
                        }   
                    }
                } 
            //Fleur Peppy
                MonEspaceSVG.append('text')
                    .text("Peppy") 
                    .attr("id", `TitrePeppy`)
                    .attr('x', PositionX2-30)
                    .attr('y', PositionY2-130)
                    .attr('fill', "white")
                    .attr('opacity', "0")
                    .attr('font-size', "25")
                    .attr('font-family', "AnimalCrossing")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.5)

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataSigngenderPeppyArray)
                    .enter()
                    .append("path")
                    .attr("id", d => `FromagePeppy${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", "blue")
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", `translate(${PositionX2},${PositionY2})`)
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity",0.8)

                MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataSigngenderPeppyArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel1Peppy${d.index}`)
                    .text((d) =>  d.data[0]) 
                    .attr("transform", (d) => `translate(${PositionX2},${PositionY2}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)

                MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataSigngenderPeppyArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel2Peppy${d.index}`)
                    .text((d) =>  d.value + "/" + SignComptePeppy) 
                    .attr("transform", (d) => `translate(${PositionX2},${PositionY2+15}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)
                
                for (let i = 0; i < SigngenderHobbyPeppyArray.length; i++) {
                    MonEspaceSVG.append('line')
                        .attr("id", `TraitPeppy${i}`)
                        .attr('y1', PositionY2 +3)
                        .attr('y2', PositionY2 + SigngenderHobbyPeppyArray[i][1].length *14)
                        .attr('stroke-linecap', "round")
                        .attr("stroke", `${Personnalite[i][1]}`)
                        .attr('stroke-width', 6)
                        .attr('stroke-dasharray', 7)
                        .attr('stroke-opacity', 0) 

                    for (let a = 0; a < Personnalite.length; a++) {
                        if (SigngenderHobbyPeppyArray[i][0] == Personnalite[a][0]) {
                            d3.select(`#TraitPeppy${i}`)
                                .attr('x1', PositionX2 -60 + a*28)
                                .attr('x2', PositionX2 -60 + a*28)
                                .attr("stroke", `${Personnalite[a][1]}`)
                                .transition()
                                    .duration(1050) 
                                    .attr("stroke-opacity", 0.8)
                        }   
                    }
                }
            //Fleur Jock
                MonEspaceSVG.append('text')
                    .text("Jock") 
                    .attr("id", `TitreJock`)
                    .attr('x', PositionX1-30)
                    .attr('y', PositionY3-130)
                    .attr('fill', "white")
                    .attr('opacity', "0")
                    .attr('font-size', "25")
                    .attr('font-family', "AnimalCrossing")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.5)

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataSigngenderJockArray)
                    .enter()
                    .append("path")
                    .attr("id", d => `FromageJock${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", "blue")
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", `translate(${PositionX1},${PositionY3})`)
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity",0.8)

                MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataSigngenderJockArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel1Jock${d.index}`)
                    .text((d) =>  d.data[0]) 
                    .attr("transform", (d) => `translate(${PositionX1},${PositionY3}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)

                MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataSigngenderJockArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel2Jock${d.index}`)
                    .text((d) =>  d.value + "/" + SignCompteJock) 
                    .attr("transform", (d) => `translate(${PositionX1},${PositionY3+15}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)
                
                for (let i = 0; i < SigngenderHobbyJockArray.length; i++) {
                    MonEspaceSVG.append('line')
                        .attr("id", `TraitJock${i}`)
                        .attr('x1', PositionX1 -60 + i*28)
                        .attr('y1', PositionY3 +3)
                        .attr('x2', PositionX1 -60 + i*28)
                        .attr('y2', PositionY3 + SigngenderHobbyJockArray[i][1].length *14)
                        .attr('stroke-linecap', "round")
                        .attr("stroke", `${Personnalite[i][1]}`)
                        .attr('stroke-width', 6)
                        .attr('stroke-dasharray', 7)
                        .attr('stroke-opacity', 0) 

                    for (let a = 0; a < Personnalite.length; a++) {
                        if (SigngenderHobbyJockArray[i][0] == Personnalite[a][0]) {
                            d3.select(`#TraitJock${i}`)
                                .attr('x1', PositionX1 -60 + a*28)
                                .attr('x2', PositionX1 -60 + a*28)
                                .attr("stroke", `${Personnalite[a][1]}`)
                                .transition()
                                    .duration(1050) 
                                    .attr("stroke-opacity", 0.8)
                        }   
                    }
                }
            //Fleur Smug
                MonEspaceSVG.append('text')
                    .text("Smug") 
                    .attr("id", `TitreSmug`)
                    .attr('x', PositionX2-30)
                    .attr('y', PositionY3-130)
                    .attr('fill', "white")
                    .attr('opacity', "0")
                    .attr('font-size', "25")
                    .attr('font-family', "AnimalCrossing")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.5)
                    
                MonEspaceSVG.selectAll("arc")
                    .data(pieDataSigngenderSmugArray)
                    .enter()
                    .append("path")
                    .attr("id", d => `FromageSmug${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", "blue")
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", `translate(${PositionX2},${PositionY3})`)
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataSigngenderSmugArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel1Smug${d.index}`)
                    .text((d) =>  d.data[0]) 
                    .attr("transform", (d) => `translate(${PositionX2},${PositionY3}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)

                MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataSigngenderSmugArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel2Smug${d.index}`)
                    .text((d) =>  d.value + "/" + SignCompteSmug) 
                    .attr("transform", (d) => `translate(${PositionX2},${PositionY3+15}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)
                
                for (let i = 0; i < SigngenderHobbySmugArray.length; i++) {
                    MonEspaceSVG.append('line')
                        .attr("id", `TraitSmug${i}`)
                        .attr('x1', PositionX2 -60 + i*28)
                        .attr('y1', PositionY3 +3)
                        .attr('x2', PositionX2 -60 + i*28)
                        .attr('y2', PositionY3 + SigngenderHobbySmugArray[i][1].length *14)
                        .attr('stroke-linecap', "round")
                        .attr("stroke", `${Personnalite[i][1]}`)
                        .attr('stroke-width', 6)
                        .attr('stroke-dasharray', 7)
                        .attr('stroke-opacity', 0) 

                    for (let a = 0; a < Personnalite.length; a++) {
                        if (SigngenderHobbySmugArray[i][0] == Personnalite[a][0]) {
                            d3.select(`#TraitSmug${i}`)
                                .attr('x1', PositionX2 -60 + a*28)
                                .attr('x2', PositionX2 -60 + a*28)
                                .attr("stroke", `${Personnalite[a][1]}`)
                                .transition()
                                    .duration(1050) 
                                    .attr("stroke-opacity", 0.8)
                        }   
                    }
                }
            //Fleur Lazy
                MonEspaceSVG.append('text')
                .text("Lazy") 
                .attr("id", `TitreLazy`)
                .attr('x', PositionX1-25)
                .attr('y', PositionY4-130)
                .attr('fill', "white")
                .attr('opacity', "0")
                .attr('font-size', "25")
                .attr('font-family', "AnimalCrossing")
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.5)
                
                MonEspaceSVG.selectAll("arc")
                    .data(pieDataSigngenderLazyArray)
                    .enter()
                    .append("path")
                    .attr("id", d => `FromageLazy${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", "blue")
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", `translate(${PositionX1},${PositionY4})`)
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataSigngenderLazyArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel1Lazy${d.index}`)
                    .text((d) =>  d.data[0]) 
                    .attr("transform", (d) => `translate(${PositionX1},${PositionY4}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle")
                    .attr('font-family', "AnimalCrossing") 
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)

                MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataSigngenderLazyArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel2Lazy${d.index}`)
                    .text((d) =>  d.value + "/" + SignCompteLazy) 
                    .attr("transform", (d) => `translate(${PositionX1},${PositionY4+15}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)
                    
                for (let i = 0; i < SigngenderHobbyLazyArray.length; i++) {
                    MonEspaceSVG.append('line')
                        .attr("id", `TraitLazy${i}`)
                        .attr('x1', PositionX1 -60 + i*28)
                        .attr('y1', PositionY4 +3)
                        .attr('x2', PositionX1 -60 + i*28)
                        .attr('y2', PositionY4 + SigngenderHobbyLazyArray[i][1].length *14)
                        .attr('stroke-linecap', "round")
                        .attr("stroke", `${Personnalite[i][1]}`)
                        .attr('stroke-width', 6)
                        .attr('stroke-dasharray', 7)
                        .attr('stroke-opacity', 0) 
                    
                    for (let a = 0; a < Personnalite.length; a++) {
                        if (SigngenderHobbyLazyArray[i][0] == Personnalite[a][0]) {
                            d3.select(`#TraitLazy${i}`)
                                .attr('x1', PositionX1 -60 + a*28)
                                .attr('x2', PositionX1 -60 + a*28)
                                .attr("stroke", `${Personnalite[a][1]}`)
                                .transition()
                                    .duration(1050) 
                                    .attr("stroke-opacity", 0.8)
                        }   
                    }
                }
            //Fleur Snooty
                MonEspaceSVG.append('text')
                    .text("Snooty") 
                    .attr("id", `TitreSnooty`)
                    .attr('x', PositionX2-32)
                    .attr('y', PositionY4-130)
                    .attr('fill', "white")
                    .attr('opacity', "0")
                    .attr('font-size', "25")
                    .attr('font-family', "AnimalCrossing")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.5)

                MonEspaceSVG.selectAll("arc")
                    .data(pieDataSigngenderSnootyArray)
                    .enter()
                    .append("path")
                    .attr("id", d => `FromageSnooty${d.index}`)
                    .attr("d", arcGenerator)
                    .attr("fill", "blue")
                    .attr("stroke", "white")
                    .attr("stroke-width", 1)
                    .attr("transform", `translate(${PositionX2},${PositionY4})`)
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 0.8)

                MonEspaceSVG.selectAll(".label-espece")
                    .data(pieDataSigngenderSnootyArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel1Snooty${d.index}`)
                    .text((d) =>  d.data[0]) 
                    .attr("transform", (d) => `translate(${PositionX2},${PositionY4}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1) 

                MonEspaceSVG.selectAll(".label-Compte")
                    .data(pieDataSigngenderSnootyArray)
                    .enter()
                    .append("text")
                    .attr("id", d => `FromageLabel2Snooty${d.index}`)
                    .text((d) =>  d.value + "/" + SignCompteSnooty) 
                    .attr("transform", (d) => `translate(${PositionX2},${PositionY4+15}) translate(${arcGeneratorlabel.centroid(d)})`)
                    .style("text-anchor", "middle") 
                    .attr('font-family', "AnimalCrossing")
                    .style("fill", "white")
                    .style("font-size", "12px")
                    .attr("opacity", 0)
                    .transition()
                        .duration(1050) 
                        .attr("opacity", 1)
                
                for (let i = 0; i < SigngenderHobbySnootyArray.length; i++) {
                    MonEspaceSVG.append('line')
                        .attr("id", `TraitSnooty${i}`)
                        .attr('x1', PositionX2 -60 + i*28)
                        .attr('y1', PositionY4 +3)
                        .attr('x2', PositionX2 -60 + i*28)
                        .attr('y2', PositionY4 + SigngenderHobbySnootyArray[i][1].length *14)
                        .attr('stroke-linecap', "round")
                        .attr("stroke", `${Personnalite[i][1]}`)
                        .attr('stroke-width', 6)
                        .attr('stroke-dasharray', 7)
                        .attr('stroke-opacity', 0)

                    for (let a = 0; a < Personnalite.length; a++) {
                        if (SigngenderHobbySnootyArray[i][0] == Personnalite[a][0]) {
                            d3.select(`#TraitSnooty${i}`)
                                .attr('x1', PositionX2 -60 + a*28)
                                .attr('x2', PositionX2 -60 + a*28)
                                .attr("stroke", `${Personnalite[a][1]}`)
                                .attr("stroke-opacity", 0)
                                .transition()
                                    .duration(1050) 
                                    .attr("stroke-opacity", 0.8)
                        }   
                    }
                }    
        // changer les couleurs des parties de fromages
                function applyColorsToFromages(signEspeceArray, prefix) {
                    for (let a = 0; a < signEspeceArray.length; a++) {
                        for (let c = 0; c < CouleurETEspeceListe.length; c++) {
                            if (signEspeceArray[a][0] == CouleurETEspeceListe[c][0]) {
                                let carambert = document.getElementById(`Fromage${prefix}${a}`);
                                carambert.style.fill = CouleurETEspeceListe[c][1];
                            }
                        }
                    }
                }
                applyColorsToFromages(SigngenderBigSisterArray, 'BigSister');
                applyColorsToFromages(SigngenderSnootyArray, 'Snooty');
                applyColorsToFromages(SigngenderSmugArray, 'Smug');
                applyColorsToFromages(SigngenderPeppyArray, 'Peppy');
                applyColorsToFromages(SigngenderNormalArray, 'Normal');
                applyColorsToFromages(SigngenderLazyArray, 'Lazy');
                applyColorsToFromages(SigngenderJockArray, 'Jock');
                applyColorsToFromages(SigngenderCrankyArray, 'Cranky');

        // modifier les lables 
                function ModifieLabels(SigngenderEspeceArray,IdLabels1,IdLabels2,PositionX,PositionY){
                    if (SigngenderEspeceArray.length > 4) {
                        for (let i = 0; i < SigngenderEspeceArray.length; i++) {
                            d3.select(`#${IdLabels1}${i}`)
                            .attr("transform", (d) => `translate(${PositionX},${PositionY}) translate(${arcGeneratorlabelMulti.centroid(d)})`)

                            d3.select(`#${IdLabels2}${i}`)
                            .attr("transform", (d) => `translate(${PositionX},${PositionY+15}) translate(${arcGeneratorlabelMulti.centroid(d)})`)
                        }
                    }
                }
                ModifieLabels(SigngenderBigSisterArray,"FromageLabel1BigSister","FromageLabel2BigSister",PositionX1,PositionY1)
                ModifieLabels(SigngenderNormalArray,"FromageLabel1Normal","FromageLabel2Normal",PositionX2,PositionY1)
                ModifieLabels(SigngenderCrankyArray,"FromageLabel1Cranky","FromageLabel2Cranky",PositionX1,PositionY2)
                ModifieLabels(SigngenderPeppyArray,"FromageLabel1Peppy","FromageLabel2Peppy",PositionX2,PositionY2)
                ModifieLabels(SigngenderJockArray,"FromageLabel1Jock","FromageLabel2Jock",PositionX1,PositionY3)
                ModifieLabels(SigngenderSmugArray,"FromageLabel1Smug","FromageLabel2Smug",PositionX2,PositionY3)
                ModifieLabels(SigngenderLazyArray,"FromageLabel1Lazy","FromageLabel2Lazy",PositionX1,PositionY4)
                ModifieLabels(SigngenderSnootyArray,"FromageLabel1Snooty","FromageLabel2Snooty",PositionX2,PositionY4)
                // a*22 peppy pluie

        // modifier les pluie si < 3 
                function ModifieRain(SigngenderEspeceArray, Perso){
                    console.log(SigngenderEspeceArray)
                    if (SigngenderEspeceArray.length < 3) {
                            for (let i = 0; i < SigngenderEspeceArray.length; i++) {
                                console.log(Perso)
                                d3.select(`#Fromage${Perso}${i}`)
                                    .attr("d", arcGeneratorPetit)
                                
                            }
                        }
                } 

                ModifieRain(SigngenderBigSisterArray,"BigSister")
                ModifieRain(SigngenderNormalArray,"Normal")
                ModifieRain(SigngenderCrankyArray,"Cranky")
                ModifieRain(SigngenderPeppyArray,"Peppy")
                ModifieRain(SigngenderJockArray,"Jock")
                ModifieRain(SigngenderSmugArray,"Smug")
                ModifieRain(SigngenderLazyArray,"Lazy")
                ModifieRain(SigngenderSnootyArray,"Snooty")

        // créer des labels
        for (let i = 0; i < 3; i++) {
            MonEspaceSVG.append('line')
                .attr("id", `TraitLabel0${i}`)
                .attr('x1', (PositionX2 + PositionX1)/2 - 65)
                .attr('y1', PositionY1 -150 + i*20)
                .attr('x2', (PositionX2 + PositionX1)/2 -65)
                .attr('y2', PositionY1 -150 +10 + i*20)
                .attr('stroke-linecap', "round")
                .attr("stroke", `${Personnalite[i][1]}`)
                .attr('stroke-width', 6)
                .attr('stroke-dasharray', 7)
                .attr("stroke-opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("stroke-opacity", 0.8) 

            MonEspaceSVG.append("text")
                .attr("id", `TraitLabelText0${i}`)
                .text(Personnalite[i][0]) 
                .attr("x", (PositionX2 + PositionX1)/2 - 59)
                .attr("y", PositionY1 -150 +8+ i*20)
                .style("text-anchor", "left") 
                .attr('font-family', "AnimalCrossing")
                .style("fill", "white")
                .style("font-size", "15px")
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.8) 
        }
        for (let i = 0; i < 3; i++) {
            MonEspaceSVG.append('line')
                .attr("id", `TraitLabel1${i}`)
                .attr('x1', (PositionX2 + PositionX1)/2 +17)
                .attr('y1', PositionY1 -150 + i*20)
                .attr('x2', (PositionX2 + PositionX1)/2 +17 )
                .attr('y2', PositionY1 -150 +10 + i*20)
                .attr('stroke-linecap', "round")
                .attr("stroke", `${Personnalite[i+3][1]}`)
                .attr('stroke-width', 6)
                .attr('stroke-dasharray', 7)
                .attr('stroke-opacity', 0) 
                .transition()
                    .duration(1050) 
                    .attr("stroke-opacity", 0.8) 

            MonEspaceSVG.append("text")
                .attr("id", `TraitLabelText1${i}`)
                .text(Personnalite[i+3][0]) 
                .attr("x", (PositionX2 + PositionX1)/2 +23)
                .attr("y", PositionY1 -150 +8+ i*20)
                .style("text-anchor", "left") 
                .attr('font-family', "AnimalCrossing")
                .style("fill", "white")
                .style("font-size", "15px")
                .attr("opacity", 0)
                .transition()
                    .duration(1050) 
                    .attr("opacity", 0.8) 
        }

                
    })
}