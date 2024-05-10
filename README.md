#Visualisation des caractéristiques des personnages non jouables du jeu “Animal Crossing new horizon” en fonction de leur signe astrologique

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
Notre visualisation de données ne met pas en lien toutes ces variables. Nous prenent donc en compte : `Name`, `Species`, `Gender`, `Personality`, `Hobby` et `Sign`.

`Type` is separated in 12 different categories of weapons:

## Utilisation


## Autrices


## Acknolegements
Le professeur Isaac Pante pour son enseigenent de qualité
