app.hamburger = function(){
	
	
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		
		if ($('.responsive-menu').hasClass('slideDown')) {
		
			   $('.responsive-menu').addClass('fadeOutUp');
				 setTimeout(function () {
							$('.responsive-menu').removeClass('slideDown');
					}, 500);

		}	else {
			$('.responsive-menu').removeClass('fadeOutUp');
			$('.responsive-menu').addClass('slideDown');
				}
//    	 // $('.flags').toggle("slide", { direction: "left" }, 300);
//    	$('.hero-section').toggleClass('expand400');
//    	// $('.philosophy').toggleClass('expand400');
//    	$('.contact-content').toggleClass('expand400');
  });
	

	
};