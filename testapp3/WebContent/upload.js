/**
 * 
 */
 //var base64image
  var   base64image 
function genScreenshot() {
	
	var element = document.getElementById("box1");
	
	html2canvas(element).then(function(canvas) {
	    // Export the canvas to its data URI representation
	    base64image = canvas.toDataURL("image1/png");

	    // Open the image in a new window
	    window.open(base64image , "_blank");
	    var button = document.getElementById('btn-download');
	    var button = document.getElementById('btn-download');
	    button.href = base64image;
	    console.log("base64image",base64image)
	    
	});
	
	
	
	}
	
