        //déplacer les grandes étoiles
        etoile_jaune.transition()
        .duration(1000) 
        .attr('x', milieuX + 228)
        .attr('y', milieuY + 259)
        
        etoile_rose.transition()
        .duration(1000) 
        .attr('x', milieuX - 140)
        .attr('y', milieuY - 145)
        
        etoile_vert.transition()
        .duration(1000) 
        .attr('x', milieuX - 315)
        .attr('y', milieuY + 0 )
        
        etoile_bleu.transition()
        .duration(1000) 
        .attr('x', milieuX - 295)
        .attr('y', milieuY - 345)
        
        //les traits
        trait1
        .transition()
        .duration(500) 
        .attr("stroke", "#0f0f3d")
        .transition()
        .attr('x1', milieuX - 275)
        .attr('y1', milieuY - 317)
        .attr('x2', milieuX - 155)
        .attr('y2', milieuY - 340)
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
        .attr('x1', milieuX - 80)
        .attr('y1', milieuY - 200)
        .attr('x2', milieuX - 155)
        .attr('y2', milieuY - 340)
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
        .attr('x1', milieuX - 80)
        .attr('y1', milieuY - 200)
        .attr('x2', milieuX - 110)
        .attr('y2', milieuY - 125)
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
        .attr('x1', milieuX - 125)
        .attr('y1', milieuY - 115)
        .attr('x2', milieuX - 240)
        .attr('y2', milieuY - 95)
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
        .attr('x1', milieuX - 285)
        .attr('y1', milieuY + 25)
        .attr('x2', milieuX - 240)
        .attr('y2', milieuY - 95)
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
        .attr('x1', milieuX - 285)
        .attr('y1', milieuY + 25)
        .attr('x2', milieuX +75)
        .attr('y2', milieuY +175)
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
        .attr('x1', milieuX + 248)
        .attr('y1', milieuY + 279)
        .attr('x2', milieuX +75)
        .attr('y2', milieuY +175)
        .attr('stroke-opacity', .1)
        .transition()
        .duration(1000) 
        .attr('stroke-opacity', .5)
        .attr("stroke", "white")  
        
        trait8
        .transition()
        .duration(500) 
        .attr("stroke", "#0f0f3d")
        .transition() 
        .attr('x1', milieuX + 248)
        .attr('y1', milieuY + 279)
        .attr('x2', milieuX + 135)
        .attr('y2', milieuY +65)
        .attr('stroke-opacity', .1)
        .transition()
        .duration(1000) 
        .attr('stroke-opacity', .5)
        .attr("stroke", "white")  
        
        trait9
        .transition()
        .duration(500) 
        .attr("stroke", "#0f0f3d")
        .transition() 
        .attr('x1', milieuX - 120)
        .attr('y1', milieuY - 120)
        .attr('x2', milieuX + 135)
        .attr('y2', milieuY + 65)
        .attr('stroke-opacity', .1)
        .transition()
        .duration(1000) 
        .attr('stroke-opacity', .5)
        .attr("stroke", "white")  
        
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
        
        trait13
        .transition()
        .duration(500) 
        .attr("stroke", "#0f0f3d")
        
        trait14
        .transition()
        .duration(500) 
        .attr("stroke", "#0f0f3d")
        
        trait15
        .transition()
        .duration(500) 
        .attr("stroke", "#0f0f3d")
        
        trait16
        .transition()
        .duration(500) 
        .attr("stroke", "#0f0f3d")
        
        trait17
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
        
        étoile10.transition()
        .duration(500) 
        .attr("fill", "#0f0f3d")
        
        étoile11.transition()
        .duration(500) 
        .attr("fill", "#0f0f3d")
        
        étoile12.transition()
        .duration(500) 
        .attr("fill", "#0f0f3d")
        
        étoile13.transition()
        .duration(500) 
        .attr("fill", "#0f0f3d")
        
        étoile14.transition()
        .duration(500) 
        .attr("fill", "#0f0f3d")