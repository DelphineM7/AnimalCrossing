// A SUPPRIMER QUAND LE CODE SERA FINI

//déplacer les grandes étoiles
etoile_jaune.transition()
.duration(1000) 
.attr('x', milieuX + 32)
.attr('y', milieuY - 85)

etoile_rose.transition()
.duration(1000) 
.attr('x', milieuX - 152)
.attr('y', milieuY - 225)

etoile_vert.transition()
.duration(1000) 
.attr('x', milieuX - 117)
.attr('y', milieuY + 148)

etoile_bleu.transition()
.duration(1000) 
.attr('x', milieuX + 166)
.attr('y', milieuY + 40) 

//les traits
trait1
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition()
.attr('x1', milieuX + 176)
.attr('y1', milieuY + 50)
.attr('x2', milieuX + 62)
.attr('y2', milieuY - 65)
.attr('stroke-opacity', .1)
.transition()
.duration(1000)
.attr('stroke-opacity', .5)
.attr("stroke", "white")  

trait2
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition()
.attr('x1', milieuX + 80)
.attr('y1', milieuY - 217)
.attr('x2', milieuX + 62)
.attr('y2', milieuY - 65)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")  

trait3
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX + 80)
.attr('y1', milieuY - 217)
.attr('x2', milieuX - 122)
.attr('y2', milieuY - 195)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")


trait4
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX - 200)
.attr('y1', milieuY + 15)
.attr('x2', milieuX - 122)
.attr('y2', milieuY - 195)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")  

trait5
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX + 80)
.attr('y1', milieuY - 217)
.attr('x2', milieuX - 200)
.attr('y2', milieuY + 15)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")  

trait6
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX - 103)
.attr('y1', milieuY + 158)
.attr('x2', milieuX - 200)
.attr('y2', milieuY + 15)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")  

trait7
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")
.transition() 
.attr('x1', milieuX - 95)
.attr('y1', milieuY + 188)
.attr('x2', milieuX - 115)
.attr('y2', milieuY + 225)
.attr('stroke-opacity', .1)
.transition()
.duration(1000) 
.attr('stroke-opacity', .5)
.attr("stroke", "white")  

trait8
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d") 

trait9
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d") 

trait10
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")

trait11
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")

trait12
.transition()
.duration(500) 
.attr("stroke", "#0f0f3d")

// les étoiles
étoile1.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
.transition() 
.attr('cx',milieuX + 80)
.attr('cy',milieuY - 217)
.attr('r', 5)
.transition()
.duration(1000)
.attr("fill", "white")  

étoile2.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
.transition() 
.attr('cx',milieuX - 200)
.attr('cy',milieuY + 15)
.attr('r', 5)
.transition()
.duration(1000)
.attr("fill", "white")  

étoile3.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
.transition() 
.attr('cx',milieuX - 115)
.attr('cy',milieuY + 225)
.attr('r', 5)
.transition()
.duration(1000)
.attr("fill", "white")  

étoile4.transition()
.duration(500) 
.attr("fill", "#0f0f3d")

étoile5.transition()
.duration(500) 
.attr("fill", "#0f0f3d") 

étoile6.transition()
.duration(500) 
.attr("fill", "#0f0f3d") 

étoile7.transition()
.duration(500) 
.attr("fill", "#0f0f3d")
.duration(1000)


étoile8.transition()
.duration(500) 
.attr("fill", "#0f0f3d")

étoile9.transition()
.duration(500) 
.attr("fill", "#0f0f3d")