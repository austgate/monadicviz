/**
*  Function to draw circles
*  
*  @param divid
*  The name of the ID that the text is to be attached to
*
*  @param data
*  JSON object data
*/
function draw(divid, data) {
        var circle;
	// Create Raphael object
	var paper = Raphael(250, 10, 750, 750);
	var k=0;
//sconsole.log(data.nodes.length);
	// Iterate across the top-end data points.
	for (var i in data.nodes) {
	   	k++;
           // calculate the base angle

           	var angle = 0 + (k * (1 / data.nodes.length) * 2 * Math.PI);

	   	var x = Math.round(250 + ((200) * Math.cos(angle))); //}

		// calculate the arc from the centre for the y value
   	   	var y = Math.round(250 + ((200) * Math.sin(angle)));

                var ms = 500;
                //calculate  the circle - y coord, x coord, number of letters -> smoothing needs applying
	  	circle = paper.circle(y, (x + 10), data.nodes[i].count);
                /**
                 * @todo Update the group to change colour based on the 
                 * group id
                 */
                if (data.nodes[i].group == '1') {
	  	   circle.attr("fill", "#008B8B");
                } else {
                   circle.attr("fill", "#D3D3D3");
                }
                // add the id to the created node
                circle.node.id = "id-"+data.nodes[i].id;
                //remove the stroke
		circle.attr("stroke", "#ffff");

        	var p = paper.text(y, x, data.nodes[i].name);
		var hoverIn = function() {
                   var rid = ( this.id > 0) ? this.id/2 : 0;
                   var text = (hoverInText(data.nodes[rid]) !== undefined) ? 
                      hoverInText(data.nodes[rid]) : "<p>No data could be found for this point</p>";
                   $("#"+divid).html(text).fadeIn("slow");
                   addContextualLinks(data.nodes[rid].links);
                   this.animate({ 'fill': "#F0FFF0"});
                   txt = paper.text(250, 255, data.nodes[rid].name);
                };
		    
		var hoverOut = function() {
                   var rid = ( this.id > 0) ? this.id/2 : 0;
                   txt.stop().animate({opacity: 0}, ms);
		   this.animate({ "fill": "#D3D3D3"});
                   $("#"+divid).fadeOut("slow");
                   removeContextualLinks(data.nodes[rid].links);
		}
		circle.hover(hoverIn, hoverOut, circle, circle);
	}  
} //end data

/**
*  Function to add contextual links taken from ids in the originating node.
*  Void function to remove the original fill and stroke and replace with CSS via jQuery
* @param Array
* Array of ids taken from the originating JSON
*/
function addContextualLinks(links) {
   for (var l in links) {
     $("#id-"+links[l]).removeAttr('fill').removeAttr('stroke');
     $("#id-"+links[l]).addClass("hover");
     $("#id-"+links[l]).attr("cx", ($("#id-"+links[l]).attr("cx")*0.9));
     $("#id-"+links[l]).attr("cy", ($("#id-"+links[l]).attr("cy")*0.9));
   }
}

/**
*  Function to add contextual links taken from ids in the originating node.
*  Void function to remove the original fill and stroke and replace with CSS via jQuery
* @param Array
* Array of ids taken from the originating JSON
*/
function removeContextualLinks(links) {
   for (var l in links) {
     $("#id-"+links[l]).attr("fill", "#D3D3D3").attr("stroke", "#ffff");
     $("#id-"+links[l]).attr("cx", ($("#id-"+links[l]).attr("cx")*1.1));
     $("#id-"+links[l]).attr("cy", ($("#id-"+links[l]).attr("cy")*1.1));
   }
}

/**
*  Function for hoverin to build the text
*
*  @param JSON Object
*  The JSON correspondent object
*  @return string
*  HTML string
*/
function hoverInText(correspondent) {
   var text = "<div id='cname'><strong>" + correspondent.name + "</strong></div>";
   text = "";
 
   for (var m in correspondent.description)
   {
     //get the array keys for titles
      var tmp_key = Object.keys(correspondent.description[m]);
     text += "<div id='letter'><em><a href='"+tmp_key+"'>" + tmp_key + "</a></div><ul></li>";
     for (var k in correspondent.description[m]) {
       for (var n in correspondent.description[m][k]) {
         Object.getOwnPropertyNames(correspondent.description[m][k][n]).forEach(function(val,idx,array) {
           text += "<li>"+correspondent.description[m][k][n][val]+" : " + val + "</li>";
         });
       }
     }
    text += "</ul></div>";
   }
   

   return text;
}
