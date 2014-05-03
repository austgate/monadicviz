function draw(data) {
var circle;
	// Create Raphael object
	var paper = Raphael(250, 10, 750, 750);
	var k=0;
	var diameter = 10;

	// Iterate across the top-end data points.
	for (var i in data) {
	   	k++;
           // calculate the base angle
           	var angle = 0 + (k * (1 / data.length) * 2 * Math.PI);

	   	var x = Math.round(250 + ((200) * Math.cos(angle))); //}

		// calculate the arc from the centre for the y value
   	   	var y = Math.round(250 + ((200) * Math.sin(angle)));

	  	// need a function to make this into a curve of sorts
	  	// creates the circle at (y, x, radius)
	  	// radius needs to be placed using the nearness of the event time to the locus
var txt;

    var ms = 500;
	  	circle = paper.circle(y, x, diameter);
	  	// Sets the fill attribute of the circle to red (#f00)

	  	circle.attr("fill", "#D3D3D3");

		// Sets the stroke attribute of the circle to white
		circle.attr("stroke", "#fff");
//circle.attr("id", data[i].term);

        	var p = paper.text((x, y, data[i].term);
 		//p.rotate((-90 + (angle*(k/10))), x, y);

		    var hoverIn = function() {
                        k = 0;
                        var assoc = data[i].assoc;
                        var text = "Headline" + data[(this.id-1)].term + "\n " + " Some text ";
                        txt = paper.text(250, 255, text);

		    };
		    
		    var hoverOut = function() {
//to do, remove the circle's boundary
			txt.stop().animate({opacity: 0}, ms); 
		    }
		circle.hover(hoverIn, hoverOut, circle, circle);
	} 

} //end data
