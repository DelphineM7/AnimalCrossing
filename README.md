# Visualisation des caractéristiques des personnages non jouables du jeu “Animal Crossing new horizon” en fonction de leur signe astrologique

## Description
Cette visualisation de données a pour but de permettre la mise en lien des caractéristiques et du signe astrologique des personnages non jouables du jeu Animal Crossing New Horizon de la compagnie Nintendo. La base de données utilisées pour ce projet a été trouvé sur le site [Kaggle](https://www.kaggle.com).

## Base de données des villageois
[base de données] (https://www.kaggle.com/datasets/jessicali9530/animal-crossing-new-horizons-nookplaza-dataset?select=villagers.csv)
La base de données que nous avons utilisées a été mise en ligne par l'utilisatrice : Jessica Li. Ces données mettent en lien le nom des personnages et leur id avec leur genre, leur caractère, leur style et leur date de naissance. 
Nous avons par la suite modifié les données de leur date de naissance pour y faire correspondre à la place leur signe astrologique. 

## Les outils utilisés
Pour ce travail de visualisation de données, nous avons utilisé la bibliothèque D3

## Les données
Les données contenu dans la base de donnée contienne les informations suivante : `Name`, `Species`, `Gender`, `Personality`, `Hobby`, `Birthday` , `Catchphrase`, `Favorite Song`,`Style1`, `Style2`, `Color1`.
Nous avons par la suite modifié les données de leur date de naissance pour y faire correspondre à la place leur signe astrologique en y rajoutant la variable : `Sign`. 
Notre visualisation de données ne met pas en lien toutes ces variables. Car toute n'était pas sigificative dans notre modèle et ne rentrant pas dans nos interrogations. Nous avons donc choisit de prendre en compte : `Name`, `Species`, `Gender`, `Personality`, `Hobby` et `Sign`.

`Name` est unique au 391 personnages non jouable du jeu

`Gender` est une variable séparant les personnages entre males et femelles.

`Species` est une catégorie regroupant les villageois par leur espèce:

  - Alligator
  - Anteater
  - Bear
  - Bird
  - Bull
  - Cat
  - Chicken
  - Cow
  - Cub
  - Deer
  - Dog
  - Duck
  - Eagle
  - Elephant
  - Frog
  - Goat
  - Gorilla
  - Hamster
  - Hippo
  - Horse
  - Kangaroo
  - Koala
  - Lion
  - Monkey
  - Mouse
  - Octopus
  - Ostrich
  - Penguin
  - Pig
  - Rabbit
  - Rhino
  - Sheep
  - Squirrel
  - Tiger
  - Wolf

## L'interface
Notre but avec cette interface était à la fois de permettre une navigation entre les multiples variables que nous avons voulu mettre en lumière, mais aussi de nous inspirer du design du jeu de base.  Nous avons mis beaucoup d'efforts pour le rendre le plus agréable à l'œil et aussi mignon que l’œuvre originel. Le tout, en restant dans le thème des signes du zodiaque grâce aux constellations.

Le point d'intérêt principal de  chaque page  se trouve au centre et représente signe astrologique sélectionné composée grâce à du SVG. En haut de la page, à gauche à droite se trouve des flèches qui permettent de sélectionner le signe astrologique suivant et précédent selon leur date dans l'année. 

À gauche de la page se trouve des boutons correspondant aux différentes sous-catégories que nous voulons explorer.  En passant dessus avec le curseur, celle-ci indique grâce à des graphiques les différentes statistiques entre les variables sélectionnées et le signe choisi qui s'adapte de manière dynamique.


## L'utilisation


## Les autrices
Le travail présenté à été fait par Delphine Mamie et Camille Steger-Pellerin, de la reflection préalable et la mise au point du concept, à la forme final. Cette visualisation de données à été créée dans le cadre du cours "visualisation de donnée" du professeur Isaac Pante de l'université de Lausanne au printemps 2022.

## Nos remerciment
Le professeur Isaac Pante pour son enseigement de qualité
