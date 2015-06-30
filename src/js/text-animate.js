app.divExpand = function () {
	
//	$('.rotate-div').hide();
//	$('.mati-collage').hide();

	$('.brim-collage').animate({marginTop:'1200px'}, 30000);
	
   $('.mati-collage').hide();
	
	setTimeout(function() { 
		$('.mati-collage').show();
		$('.mati-collage').animate({right:'200%'}, 120000);
	
	}, 20000);

//   $('.mati-collage').show();
	
		
};
